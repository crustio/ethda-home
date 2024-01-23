'use client'
import { LoadingFull } from '@/components/ALoading'
import { AToastFull } from '@/components/AToast'
import { Header } from '@/components/Header'
import { EncodeBlobs, createMetaDataForBlobs, formatEthereumAddress, scrollToTop, sleep } from '@/utils'
import { ethda } from '@/utils/wagmi'
import { Common } from '@ethereumjs/common'
import { BlobEIP4844Transaction } from '@ethereumjs/tx'
import { ConnectKitButton } from 'connectkit'
import { ethers } from 'ethers'
import { ChangeEvent, Fragment, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { parseTransaction, stringToHex } from 'viem'
import { useWalletClient, useAccount } from 'wagmi'

const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  color: #ffffff;
  justify-content: between;
  background: #fc7823;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  width: 260px;
  height: 48px;
  border-radius: 10px;
`

const Wrapper = styled.div(({}) => ({
  borderRadius: '10px',
  backgroundImage:
    'linear-gradient(to left, #000000 30%, transparent 10%), linear-gradient(to left, #000000 30%, transparent 10%), linear-gradient(to top, #000000 40%, transparent 10%), linear-gradient(to top, #000000 30%, transparent 10%)',
  backgroundPosition: 'left top, left bottom, left top, right top',
  backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
}))
const DivBox = styled(Wrapper)(({}) => ({
  backgroundSize: '10px 1px, 10px 1px, 1px 9px, 1px 9px',
}))

const ContentBox = styled(Wrapper)(({}) => ({
  backgroundSize: '10px 1px, 10px 1px, 1px 9px, 1px 9px',
}))

const BlobTX = () => {
  const [clickStart, setIsClickStart] = useState(false)
  const [loading, setLoading] = useState<any>({ loading: false, success: false, error: false })
  const inputImgRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | undefined | null>(null)
  const [selectedBlob, setSelectedBlob] = useState<boolean>(true)
  const [inputText, setInputText] = useState<string>('')
  const account = useAccount()

  const handleBlobClick = (blob: boolean) => {
    setSelectedBlob(blob)
  }

  const allowDrop = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  const handleDrop = (event: { preventDefault: () => void; dataTransfer: { files: { item: (arg0: number) => any } } }) => {
    event.preventDefault()

    const files = event.dataTransfer.files?.item(0)
    const fileSizeInKB = files.size / 1024
    if (fileSizeInKB > 128) {
      return
    }
    setFile(files)
  }

  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0)
    if (!file) return
    const fileSizeInKB = file.size / 1024
    if (fileSizeInKB > 128) {
      return
    }
    setFile(file)
  }, [])

  useEffect(() => {
    if (!account?.isConnected) {
      setIsClickStart(false)
    }
  }, [account?.isConnected])

  useEffect(() => {
    if (loading.loading || loading.success || loading.error) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [loading])
  const handleFileSelect = () => {
    inputImgRef.current?.click()
  }

  const { data: walletClient } = useWalletClient({ chainId: ethda.id })
  const [transData, setTransData] = useState<{ text: Uint8Array; img: Uint8Array; imgType: string }>()

  const onTranscode = async () => {
    if (!walletClient || !file || file.size > 128 * 1024) return
    const fr = new FileReader()
    fr.onload = () => {
      setTransData({
        text: Buffer.from(inputText, 'utf-8').valueOf(),
        img: Buffer.from(fr.result as ArrayBuffer).valueOf(),
        imgType: file.type,
      })
    }
    fr.readAsArrayBuffer(file)
  }
  const ub8a2numa = (u8: Uint8Array) => {
    const uint8Array = u8

    const numberArray = []
    for (let i = 0; i < uint8Array.length; i++) {
      numberArray.push(uint8Array[i])
    }
    return numberArray
  }
  const getConvertOfZkg = async (data: Uint8Array[]) => {
    const commitments: Uint8Array[] = []
    const proofs: Uint8Array[] = []
    const versionHashs: Uint8Array[] = []
    const encodeBlobs: Uint8Array[] = []
    const url = 'https://blobscan-devnet.ethda.io/backend/convert/blob'

    for (let index = 0; index < data.length; index++) {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: ub8a2numa(data[index]),
        }),
      }).then((res) => res.json())
      commitments.push((result.commitments as any[]).map((item) => new Uint8Array(item.data))[0])
      proofs.push((result.proofs as any[]).map((item) => new Uint8Array(item.data))[0])
      versionHashs.push((result.versionedHashes as any[]).map((item) => new Uint8Array(Object.values(item)))[0])
      const encoded = EncodeBlobs(data[index])
      if (encoded.length > 1) {
        throw 'blob too large!'
      }
      // console.info('decode:', DecodeBlobs(encoded[0]))
      encodeBlobs.push(encoded[0])
    }

    return { commitments, proofs, versionHashs, encodeBlobs }
  }

  const loopGetResult = async ({ result }: any) => {
    while (true) {
      await sleep(5000)
      const data = await fetch('https://rpc-devnet.ethda.io', {
        method: 'POST',
        body: JSON.stringify({
          method: 'eth_getTransactionReceipt',
          params: [result],
          id: 1,
          jsonrpc: '2.0',
        }),
      })
        .then((r) => r.json())
        .catch((e) => console.error(e))
        .finally(() => setLoading({ loading: false, success: false, error: true }))
      if (data.result && 'status' in data.result && data.result.status === '0x1') {
        setLoading({ loading: false, success: true, error: false })
        return data
      } else {
        setLoading({ loading: false, success: false, error: true })
      }
    }
  }

  const onSendTx = async () => {
    if (!walletClient || !transData) return
    setLoading({ loading: true })
    const blobs = [transData.text, transData.img]
    const { commitments, proofs, versionHashs, encodeBlobs } = await getConvertOfZkg(blobs)
    const [account] = await walletClient.getAddresses()

    const blobsMeta = createMetaDataForBlobs(account, ['text/plain', transData.imgType])
    const blobsMetadataHex = stringToHex(JSON.stringify(blobsMeta))
    const { result: nonce } = await fetch('https://rpc-devnet.ethda.io', {
      method: 'POST',
      body: JSON.stringify({
        method: 'eth_getTransactionCount',
        params: [account, 'latest'],
        id: 1,
        jsonrpc: '2.0',
      }),
    }).then((r) => r.json())

    const gasLimit = 21000n + BigInt(blobsMetadataHex.length) * 10n
    const gasPrice = 1000000000n

    const request = await walletClient.prepareTransactionRequest({
      account,
      nonce,
      gas: gasLimit,
      gasPrice: gasPrice,
      to: ethers.constants.AddressZero,
      value: 0n,
      data: blobsMetadataHex,
      type: 'legacy',
      chain: ethda,
    })

    const res = await walletClient?.signTransaction(request)
    const transaction = parseTransaction(('0x' + res) as `0x${string}`)
    if (!transaction) return

    const common = Common.custom(
      {
        name: 'ethda',
        networkId: 177,
        chainId: 177,
      },
      {
        eips: [1559, 3860, 4844],
      },
    )

    const blobTx = new BlobEIP4844Transaction(
      {
        chainId: 177n,
        nonce,
        to: ethers.constants.AddressZero,
        data: blobsMetadataHex,
        value: 0n,
        maxPriorityFeePerGas: 1000000000n,
        maxFeePerGas: 1000000000n,
        gasLimit: transaction.gas,
        maxFeePerBlobGas: 2000_000_000_000n,
        blobVersionedHashes: versionHashs,
        blobs: encodeBlobs,
        kzgCommitments: commitments,
        kzgProofs: proofs,
        v: (transaction.v || 0n) - 2n * 177n - 35n,
        r: transaction.r,
        s: transaction.s,
      },
      { common },
    )
    const rawData = blobTx.serializeNetworkWrapper()

    const hex = Buffer.from(rawData).toString('hex')

    const value = await fetch('https://rpc-devnet.ethda.io', {
      method: 'POST',
      body: JSON.stringify({
        method: 'eth_sendRawTransaction',
        params: ['0x' + hex],
        id: 1,
        jsonrpc: '2.0',
      }),
    })
      .then((r) => r.json())
      .then(loopGetResult)
      .catch((e) => setLoading({ loading: false, success: false, error: true }))
  }

  const onSwitchTo = () => {
    window.open('https://www.eip4844.com', '_blank')
  }

  return (
    <div className=' font-[Montserrat]'>
      <Header
        className={` ${!clickStart ? 'bg-[#FBE8DE]  mo:bg-[#FCE1D6] mo:border-b-[#FCE1D6]' : 'bg-[#FFFFFFCC]'}  py-[27px]`}
        containerClassName='!w-full pl-9 pr-[31px] mo:w-full mo:pl-0 mo:pr-0 '
        logo={`b-EthDA.svg`}
        headerTextClassName='!text-[#000000] gap-[50px]'
      />
      <div className={` ${!clickStart && ' bg-[url(/blobTXBg.svg)] mo:bg-[url(/b-m-EthDA.svg)] '}  min-h-screen bg-cover `}>
        {clickStart ? (
          <div className='bg-[url(/black_bg.svg)] mo:bg-none bg-cover h-auto overflow-hidden '>
            <div>
              <div className='mo:w-full mo:px-[30px]  mx-auto w-container md:w-full md:px-[30px]   '>
                <div className=' flex  flex-row items-center mo:justify-between mo:h-[102px]'>
                  <div className='mo:hidden w-full h-[120px] mo:h-[42px] items-center flex text-2xl md:text-lg font-normal'>
                    <button onClick={onSwitchTo} className='flex flex-row items-center'>
                      Experience EIP-4844 <img src='/share3.svg' className=' mx-2' />
                    </button>
                    blob-carrying transactions (Blob TX)
                  </div>
                  <div className='rounded-lg border-[#FC7823] md:text-sm  border  h-[42px] items-center flex text-[#FC7823] px-[15px]'>
                    {formatEthereumAddress(account.address)}
                  </div>
                  <div
                    onClick={() => window.open(`https://blobscan-devnet.ethda.io/address/${account?.address}`, '_blank')}
                    className=' cursor-pointer flex mr-10 mo:mr-0 gap-[13px] items-center'
                  >
                    <img className='ml-5 mo:h-[32px]' src='deal.svg' />
                    <span className='text-[#FC7823] font-normal text-base'>History</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='mo:w-full mo:px-[30px]  mx-auto w-container md:w-full md:px-[30px] '>
              <div className='flex mo:gap-10 gap-[100px] md:gap-[50px]  mt-[30px] mo:mt-10 mo:flex mo:flex-wrap mo:w-full'>
                <div className='w-[440px] md:w-[400px] h-full mo:flex mo:flex-wrap mo:w-full mo:flex-col  '>
                  <div className='sm:hidden w-full h-[120px] mo:h-auto  items-center flex text-2xl mo:text-3xl md:text-lg font-normal mo:flex-wrap mo:flex-row'>
                    <button onClick={onSwitchTo}> Experience EIP-4844 </button>
                    <img src='/share3.svg' className=' mx-2' /> blob-carrying transactions (Blob TX)
                  </div>
                  <div className=' text-2xl mo:text-[26px] font-normal mo:mt-10'>Input</div>
                  <div className=' mt-[36px] md:mt-[40px] mo:mt-[30px] font-medium mo:text-lg md:text-sm mb-5'>Type text here</div>

                  <DivBox className=' w-full h-[68px] px-2'>
                    <input
                      placeholder='Please Enter ...'
                      maxLength={40}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className=' mt-2 input-Text mo:w-full w-[425px] md:w-[380px] h-[55px] '
                    />
                  </DivBox>

                  <div className=' text-base md:text-sm font-medium mt-[27px] mo:text-lg  mo:mt-10'>
                    Attach an image, not exceeding 128KB
                  </div>
                  <div className=' mo:px-[50px]'>
                    <DivBox className=' mt-5 w-full  h-[303px] md:h-[308px] border-[#000000] mo:mt-10  '>
                      <div onDrop={handleDrop} onDragOver={allowDrop} className=' flex items-center justify-center h-full flex-col '>
                        <input type='file' hidden ref={inputImgRef} accept='.png, .jpg, .jpeg, .gif, .svg' onChange={onFileChange} />
                        <div
                          onClick={handleFileSelect}
                          className=' cursor-pointer w-[100px] h-[100px] bg-[#FFF8F4] border  border-dashed rounded-[5px] border-[#FC7823] flex items-center justify-center'
                        >
                          <img src='chooseAnyImg.svg'></img>
                        </div>
                        <div className=' mt-5 mo:mt-[30px] text-center flex flex-col  overflow-hidden truncate w-40'>
                          <span className=' overflow-hidden truncate'>{file?.name}</span>
                          <button className=' text-base font-semibold' onClick={handleFileSelect}>
                            Browse
                          </button>
                        </div>
                      </div>
                    </DivBox>
                  </div>
                  <div className='mt-5 mo:mt-10 flex justify-center mb-20  mo:px-[50px]'>
                    <button
                      onClick={onTranscode}
                      className={` ${
                        !file?.name || !inputText ? 'cursor-not-allowed bg-[#BABABA] ' : 'bg-[#FC7823] '
                      } border px-6 text-base font-semibold items-center mo:w-full  flex rounded-xl text-[#FFFFFF] justify-center h-12 text-center`}
                    >
                      Transcode
                    </button>
                  </div>
                </div>
                <div className='w-0 flex-1 h-full  '>
                  <div className=' text-2xl  mo:text-[26px] mt-1'> Blob Data</div>
                  <div className='flex gap-[14px] '>
                    <button
                      onClick={() => handleBlobClick(true)}
                      className={`w-[195px] md:w-[180px] h-[50px] flex border-[#000000] ${
                        selectedBlob && 'custom-background'
                      } items-center justify-center mo:text-lg mt-[30px] md:text-sm  text-base font-medium `}
                    >
                      Blob1(Text data)
                    </button>
                    <button
                      onClick={() => handleBlobClick(false)}
                      className={`w-[195px] md:w-[180px] h-[50px] flex ${
                        !selectedBlob && 'custom-background'
                      } items-center border-[#000000] mo:text-lg justify-center mt-[30px] md:text-sm  border-dashed text-base font-medium `}
                    >
                      Blob2(Image data)
                    </button>
                  </div>

                  <ContentBox className='overflow-y-auto overflow-x-hidden  h-[442px] mo:h-[420px] p-5 break-all whitespace-normal '>
                    {transData && transData.text && <>{JSON.stringify(ub8a2numa(selectedBlob ? transData.text : transData.img))}</>}
                  </ContentBox>
                  <div className='mt-5 mo:mt-[37px] flex justify-center  mb-5 '>
                    <button
                      className={` ${!transData ? 'cursor-not-allowed bg-[#BABABA] ' : 'bg-[#FC7823] '} border mo:w-full  px-6 text-base font-semibold items-center flex  rounded-xl text-[#FFFFFF]  justify-center  h-12 text-center`}
                      onClick={onSendTx}
                    >
                      Send Transaction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='mo:w-full mx-auto w-container md:w-full md:px-[30px] mo:px-[30px]'>
            <div className=' flex justify-center  pt-[119px] mo:flex-wrap mo:items-center text-[54px] mo:text-[26px] md:text-[46px]'>
              <span className='font-medium cursor-default  mo:font-bold  mr-3'>Experience</span>
              <span onClick={onSwitchTo} className='flex font-semibold cursor-pointer mo:font-bold underline'>
                EIP-4844 <img className=' ml-3 w-[30px] ' src='/share.svg'></img>
              </span>
            </div>
            <div className=' md:text-[46px] cursor-default flex justify-center mo:flex-wrap  font-medium text-[54px] capitalize mo:text-[26px] mo:font-bold'>
              <div className=''>blob-carrying transactions</div>
              <div>(Blob TX)</div>
            </div>
            <div className='cursor-default mt-[34px] mo:mt-5 justify-center  text-center mo:flex flex-wrap mo:flex-row '>
              <span className='font-medium  text-xl mo:text-[18px] mo:font-light '>
                Store a piece of text or an image fully on-chain with EthDA to understand the changes
              </span>
              <div>
                <span className='font-medium text-xl mo:text-[18px] mo:font-light'> introduced by </span>
                <button onClick={onSwitchTo} className='font-semibold text-xl mo:text-[18px] mo:font-medium'>
                  EIP-4844
                </button>
                <span className='font-medium  text-xl mo:text-[18px] mo:font-light '> blob-carrying transactions</span>
                <span className='font-semibold text-xl mo:text-[18px] mo:font-medium'> (Blob TX) </span>
                <span className='font-medium text-xl mo:text-[18px] mo:font-light'> following the </span>
              </div>
              <span className='font-semibold text-xl mo:text-[18px] mo:font-medium'>Ethereum </span>
              <span className='font-medium text-xl mo:text-[18px] mo:font-light'>&nbsp;Cancun-Deneb Upgrade.</span>
            </div>
            <div className='mt-[60px] mo:mt-[130px] flex justify-center'>
              <ConnectKitButton.Custom>
                {({ isConnected, show, truncatedAddress }) => {
                  if (isConnected) {
                    setIsClickStart(true)
                  }
                  return (
                    <StyledButton onClick={show}>
                      <span className=' ml-[17px] mo:ml-5 pr-[17px]  text-base  font-medium'>Connect wallet to start</span>
                      <div className=' rounded-lg bg-white w-[38px] h-[38px] flex items-center justify-center'>
                        <img src='/share2.svg'></img>
                      </div>
                    </StyledButton>
                  )
                }}
              </ConnectKitButton.Custom>
            </div>
            <div className=' mt-[128px] mo:mt-[142px] flex  mo:mx-0 md:mx-[100px] mx-[200px]  mo:text-center mo:justify-center  justify-between mo:flex-wrap mo:w-full'>
              <button className='mo:w-full text-base underline mo:text-2xl '>Add EthDA Devnet to wallet</button>
              <button className='mo:mt-[70px] mo:text-2xl   text-base underline'> Gas Faucet</button>
            </div>
          </div>
        )}
      </div>
      {loading.loading && <LoadingFull />}
      {loading.success && (
        <AToastFull
          chilren={
            <Fragment>
              <img src='success.svg' />
              <div className='font-medium text-xl text-[#FC7823] mt-[-35px]'>Success</div>
              <div className='flex gap-[38px] mt-[40px] mb-5'>
                <button
                  onClick={() => {
                    window.open(`https://blobscan-devnet.ethda.io/address/${account?.address}`, '_blank')
                  }}
                  className='w-[140px] border h-[36px] rounded-lg border-[#000000] px-[21px] font-medium text-base'
                >
                  View History
                </button>
                <button
                  onClick={() => {
                    setLoading({ success: false })
                    setInputText('')
                    setFile(null)
                    setTransData(null as any)
                    scrollToTop()
                  }}
                  className='w-[140px] h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[21px] font-medium text-base'
                >
                  Send More
                </button>
              </div>
            </Fragment>
          }
        />
      )}
      {loading.error && (
        <AToastFull
          chilren={
            <Fragment>
              <img src='failed.svg' />
              <div className='font-medium text-xl text-[#FC7823] mt-[-35px]'>Failed</div>
              <div className='flex gap-[38px] mt-[40px] mb-5'>
                <button
                  onClick={() => {
                    setLoading({ success: false, error: false, loading: false })
                  }}
                  className='w-[141px] h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[21px] font-medium text-base'
                >
                  Send Again
                </button>
              </div>
            </Fragment>
          }
        />
      )}
    </div>
  )
}

export default BlobTX
