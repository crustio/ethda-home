'use strict'
import { resolve } from 'path'
import { constants, ethers } from 'ethers'

import { Common } from '@ethereumjs/common'
import { BlobEIP4844Transaction } from '@ethereumjs/tx'
import { commitmentsToVersionedHashes, delay, getBytes, parseBigintValue } from './utils'
import { TypedDataSigner } from '@ethersproject/abstract-signer'
import { keccak256 } from 'ethereum-cryptography/keccak'
import { RLP } from '@ethereumjs/rlp'
import { ecsign } from '@ethereumjs/util'

export class BlobClient {
  private _provider: ethers.providers.JsonRpcProvider
  private _signer: ethers.Signer | any

  constructor(provider: (ethers.Signer & TypedDataSigner) | ethers.providers.JsonRpcProvider) {
    if (provider instanceof ethers.providers.JsonRpcProvider) {
      this._provider = provider
    } else {
      this._provider = (provider as ethers.Signer & TypedDataSigner).provider as ethers.providers.JsonRpcProvider
      this._signer = provider
    }

    const SETUP_FILE_PATH = resolve(__dirname, 'lib', 'trusted_setup.txt')
    // loadTrustedSetup(SETUP_FILE_PATH)
  }

  async sanityCheck(tx: any) {
    let { chainId, nonce, to, value, data, maxPriorityFeePerGas, maxFeePerGas, gasLimit, maxFeePerBlobGas } = tx

    if (!chainId) {
      chainId = (await this._provider.getNetwork()).chainId
    }

    if (!nonce) {
      nonce = await this._signer.getTransactionCount()
    }

    value = !value ? '0x' : parseBigintValue(value)

    // if (!maxFeePerGas) {
    //   const params = { from: this._wallet.address, to, data, value };
    //   // gasLimit = await this.estimateGas(params);
    //   maxFeePerGas = await this.suggestGasPrice();
    //   if (!maxFeePerGas) {
    //     throw Error('estimateGas: execution reverted');
    //   }
    // } else {
    //   maxFeePerGas = parseBigintValue(maxFeePerGas);
    // }

    maxFeePerGas = BigInt(1000000000)

    // TODO
    maxFeePerBlobGas = !maxFeePerBlobGas ? 2000_000_000_000 : parseBigintValue(maxFeePerBlobGas)

    to = to ?? constants.AddressZero

    gasLimit = 21000

    data = data ?? '0x'

    maxPriorityFeePerGas = maxPriorityFeePerGas ?? 0

    return {
      chainId,
      nonce,
      to,
      value,
      data,
      maxPriorityFeePerGas,
      maxFeePerGas,
      gasLimit,
      maxFeePerBlobGas,
    }
  }

  async sendTx(blobs: any, tx: any, convertData: any) {
    /* eslint-disable prefer-const */
    let { chainId, nonce, to, value, data, maxPriorityFeePerGas, maxFeePerGas, gasLimit, maxFeePerBlobGas } = await this.sanityCheck(tx)

    // blobs
    const commitments = convertData.commitments
    const proofs = convertData.proofs
    const versionedHashes = convertData.versionedHashes
    // for (let i = 0; i < blobs.length; i++) {
    //   commitments.push(blobToKzgCommitment(blobs[i]))
    //   proofs.push(computeBlobKzgProof(blobs[i], commitments[i]))
    //   versionedHashes.push(commitmentsToVersionedHashes(commitments[i]))
    // }

    const common = Common.custom(
      {
        name: 'ethda',
        networkId: chainId,
        chainId: chainId,
      },
      {
        eips: [1559, 3860, 4844],
      },
    )
    const message = [nonce, maxFeePerGas, gasLimit, to, value, data, 1001n, 0, 0]

    const signHash = keccak256(RLP.encode(message))
    const pk: any = getBytes((this._signer as ethers.Wallet).privateKey)
    let { v, r, s } = ecsign(signHash, pk)
    v = 2n * 1001n + 8n + v
    const blobTx = new BlobEIP4844Transaction(
      {
        chainId,
        nonce,
        to,
        value,
        data,
        maxPriorityFeePerGas: maxFeePerGas,
        maxFeePerGas,
        gasLimit,
        maxFeePerBlobGas,
        blobVersionedHashes: versionedHashes,
        blobs,
        kzgCommitments: commitments,
        kzgProofs: proofs,
        v: v - 2n * 1001n - 35n,
        r: r,
        s: s,
      },
      { common },
    )

    const rawData = blobTx.serializeNetworkWrapper()

    const hex = Buffer.from(rawData).toString('hex')
    return await this._provider.send('eth_sendRawTransaction', ['0x' + hex])
  }

  async isTransactionMined(transactionHash: any) {
    const txReceipt = await this._provider.getTransactionReceipt(transactionHash)
    if (txReceipt && txReceipt.blockNumber) {
      return txReceipt
    }
    return null
  }

  async getTxReceipt(transactionHash: any) {
    let txReceipt
    while (!txReceipt) {
      txReceipt = await this.isTransactionMined(transactionHash)
      if (txReceipt) break
      await delay(5000)
    }
    return txReceipt
  }

  async downloadBlobs(txHash: any) {
    const tx = await this._provider.send('eth_getTransactionByHash', [txHash])

    return {
      blob_hashes: tx?.blob_hashes,
      sidecar: tx?.sidecar,
    }
  }

  getBlobHash(blob: any) {
    // const commit = blobToKzgCommitment(blob)
    const commit: any = ''
    const localHash = commitmentsToVersionedHashes(commit)
    const hash = new Uint8Array(32)
    hash.set(localHash.subarray(0, 32 - 8))
    return ethers.utils.hexlify(hash)
  }
}
