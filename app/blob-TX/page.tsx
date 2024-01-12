'use client'
import { Header } from '@/components/Header'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { ConnectKitButton } from 'connectkit'
import styled from 'styled-components'
import { LoadingFull } from '@/components/ALoading'
import { SuccessFull } from '@/components/ASuccess'
import { BlobClient, EncodeBlobs } from '@ethda/blobs'
import { ethers } from 'ethers'

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

  const handleBlobClick = (blob: boolean) => {
    setSelectedBlob(blob)
  }

  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0))
  }, [])

  const handleFileSelect = () => {
    inputImgRef.current?.click()
  }

  const onTranscode = async () => {
    console.log('inputImgRef', file, inputText, file?.size)

    // const textContent = 'Hello, this is some text content.'

    // const textBlob: any = new Blob([textContent], { type: 'text/plain' })
    // console.log('textBlob', textBlob)

    // const content: any = inputText
    // const blobs = EncodeBlobs(Buffer.from(textBlob, 'utf-8'))
    // console.log('blobs', blobs)

    //   const signer = new ethers.Wallet('<private_key>', new ethers.providers.JsonRpcProvider('https://rpc.ethda.io'))
    //   const blobClient = new BlobClient(signer)
    //   const hash = await blobClient.sendTx(blobs)
    //   const receipt = await blobClient.getTxReceipt(hash)
  }

  return (
    <div className=' font-[Montserrat]  '>
      <Header
        className={` ${!clickStart ? 'bg-[#FBE8DE]' : 'bg-[#FFFFFFCC]'}  py-[27px]`}
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
                    Experience EIP-4844 <img src='/share3.svg' className=' mx-2' /> blob-carrying transactions (Blob TX)
                  </div>
                  <div className='rounded-lg border-[#FC7823] md:text-sm  border  h-[42px] items-center flex text-[#FC7823] px-[15px]'>
                    {address}
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
                    Experience EIP-4844 <img src='/share3.svg' className=' mx-2' /> blob-carrying transactions (Blob TX)
                  </div>
                  <div className=' text-2xl font-normal mo:mt-10'>Input</div>
                  <div className=' mt-[50px] mo:mt-10 font-medium md:text-sm mb-5'>Type text here</div>

                  <DivBox className=' w-full h-[68px] px-2'>
                    <input
                      placeholder='Please Enter ...'
                      maxLength={30}
                      onChange={(e) => setInputText(e.target.value)}
                      className=' mt-2 input-Text mo:w-full w-[425px] md:w-[380px] h-[55px] '
                    />
                  </DivBox>

                  <div className=' text-base md:text-sm font-medium mt-[27px] mo:mt-10'>Attach an image,not exceeding 128KB</div>
                  <DivBox className=' mt-5 w-full  h-[290px] md:h-[295px] border-[#000000] mo:mt-10 '>
                    <div className=' flex items-center justify-center h-full flex-col  '>
                      <input type='file' hidden ref={inputImgRef} accept='image/*' onChange={onFileChange} />
                      <div
                        onClick={handleFileSelect}
                        className=' cursor-pointer w-[100px] h-[100px] bg-[#FFF8F4] border-2  border-dashed rounded-[5px] border-[#FC7823] flex items-center justify-center'
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
                  <div className='mt-5 mo:mt-10 flex justify-center'>
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
                  <div className=' text-2xl'> Blob Data</div>
                  <div className='flex gap-[14px] '>
                    <button
                      onClick={() => handleBlobClick(true)}
                      className={`w-[195px] md:w-[180px] h-[50px] flex border-[#000000] ${
                        selectedBlob && 'custom-background'
                      } items-center justify-center mt-[30px] md:text-sm  text-base font-medium `}
                    >
                      Blob1(Text data)
                    </button>
                    <button
                      onClick={() => handleBlobClick(false)}
                      className={` w-[195px] md:w-[180px] h-[50px] flex ${
                        !selectedBlob && 'custom-background'
                      } items-center border-[#000000] justify-center mt-[30px] md:text-sm  border-dashed text-base font-medium `}
                    >
                      Blob2(Image data)
                    </button>
                  </div>

                  <ContentBox className='  overflow-y-auto  h-[442px] pl-5 py-5  '>2</ContentBox>
                  <div className='mt-5 mo:mt-[37px] flex justify-center  '>
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
            <div className='flex justify-center  pt-[119px] mo:flex-wrap mo:items-center'>
              <span className='font-medium  text-[54px]  mo:text-[26px]  mo:font-bold  mr-3'>Experience</span>
              <span className=' font-semibold text-[54px] mo:text-[26px] mo:font-bold underline mr-3'> EIP-4844</span>
              <img className=' w-[30px] ' src='/share.svg'></img>
            </div>
            <div className='  flex justify-center mo:flex-wrap  font-medium text-[54px] capitalize mo:text-[26px] mo:font-bold'>
              <div className=''>blob-carrying transactions</div>
              <div>(Blob TX)</div>
            </div>
            <div className=' mt-[34px] mo:mt-5 justify-center  text-center mo:flex flex-wrap mo:flex-row '>
              <span className='font-medium text-xl mo:text-[18px] mo:font-light '>
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
                      <span className=' ml-[17px] mo:ml-5 mo:text-lg pr-[17px] text-base  font-medium'>Connect wallet to start</span>
                      <div className=' rounded-lg bg-white w-[38px] h-[38px] flex items-center justify-center'>
                        <img src='/share2.svg'></img>
                      </div>
                    </StyledButton>
                  )
                }}
              </ConnectKitButton.Custom>
            </div>
            <div className=' mt-[128px] mo:mt-[142px] flex  mo:text-center mo:justify-center  justify-between mo:flex-wrap mo:w-full'>
              <span className='mo:w-full text-base underline mo:text-2xl '>Add EthDA Devnet to wallet</span>
              <span className='mo:mt-[70px] mo:text-2xl   text-base underline'> Gas Faucet</span>
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
