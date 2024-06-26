import { ethers } from 'ethers'
import { BlobTxFieldElementsPerBlob, BLOB_SIZE } from '../constants'

function _getBytes(value: string | Iterable<number>, copy: boolean) {
  if (value instanceof Uint8Array) {
    if (copy) {
      return new Uint8Array(value)
    }
    return value
  }

  if (typeof value === 'string' && value.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const result = new Uint8Array((value.length - 2) / 2)
    let offset = 2
    for (let i = 0; i < result.length; i++) {
      result[i] = parseInt(value.substring(offset, offset + 2), 16)
      offset += 2
    }
    // console.log(result, result.length);
    return result
  }
  return undefined
}

export function getBytes(value: string | Iterable<number>) {
  return _getBytes(value, false)
}

export function computeVersionedHash(commitment: any, blobCommitmentVersion: number) {
  const computedVersionedHash = new Uint8Array(32)
  computedVersionedHash.set([blobCommitmentVersion], 0)
  const hash: any = getBytes(ethers?.utils.sha256(commitment))
  computedVersionedHash.set(hash.subarray(1), 1)
  return computedVersionedHash
}

export function commitmentsToVersionedHashes(commitment: any) {
  return computeVersionedHash(commitment, 0x01)
}

export function EncodeBlobs(data: any) {
  const len = data.length
  if (len === 0) {
    throw Error('invalid blob data')
  }

  let blobIndex = 0
  let fieldIndex = -1

  const blobs = [new Uint8Array(BLOB_SIZE).fill(0)]
  for (let i = 0; i < len; i += 31) {
    fieldIndex++
    if (fieldIndex === BlobTxFieldElementsPerBlob) {
      blobs.push(new Uint8Array(BLOB_SIZE).fill(0))
      blobIndex++
      fieldIndex = 0
    }
    let max = i + 31
    if (max > len) {
      max = len
    }
    blobs[blobIndex].set(data.subarray(i, max), fieldIndex * 32 + 1)
  }
  return blobs
}

export function DecodeBlob(blob: any) {
  if (!blob) {
    throw Error('invalid blob data')
  }

  blob = getBytes(blob)
  if (blob.length < BLOB_SIZE) {
    const newBlob = new Uint8Array(BLOB_SIZE).fill(0)
    newBlob.set(blob)
    blob = newBlob
  }

  let data: string | any[] = []
  let j = 0
  for (let i = 0; i < BlobTxFieldElementsPerBlob; i++) {
    const chunk = blob.subarray(j + 1, j + 32)
    data = [...data, ...chunk]
    j += 32
  }
  let i = data.length - 1
  for (; i >= 0; i--) {
    if (data[i] !== 0x00) {
      break
    }
  }
  const newData = data.slice(0, i + 1)
  return newData
}

export function DecodeBlobs(blobs: any) {
  if (!blobs) {
    throw Error('invalid blobs')
  }

  blobs = getBytes(blobs)
  const len = blobs.length
  if (len === 0) {
    throw Error('invalid blobs')
  }

  let buf: any[] | Uint8Array | readonly number[] = []
  for (let i = 0; i < len; i += BLOB_SIZE) {
    let max = i + BLOB_SIZE
    if (max > len) {
      max = len
    }
    const blob = blobs.subarray(i, max)
    const blobBuf = DecodeBlob(blob)
    buf = [...buf, ...blobBuf]
  }
  return Buffer.from(buf)
}

export function parseBigintValue(value: any) {
  if (value) {
    if (typeof value == 'bigint') {
      return '0x' + value.toString(16)
    }
    if (typeof value == 'object') {
      const { _hex } = value
      const c = BigInt(_hex)
      return '0x' + c.toString(16)
    }
  }
  return value
}

export function createMetaDataForBlobs(
  create: string,
  mimetype: {
    content_type: string
    versioned_hash: string
    kzg_commitment: string
    kzg_proof: string
  }[],
) {
  return {
    // "Identifies the originator of the carried blobs"
    originator: create,
    // "Describes the contents of the blobs"
    description: mimetype.map((m) => m.content_type).join(','),
    // Describes the mime type of the blobs
    content_type: '',
    // "Dynamic extra information of the blobs"
    extras: '',
    // Blobs meta data
    blobs: mimetype
  }
}
