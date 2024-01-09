'use client'
import { Header } from '@/components/Header'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { ConnectKitButton } from 'connectkit'
import styled from 'styled-components'
import { LoadingFull } from '@/components/ALoading'
import { SuccessFull } from '@/components/ASuccess'
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

const BtnBox = styled(Wrapper)(({}) => ({
  backgroundSize: '10px 1px,0, 1px 9px, 1px 9px',
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

  const onTranscode = () => {
    console.log('inputImgRef', file)
  }

  return (
    <div className=' font-[Montserrat]  '>
      <Header
        className={` ${!clickStart ? 'bg-[#FBE8DE]' : 'bg-[#FFFFFFCC]'}  py-[27px]`}
        containerClassName='!w-full  pl-9 pr-[31px] '
        logo={` b-EthDA.svg`}
        headerTextClassName='!text-[#000000] gap-[50px]'
      />
      <div className={` ${!clickStart && ' bg-[url(/blobTXBg.svg)] '} min-h-screen bg-cover `}>
        {clickStart ? (
          <div>
            <div style={{ background: 'linear-gradient(180deg, #F3F3F3 0%, rgba(243, 243, 243, 0.30) 100%)' }}>
              <div className='mo:w-full  mx-auto w-container md:w-full md:px-[30px]  '>
                <div className=' flex justify-between flex-row items-center'>
                  <div className='w-full h-[120px] items-center flex text-2xl md:text-lg font-normal'>
                    Experience EIP-4844 <img src='/share3.svg' className=' mx-2' /> blob-carrying transactions (Blob TX)
                  </div>
                  <img src='deal.svg' />
                  <div className=' ml-5 rounded-lg border-[#FC7823] md:text-sm border  w-[180px] h-[42px] items-center flex text-[#FC7823] px-[15px]'>
                    {address}
                  </div>
                </div>
              </div>
            </div>
            <div className='mo:w-full  mx-auto w-container md:w-full md:px-[30px] '>
              <div className='flex gap-[100px]  mt-[30px]'>
                <div className='w-[440px] h-full '>
                  <div className=' text-2xl font-normal'>Input</div>
                  <div className=' mt-[50px] font-medium md:text-sm mb-5 '>Type text here</div>
                  <DivBox className=' w-full h-[68px] '>
                    <input placeholder='Please Enter ...' maxLength={30} className=' mx-2 mt-2 input-Text w-[425px] h-[58px] ' />
                  </DivBox>

                  <div className=' text-base md:text-sm font-medium mt-[27px]'>Attach an image,not exceeding 128KB</div>
                  <DivBox className=' mt-5 w-full  h-[290px] md:h-[295px] border-[#000000]  '>
                    <div className=' flex items-center justify-center h-full flex-col'>
                      <input type='file' hidden ref={inputImgRef} accept='image/*' onChange={onFileChange} />

                      <div
                        onClick={handleFileSelect}
                        className=' cursor-pointer w-[100px] h-[100px] bg-[#FFF8F4] border-2  border-dashed rounded-[5px] border-[#FC7823] flex items-center justify-center'
                      >
                        <img src='chooseAnyImg.svg'></img>
                      </div>
                      <div className=' mt-5 text-center flex flex-col'>
                        <span>{file?.name}</span>
                        <button className=' text-base font-semibold' onClick={handleFileSelect}>
                          Browse
                        </button>
                      </div>
                    </div>
                  </DivBox>
                  <div className='mt-5 flex justify-center '>
                    <button
                      onClick={onTranscode}
                      className={` ${
                        !file?.name && !inputText ? 'cursor-not-allowed bg-[#BABABA] ' : 'bg-[#FC7823] '
                      } border px-6 text-base font-semibold items-center flex rounded-xl text-[#FFFFFF] justify-center w-[136px] h-12 text-center`}
                    >
                      Transcode
                    </button>
                  </div>
                </div>
                <div className='w-full h-full '>
                  <div className=' text-2xl'> Blob Data</div>
                  <div className='flex gap-[14px]'>
                    <BtnBox
                      onClick={() => handleBlobClick(true)}
                      className={`w-[195px] h-[50px] flex border-[#000000] ${
                        !selectedBlob && 'border-none'
                      } items-center justify-center mt-[30px] md:text-sm  text-base font-medium `}
                    >
                      Blob1(Text data)
                    </BtnBox>
                    <BtnBox
                      onClick={() => handleBlobClick(false)}
                      className={` w-[195px] h-[50px] flex ${
                        selectedBlob && 'border-none'
                      } items-center border-[#000000] justify-center mt-[30px] md:text-sm  border-dashed text-base font-medium `}
                    >
                      Blob2(Image data)
                    </BtnBox>
                  </div>

                  <ContentBox className='  overflow-y-auto  h-[442px] pl-5 py-5  '>2</ContentBox>
                  <div className='mt-5 flex justify-center  '>
                    <button
                      className={`border bg-[#BABABA] cursor-not-allowed  px-6 text-base font-semibold items-center flex  rounded-xl text-[#FFFFFF]  justify-center  h-12 text-center`}
                    >
                      Send Transaction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='mo:w-full  mx-auto w-container md:w-full md:px-[30px]  '>
            <div className='flex justify-center  pt-[119px]'>
              <span className='font-medium  text-[54px] mr-3'>Experience</span>
              <span className=' font-semibold text-[54px] underline mr-3'> EIP-4844</span>
              <img src='/share.svg'></img>
            </div>
            <div className=' flex justify-center  font-medium text-[54px] capitalize'>
              <div className=''>blob-carrying transactions</div>
              <div>(Blob TX)</div>
            </div>
            <div className=' mt-[34px]  text-center '>
              <span className='font-medium text-xl '>
                Store a piece of text or an image fully on-chain with EthDA to understand the changes
              </span>
              <div>
                <span className='font-medium text-xl'> introduced by</span>
                <span className='font-semibold text-xl'> EIP-4844 </span>
                <span className='font-medium  text-xl '> blob-carrying transactions</span>
                <span className='font-semibold text-xl'> (Blob TX) </span>
                <span className='font-medium text-xl'> following the </span>
              </div>
              <span className='font-semibold text-xl'>Ethereum </span>
              <span className='font-medium text-xl'>Cancun-Deneb Upgrade.</span>
            </div>
            <div className='mt-[60px] flex justify-center'>
              <ConnectKitButton.Custom>
                {({ isConnected, show, truncatedAddress, ensName }) => {
                  console.log('ensName', ensName)

                  if (isConnected) {
                    setIsClickStart(true)
                    setAddress(truncatedAddress)
                  }

                  return (
                    <StyledButton onClick={show}>
                      {isConnected ? (
                        ensName ?? truncatedAddress
                      ) : (
                        <span className=' ml-[17px] mr-[10px] text-base font-medium'>Connect wallet to start</span>
                      )}
                      <div className=' rounded-lg bg-white w-[38px] h-[38px] flex items-center justify-center'>
                        <img src='/share2.svg'></img>
                      </div>
                    </StyledButton>
                  )
                }}
              </ConnectKitButton.Custom>
            </div>
            <div className=' mt-[128px] flex justify-between'>
              <span className=' text-base underline'>Add EthDA Devnet to wallet</span>
              <span className=' text-base underline'> Gas Faucet</span>
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
