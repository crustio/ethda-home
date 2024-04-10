import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef } from 'react'
const AIntroduce = () => {
  const settings = {
    className: '',
    dots: false,
    slidesToShow: 3,
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
  const data = [
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line1.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2024 Q1</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(-2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          DevNet launch in Feb, with workable chain and interfaces, demonstration DApp, BlobScan, and necessary dev docs
        </div>
      ),
      borderImg: 'bg-[url(/border1.svg)] mt-[54px]',
    },
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line2.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2024 Q2</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(-2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          TestNet launch in May, with initial DAS implementation and related flows, full dev docs and SDK; CDK readiness for market
          promotion
        </div>
      ),
      borderImg: 'bg-[url(/border2.svg)]',
    },
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line3.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2024 Q4</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          Full DAS and Staking implement- tation, benefit sharing contracts, treasury and governance modules MainNet Launch
        </div>
      ),
      borderImg: 'bg-[url(/border3.svg)]  mt-[-24px]',
    },
  ]
  return (
    <div className=' rounded-tl-[40px] rounded-tr-[40px] mt-20 bg-black text-white '>
      <div className=' pt-20 flex gap-[30px] justify-center mo:mx-10 px-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]'>
        <div className=' rounded-[10px] border-[#E08900] py-[50px] border w-[575px] '>
          <div className=' px-[50px] '>
            <div className='text-white font-medium text-base leading-10'>
              The core of being a rollup is the unconditional security guarantee: you can get your assets out even if everyone else colludes
              against you. Can't get that if DA is dependent on an external system. But being a validium is a correct choice for many apps,
              and using good distributed DA guarantee systems can be a good way to increase the practical security of a validium.
            </div>
            <img src='./block-y.svg' className=' mt-5' />
          </div>
          <div className=' flex items-end ml-[50px] '>
            <div>
              <div className='flex  font-medium text-base mt-[128px] ml-[180px]'>@VitalikButerin</div>
              <div className=' ml-[50px] font-black font-hlc text-[28px] mt-[30px]'>--Ethereum Founder</div>
              <div className=' font-black text-[42px] font-hlc text-[#E08900] mt-[30px]'>VitalikButerin</div>
            </div>
            <div className=' mr-5'>
              <img src='./vitalik.png' className='w-[300px] h-[180px]' />
            </div>
          </div>
        </div>
        <div className=' rounded-[10px] border-[#E08900]  py-[50px] border-dashed border w-[575px] '>
          <div className='  mx-[50px] text-[#E08900] font-black text-[42px] font-hlc'>Sandeep</div>
          <div className='flex items-center mb-0'>
            <div className=' font-hlc pb-[130px]'>
              <div className=' font-black text-[28px] ml-[113px] mt-[30px]'>--Polygon Founder</div>
              <div className=' font-medium text-base ml-[236px] mt-[30px]'>@sandeepnailwal</div>
            </div>
            <div className=' mt-[-230px]'>
              <img src='./img.svg' />
            </div>
          </div>
          <div>
            <div className=' ml-[50px]'>
              <img src='./block-p.svg' />
              <div className=' font-medium text-base mt-5 leading-10'>
                The core of being a rollup is the unconditional security guarantee: you can get your assets out even if everyone else
                colludes against you. Can't get that if DA is dependent on an external system. But being a validium is a correct choice for
                many apps, and using good distributed DA guarantee systems can be a good way to increase the practical security of a
                validium.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-[100px]  pb-10 justify-center mo:mx-10 px-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]'>
        <div className=' flex font-hlc font-black gap-4 text-[42px] items-center'>
          Dev Plan
          <img src='./plus.svg'></img>
        </div>
        <div style={{ fontFamily: 'inter' }} className='mt-[50px] font-extralight text-[54px]'>
          <div>MainNet Launch in</div>
          <div>2024 Q4</div>
        </div>
        <div className=' flex gap-[89px]'>
          {data.map(({ img, content, borderImg, title, line }) => {
            return (
              <div className={`${borderImg} w-[340px] h-[435px] bg-repeat bg-cover`}>
                <div className=' mt-[34px] mx-[34px]'>
                  <div style={{ fontFamily: 'inter' }} className=' flex items-center gap-3'>
                    {img}
                    {title}
                  </div>
                  <div className='mt-[37px]'>{line}</div>
                  {content}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default AIntroduce
