'use client'
import { Header } from '@/components/Header'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { ConnectKitButton } from 'connectkit'
import styled from 'styled-components'
import { LoadingFull } from '@/components/ALoading'
import { SuccessFull } from '@/components/ASuccess'
import { useSendTransaction, useWalletClient } from 'wagmi'
import { EncodeBlobs } from '@/utils'
import { ethers } from 'ethers'
import { BlobClient } from '@/client'
import { ethda } from '@/utils/wagmi'
import { parseTransaction, serializeTransaction } from 'viem'
import { BlobEIP4844Transaction } from '@ethereumjs/tx'
import { Common } from '@ethereumjs/common'

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
  const [address, setAddress] = useState<string | undefined>('')
  const [loading, setLoading] = useState<any>({ loading: false, success: false })
  const inputImgRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | undefined | null>(null)
  const [selectedBlob, setSelectedBlob] = useState<boolean>(true)
  const [inputText, setInputText] = useState<string>('')
  const { data: hash, sendTransaction } = useSendTransaction()
  const handleBlobClick = (blob: boolean) => {
    setSelectedBlob(blob)
  }

  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0))
  }, [])

  const handleFileSelect = () => {
    inputImgRef.current?.click()
  }

  const { data: walletClient } = useWalletClient({ chainId: ethda.id })

  const onTranscode = async () => {
    if (!walletClient) return

    console.log('inputImgRef', file, inputText, file?.size)

    const textBlob: any = new Blob([inputText], { type: 'text/plain' })
    console.log('textBlob', textBlob)
    // const blob = new Blob([file], { type: file?.type })
    // console.log('blob', blob)

    const data = {
      content: inputText,
    }
    const url = 'https://blobscan-devnet.ethda.io/backend/convert/blob'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(async (result) => {
        console.log('Response:', result)
        const [account] = await walletClient.getAddresses()
        console.log(account)

        const { result: nonce } = await fetch('https://rpc-devnet.ethda.io', {
          method: 'POST',
          body: JSON.stringify({
            method: 'eth_getTransactionCount',
            params: [account, 'latest'],
            id: 1,
            jsonrpc: '2.0',
          }),
        }).then((r) => r.json())

        const gasLimit = 21000n
        const gasPrice = 1000000000n

        const request = await walletClient.prepareTransactionRequest({
          account,
          nonce,
          gas: gasLimit,
          gasPrice: gasPrice,
          to: ethers.constants.AddressZero,
          value: 0n,
          data: '0x',
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

        const blobs = EncodeBlobs(Buffer.from('ethda', 'utf-8'))
        const kzgP = new Uint8Array([
          128, 209, 129, 167, 219, 145, 156, 232, 65, 136, 109, 157, 211, 149, 15, 101, 168, 202, 99, 123, 239, 51, 207, 92, 170, 216, 8,
          167, 86, 21, 231, 113, 183, 247, 7, 78, 178, 32, 43, 60, 224, 148, 251, 235, 117, 140, 139, 232,
        ])
        const kzgC = new Uint8Array([
          148, 223, 83, 117, 161, 245, 247, 45, 152, 96, 182, 38, 227, 71, 59, 188, 37, 6, 190, 166, 115, 64, 94, 198, 3, 24, 64, 85, 21,
          197, 175, 89, 124, 125, 85, 199, 123, 47, 102, 173, 35, 168, 229, 62, 147, 170, 204, 188,
        ])
        const vh = new Uint8Array([
          1, 133, 62, 107, 6, 15, 91, 21, 95, 64, 106, 124, 163, 249, 18, 223, 95, 147, 135, 61, 157, 245, 106, 211, 25, 4, 219, 132, 101,
          101, 219, 210,
        ])

        const blobTx = new BlobEIP4844Transaction(
          {
            chainId: 177n,
            nonce,
            to: ethers.constants.AddressZero,
            data: '0x',
            value: 0n,
            maxPriorityFeePerGas: 1000000000n,
            maxFeePerGas: 1000000000n,
            gasLimit: transaction.gas,
            maxFeePerBlobGas: 2000_000_000_000n,
            blobVersionedHashes: [vh],
            blobs: blobs,
            kzgCommitments: [kzgC],
            kzgProofs: [kzgP],
            v: (transaction?.v ?? 0n) - 2n * 177n - 35n,
            r: transaction.r,
            s: transaction.s,
          },
          { common },
        )
        console.log(blobTx)

        const rawData = blobTx.serializeNetworkWrapper()

        const hex = Buffer.from(rawData).toString('hex')

        const { result: txr } = await fetch('https://rpc-devnet.ethda.io', {
          method: 'POST',
          body: JSON.stringify({
            method: 'eth_sendRawTransaction',
            params: ['0x' + hex],
            id: 1,
            jsonrpc: '2.0',
          }),
        })
          .then((r) => r.json())
          .catch((e) => console.error(e))

        console.log(blobTx)
        console.log(txr)

        console.log(res)
      })
  }
  console.log('hhashhashhashash', hash)

  const onSwitchTo = () => {
    window.open('https://www.eip4844.com', '_blank')
  }

  return (
    <div className=' font-[Montserrat]  '>
      <Header
        className={` ${!clickStart ? 'bg-[#FBE8DE]  mo:bg-[#FCE1D6] mo:border-b-[#FCE1D6]' : 'bg-[#FFFFFFCC]'}  py-[27px]`}
        containerClassName='!w-full  pl-9 pr-[31px] mo:w-full mo:pl-0 mo:pr-0 '
        logo={` b-EthDA.svg`}
        headerTextClassName='!text-[#000000] gap-[50px]'
      />
      <div className={` ${!clickStart && ' bg-[url(/blobTXBg.svg)] mo:bg-[url(/b-m-EthDA.svg)]  '} min-h-screen bg-cover `}>
        {clickStart ? (
          <div>
            <div style={{ background: 'linear-gradient(180deg, #F3F3F3 0%, rgba(243, 243, 243, 0.30) 100%)' }}>
              <div className='mo:w-full mo:px-[30px]  mx-auto w-container md:w-full md:px-[30px]   '>
                <div className=' flex  flex-row items-center mo:justify-between mo:h-[102px]'>
                  <div className='mo:hidden w-full h-[120px] mo:h-[42px] items-center flex text-2xl md:text-lg font-normal'>
                    <button onClick={onSwitchTo}> Experience EIP-4844</button> <img src='/share3.svg' className=' mx-2' /> blob-carrying
                    transactions (Blob TX)
                  </div>
                  <div className='rounded-lg border-[#FC7823] md:text-sm  border  h-[42px] items-center flex text-[#FC7823] px-[15px]'>
                    {address?.replace('••••', '.....')}
                  </div>
                  <div className='flex mr-10 mo:mr-0 gap-[13px] items-center'>
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
                  <div className=' mt-[50px] mo:mt-10 font-medium mo:text-lg md:text-sm mb-5'>Type text here</div>

                  <DivBox className=' w-full h-[68px] px-2'>
                    <input
                      placeholder='Please Enter ...'
                      maxLength={40}
                      onChange={(e) => setInputText(e.target.value)}
                      className=' mt-2 input-Text mo:w-full w-[425px] md:w-[380px] h-[55px] '
                    />
                  </DivBox>

                  <div className=' text-base md:text-sm font-medium mt-[27px] mo:text-lg  mo:mt-10'>
                    Attach an image,not exceeding 128KB
                  </div>
                  <div className=' mo:px-[50px]'>
                    <DivBox className=' mt-5 w-full  h-[290px] md:h-[295px] border-[#000000] mo:mt-10  '>
                      <div className=' flex items-center justify-center h-full flex-col '>
                        <input type='file' hidden ref={inputImgRef} accept='image/*' onChange={onFileChange} />
                        <div
                          onClick={handleFileSelect}
                          className=' cursor-pointer w-[100px] h-[100px] bg-[#FFF8F4] border  border-dashed rounded-[5px] border-[#FC7823] flex items-center justify-center'
                        >
                          <img src='chooseAnyImg.svg'></img>
                        </div>
                        <div className=' mt-5 mo:mt-[30px] text-center flex flex-col'>
                          <span>{file?.name}</span>
                          <button className=' text-base font-semibold' onClick={handleFileSelect}>
                            Browse
                          </button>
                        </div>
                      </div>
                    </DivBox>
                  </div>
                  <div className='mt-5 mo:mt-10 flex justify-center mb-5'>
                    <button
                      onClick={onTranscode}
                      className={` ${
                        !file?.name || !inputText ? 'cursor-not-allowed bg-[#BABABA] ' : 'bg-[#FC7823] '
                      } border px-6 text-base font-semibold items-center mo:w-full  flex rounded-xl text-[#FFFFFF] justify-center w-[136px] h-12 text-center`}
                    >
                      Transcode
                    </button>
                  </div>
                </div>
                <div className='w-full h-full  '>
                  <div className=' text-2xl  mo:text-[26px]'> Blob Data</div>
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

                  <ContentBox className='  overflow-y-auto  h-[442px] pl-5 py-5   '></ContentBox>
                  <div className='mt-5 mo:mt-[37px] flex justify-center  mb-5 '>
                    <button
                      className={`border mo:w-full bg-[#BABABA] cursor-not-allowed  px-6 text-base font-semibold items-center flex  rounded-xl text-[#FFFFFF]  justify-center  h-12 text-center`}
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
            <div
              onClick={onSwitchTo}
              className=' cursor-pointer flex justify-center  pt-[119px] mo:flex-wrap mo:items-center text-[54px] mo:text-[26px] md:text-[46px]'
            >
              <span className='font-medium    mo:font-bold  mr-3'>Experience</span>
              <span className=' font-semibold   mo:font-bold underline mr-3'> EIP-4844</span>
              <img className=' w-[30px] ' src='/share.svg'></img>
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
                <span className='font-medium text-xl mo:text-[18px] mo:font-light'> introduced by</span>
                <span className='font-semibold text-xl mo:text-[18px] mo:font-medium'> EIP-4844 </span>
                <span className='font-medium  text-xl mo:text-[18px] mo:font-light '> blob-carrying transactions</span>
                <span className='font-semibold text-xl mo:text-[18px] mo:font-medium'> (Blob TX) </span>
                <span className='font-medium text-xl mo:text-[18px] mo:font-light'> following the </span>
              </div>
              <span className='font-semibold text-xl mo:text-[18px] mo:font-medium'>Ethereum </span>
              <span className='font-medium text-xl mo:text-[18px] mo:font-light'>&nbsp;Cancun-Deneb Upgrade.</span>
            </div>
            <div className='mt-[60px] mo:mt-[130px] flex justify-center'>
              <ConnectKitButton.Custom>
                {({ isConnected, show, truncatedAddress, ensName }) => {
                  if (isConnected) {
                    setIsClickStart(true)
                    setAddress(truncatedAddress)
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
        <SuccessFull
          onLeftButton={() => {}}
          onRightButton={() => {
            setLoading({ success: false })
          }}
        />
      )}
    </div>
  )
}

export default BlobTX
