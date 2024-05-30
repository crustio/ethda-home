import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useRef, useState } from 'react'

const tab = ['Staking', 'Date', 'Growth']

const Agg = () => {
  let sliderRef = useRef<any>(null)
  const [current, setCurrent] = useState(0)
  const settings = {
    className: '',
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    cssEase: 'linear',
    speed: 1000,
    infinite: true,
  }
  const onClickTo = (i: number) => {
    ;(sliderRef as any).slickGoTo(i)
    setCurrent(i)
  }

  const content = [
    {
      title: (
        <div className='text-[42px] flex text-left'>
          <span>"</span>
          <span>Agg. </span>
          <span className='text-black'>Staking</span>
        </div>
      ),
      other: (
        <div className='text-[#8F4FFF] text-base border-[#8F4FFF] border rounded-[50px] px-5 w-[170px] h-9 flex items-center'>
          ETH Restaking
        </div>
      ),
      other1: (
        <div className='text-[#E08900] text-base border-[#E08900] border rounded-[50px] px-5 w-[170px] h-9 flex items-center'>
          L2 Native Token
        </div>
      ),
      img: <img src='./gif/1.gif' />,
      content: (
        <>
          <div className=' mt-[60px] leading-8 flex flex-col text-left'>
            <span className=' text-[32px] md:text-[28px] font-extrabold text-black'> ETH Restaking:</span>
            <span className=' text-2xl font-medium text-black mt-6'> restake ETH on EthDA DAS nodes.</span>
          </div>
          <div className=' mt-[60px] leading-8 flex flex-col text-left'>
            <span className=' text-[32px] md:text-[28px] font-extrabold text-black'>Dual-Staking: </span>
            <span className=' text-2xl font-medium text-black mt-6'>dual-stake native token of L2 protocols.</span>
          </div>
        </>
      ),
    },
    {
      title: (
        <div className='text-[42px] md:text-4xl'>
          <span>"Agg. </span>
          <span className='text-black'>Data</span>
        </div>
      ),
      img: (
        <div>
          <img src='./gif/2.gif' id='gif' className='mb-[110px] ' />
        </div>
      ),
      content: (
        <>
          <div className=' mt-[60px] leading-8 flex flex-col text-left mr-[60px]'>
            <span className=' text-[32px] md:text-[28px] font-extrabold text-black'>zkBlob:</span>
            <span className=' text-2xl md:text-xl font-medium text-black mt-6 '>
              Ethereum Blob TX {'—>'} DAS {'—>'} Data Proof via ZK rollup.
            </span>
          </div>
          <div className=' mt-[60px] leading-8 flex flex-col text-left mr-[60px]'>
            <span className='  text-[32px] md:text-[28px] font-extrabold text-black'> Data Programmability: </span>
            <span className='  text-2xl md:text-xl font-medium text-black mt-6 leading-10'>
              On-chain interfaces for data functions can be instanly accessed by smart contracts and AggLayer blockchains.
            </span>
          </div>
        </>
      ),
      blobText: (
        <div className='flex flex-col gap-4 font-medium relative top-[100px] '>
          <div className='text-[#8F4FFF]  border-[#8F4FFF] border rounded-[50px] px-5 w-[110px] h-8 flex items-center'>Blob Tx</div>
          <div className='text-[#E08900] border-[#E08900] border rounded-[50px] px-5 w-[110px] h-8 flex items-center'>Blob Tx</div>
          <div className='flex items-center relative right-[170px] '>
            <div className='borderLine leftLine'></div>
            <div className=' border-l border-white border-b w-[55px]'>22</div>
            <div style={{ fontFamily: 'inter' }} className=' border text-white border-white rounded-[1px]  flex  '>
              <img src='./interface.svg' /> On-chain Interface for Agg. Data
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className='text-[42px] md:text-4xl'>
          <span>"Agg. </span>
          <span className='text-black'>Growth</span>
        </div>
      ),
      img: <img src='./Growth.svg' />,
      content: (
        <>
          <div className=' mt-[60px] leading-8 flex flex-col text-left mr-[60px]'>
            <span className=' text-[32px] md:text-[28px] font-extrabold text-black'> Data Value Extraction:</span>
            <span className='  text-2xl md:text-xl font-medium text-black mt-6'>
              bi-directional value growth driven by data amount and value.
            </span>
          </div>
          <div className=' mt-[60px] leading-8 flex flex-col text-left mr-[60px]'>
            <span className='text-[32px] md:text-[28px] font-extrabold text-black'> Benfit Sharing: </span>
            <span className='text-2xl md:text-xl font-medium text-black mt-6'>
              Value stream reward back to all blockchain users that connect with EthDA.
            </span>
          </div>
        </>
      ),
    },
  ]
  const maxSlides = content.length

  return (
    <div className=''>
      <div id='myBar' data-aos='fade-up' data-aos-anchor-placement='top-bottom' className={` scrollable-container `}>
        <Slider
          {...settings}
          ref={(slider: any) => {
            sliderRef = slider
          }}
          afterChange={(i) => setCurrent(i)}
        >
          {content.map((item, index) => {
            return (
              <div key={`slider${index}`} className='!flex h-[900px]'>
                <div className=' bg-[url(/GroupBg.svg)] w-[50%] font-le text-white diagram-right'>
                  <div className='flex w-[640px] flex-wrap px-[30px]  md:w-full  h-full text-center items-center  float-end'>
                    <div className='flex flex-col '>
                      <div className='flex items-center flex-row'>
                        <span className='font-bold text-[48px] xmd:text-[40px] md:text-3xl'>{item.title}</span>
                      </div>
                      {item.content}
                    </div>
                  </div>
                </div>
                <div className='bg-black w-[50%]'>
                  <div className='  w-[700px]'>
                    <div className='flex  flex-start mt-[62px] mx-[40px] flex-row items-start md:flex md:flex-wrap justify-between   '>
                      <div className='flex items-center  gap-[30px]'>
                        {[...Array(content.length)].map((_, i) => {
                          return (
                            <div
                              key={`num${i}`}
                              onClick={() => onClickTo(i)}
                              className={` ${current === i ? ' borders text-[#E08900] h-[40px] w-auto gap-1 px-5' : ' text-white'}   text-base font-medium flex items-center justify-center `}
                            >
                              {current === i && <img src='./Box.svg'></img>}
                              {tab[i]}
                            </div>
                          )
                        })}
                      </div>
                      <div className='  md:ml-0 md:w-full md:mt-[30px] '>
                        <div className='flex flex-end'>{item.other}</div>
                        <div className='flex mt-6'>{item.other1}</div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center py-[110px]'>
                      <div className=''>
                        <div className=' bg-cover object-cover bg-repeat w-[580px] h-[580px] flex justify-center '>
                          <div className='flex justify-center items-center w-full h-full md:w-[300px]'>{item.img}</div>
                          {item.blobText}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Agg
