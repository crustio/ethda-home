import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useWindowSize } from 'react-use'
const AIntroduce = () => {
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
      borderImg: 'bg-[url(/border1.svg)] w-[200px] mt-[54px]',
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
    // {
    //   img: <img src='./calendar.svg' />,
    //   line: <img src='./dev-Line1.svg' />,
    //   title: <div className=' text-2xl font-bold  text-white'>2024 Q1</div>,
    //   content: (
    //     <div style={{ fontFamily: 'inter', transform: 'rotate(-2deg)' }} className='mt-[37px] font-medium text-base text-white'>
    //       DevNet launch in Feb, with workable chain and interfaces, demonstration DApp, BlobScan, and necessary dev docs
    //     </div>
    //   ),
    //   borderImg: 'bg-[url(/border1.svg)] mt-[54px]',
    // },
    // {
    //   img: <img src='./calendar.svg' />,
    //   line: <img src='./dev-Line2.svg' />,
    //   title: <div className=' text-2xl font-bold  text-white'>2024 Q2</div>,
    //   content: (
    //     <div style={{ fontFamily: 'inter', transform: 'rotate(-2deg)' }} className='mt-[37px] font-medium text-base text-white'>
    //       TestNet launch in May, with initial DAS implementation and related flows, full dev docs and SDK; CDK readiness for market
    //       promotion
    //     </div>
    //   ),
    //   borderImg: 'bg-[url(/border2.svg)]',
    // },
    // {
    //   img: <img src='./calendar.svg' />,
    //   line: <img src='./dev-Line3.svg' />,
    //   title: <div className=' text-2xl font-bold  text-white'>2024 Q4</div>,
    //   content: (
    //     <div style={{ fontFamily: 'inter', transform: 'rotate(2deg)' }} className='mt-[37px] font-medium text-base text-white'>
    //       Full DAS and Staking implement- tation, benefit sharing contracts, treasury and governance modules MainNet Launch
    //     </div>
    //   ),
    //   borderImg: 'bg-[url(/border3.svg)]  mt-[-24px]',
    // },
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line1.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2025</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(-2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          Extend DStorage use cases like assurance pool, Blob operating and managementContinuously L2 technologies and ecosystems
          integration
        </div>
      ),
      borderImg: 'bg-[url(/border2.svg)] mt-8',
    },
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line2.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2026</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          Extend DA services to Ethereum L1 light / stateless nodes GraphQL-like query and programabilities on data blobs
        </div>
      ),
      borderImg: 'bg-[url(/border1.svg)]  -mt-5',
    },
  ]

  const { width } = useWindowSize(1024)
  const showCount = Math.min(4, data.length, Math.round(width / 350))
  const settings = {
    dots: false,
    slidesToShow: showCount,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  return (
    <div className=' rounded-t-[40px] mo:rounded-t-3xl mt-20 mo:mt-8 bg-black text-white '>
      <div className=' mt-[100px] mo:mt-0  pb-10 justify-center mo:mx-0 px-10 mo:px-5  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]'>
        <div className=' flex font-hlc font-black gap-4 text-[42px] mo:text-[6vw] items-center pt-10'>
          Dev Plan
          <img src='./plus.svg'></img>
        </div>
        <div style={{ fontFamily: 'inter' }} className='mt-[50px] font-extralight text-[54px] mo:text-[7vw] mo:mt-5'>
          <div>MainNet Launch in</div>
          <div>2024 Q4</div>
        </div>
        <div className='h-[455px] mb-[100px] mo:mb-0'>
          <Slider {...settings}>
            {data.map(({ img, content, borderImg, title, line }, i) => {
              return (
                <div key={`content_${i}`} className={`${borderImg}  h-[435px] bg-repeat bg-cover`}>
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
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default AIntroduce
