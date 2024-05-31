import { gsap } from 'gsap'
import { useMemo } from 'react'
import { GrowthSVG } from './GrowthSVG'

const tab = ['Staking', 'Date', 'Growth']

function ContentItem({ tit, sub }: { tit: string; sub: string }) {
  return (
    <div className='leading-none flex flex-col text-left max-w-[500px] mr-10 mo:mr-0'>
      <span className=' text-[32px] md:text-[28px] mo:text-[4.1vw] font-extrabold text-black'> {tit}:</span>
      <span className='leading-tight text-2xl mo:text-[3.9vw] font-medium text-black mt-6 mo:mt-2'> {sub}</span>
    </div>
  )
}
const ANewAgg = () => {
  const content = useMemo(() => {
    return [
      {
        title: (
          <>
            <span>"</span>
            <span>Agg. </span>
            <span className='text-black'>Staking</span>
          </>
        ),
        other: (
          <div className='self-center'>
            <div className='flex ml-10 mo:ml-0 '>
              <div className='text-[#8F4FFF] tracking-[0.045em] text-base md:text-sm border-[#8F4FFF] border rounded-[50px] px-5 w-[170px] md:w-[155px] h-9 flex items-center'>
                ETH Restaking
              </div>
            </div>
            <div className='flex mt-6 mo:mt-3 ml-10 mo:ml-0'>
              <div className='text-[#E08900] text-base md:text-sm border-[#E08900] border rounded-[50px] px-5 w-[170px] md:w-[155px]  h-9 flex items-center'>
                L2 Native Token
              </div>
            </div>
          </div>
        ),
        img: (
          <div className=' w-[600px] md:w-auto mo:w-auto'>
            <img src='./gif/1.gif' />
          </div>
        ),
        content: (
          <>
            <ContentItem tit='ETH Restaking' sub='Restake ETH on EthDA DAS nodes.' />
            <ContentItem tit='Dual-Staking' sub='Dual-stake native token of L2 protocols.' />
          </>
        ),
      },
      {
        title: (
          <>
            <span>"Agg. </span>
            <span className='text-black'>Data</span>
          </>
        ),
        img: (
          <div className=' flex w-full relative'>
            <div className=' '>
              <img src='./gif/2.gif' id='gif' className='py-[30px] w-full mmd:w-[500px] bg-cover' />
            </div>
            <div className='flex '>
              <div className='self-start'>
                <div className='flex flex-col gap-4 font-medium mo:items-end'>
                  <div className='text-[#8F4FFF]  border-[#8F4FFF] border rounded-[50px] px-5 w-[110px] h-8 flex items-center justify-center'>
                    Blob Tx
                  </div>
                  <div className='text-[#E08900] border-[#E08900] border rounded-[50px] px-5 w-[110px] h-8 flex items-center justify-center'>
                    Blob Tx
                  </div>
                </div>
              </div>
              <div className='absolute top-[40%] right-0'>
                <div
                  style={{ fontFamily: 'inter' }}
                  className=' border   mt-4 text-white text-[12px] font-medium border-white h-8 flex items-center justify-center rounded-[50px] w-[227px]   '
                >
                  <img src='./interface.svg' className=' mr-1' />
                  <span className=''>On-chain Interface for Agg. Data</span>
                </div>
              </div>
            </div>
          </div>
        ),
        content: (
          <>
            <ContentItem tit='zkBlob' sub='Ethereum Blob TX —> DAS —> Data Proof via ZK rollup.' />
            <ContentItem
              tit='Data Programmability'
              sub='On-chain interfaces for data functions can be instanly accessed by smart contracts and AggLayer blockchains.'
            />
          </>
        ),
      },
      {
        title: (
          <>
            <span>"Agg. </span>
            <span className='text-black'>Growth</span>
          </>
        ),
        img: <GrowthSVG className='w-[600px] mt-[100px] md:w-[500px] md:mt-14 mo:mt-8 mo:w-full' />,
        content: (
          <>
            <ContentItem tit='Data Value Extraction' sub='Bi-directional value growth driven by data amount and value.' />
            <ContentItem tit='Benfit Sharing' sub='Value stream reward back to all blockchain users that connect with EthDA.' />
          </>
        ),
      },
    ]
  }, [])
  return (
    <div className=' mo:h-max'>
      {/* <section id={`panels`} className='mo:relative mo:h-max mo:flex mo:flex-col mo:w-full'> */}
      {content.map((item, index) => {
        return (
          <article
            key={`slider${index}`}
            id={`panel-${index}`}
            className={` mo:!relative bg-slate-500 w-full tab${index} sticky top-0`}
            style={{ boxShadow: '0px 10px 6px 10px rgba(0,0,0,0.3)' }}
          >
            <div className='flex mo:flex-col mo:h-fit'>
              <div className=' bg-[url(/GroupBg.svg)] w-[50%] md:w-[40%] mo:w-full font-le text-white diagram-right flex justify-end mo:justify-center'>
                <div className='flex flex-wrap px-[30px]  md:w-full mo:px-[12vw] mo:py-8  h-full text-center items-center  float-end mo:float-none mo:w-full'>
                  <div className='flex flex-col gap-14 mo:gap-6 mo:w-full'>
                    <div className='flex items-center flex-row'>
                      <span className='font-bold text-[48px] xmd:text-[40px] md:text-3xl mo:text-[6vw]'>{item.title}</span>
                    </div>
                    {item.content}
                  </div>
                </div>
              </div>
              <div className='bg-black w-[50%] md:w-[60%] mo:w-full'>
                <div className=' w-[750px] md:w-full mo:w-full'>
                  <div className='flex flex-start mt-[62px] px-[40px] flex-row items-start gap-5 mo:mt-8 mo:px-5 mo:flex-col'>
                    <div className='flex items-center  gap-[30px]'>
                      {[...Array(content.length)].map((_, i) => {
                        return (
                          <div
                            key={`tabs_${i}`}
                            className={` ${index === i ? ' borders text-[#E08900] h-[40px] mo:h-[36px] w-auto gap-1 px-5' : ' text-white'}   text-sm font-medium flex items-center justify-center `}
                          >
                            {index === i && <img src='./Box.svg'></img>}
                            {tab[i]}
                          </div>
                        )
                      })}
                    </div>
                    {item.other}
                  </div>
                  <div className='flex mx-[40px] md:block items-center mo:mx-0 mo:px-5 justify-center mo:w-full'>{item.img}</div>
                </div>
              </div>
            </div>
          </article>
        )
      })}
      {/* </section> */}
    </div>
  )
}

export default ANewAgg
