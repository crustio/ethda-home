import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const tab = ['Staking', 'Date', 'Growth']

const ANewAgg = () => {
  const [current, setCurrent] = useState(0)
  const smoother = useRef<any>()
  const [currentWidth, setCurrentWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      const ele = document?.getElementsByClassName('content')[0]
      setCurrentWidth(ele.clientWidth || 0)
    }

    window.addEventListener('resize', updateWidth)
    updateWidth()

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    let allowScroll = true
    let scrollTimeout = gsap.delayedCall(1, () => (allowScroll = true)).pause()
    let currentIndex = 0
    let swipePanels = gsap.utils.toArray('.swipe-section .panel')
    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i })
    let intentObserver = ScrollTrigger.observe({
      type: 'wheel,touch',
      onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
      onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
      tolerance: 10,
      preventDefault: true,

      onEnable(self: any) {
        allowScroll = false
        scrollTimeout.restart(true)
        let savedScroll = self.scrollY()
        self._restoreScroll = () => self.scrollY(savedScroll)
        document.addEventListener('scroll', self._restoreScroll, { passive: false })
      },
      onDisable: (self: any) => document.removeEventListener('scroll', self._restoreScroll),
    })

    intentObserver.disable()

    function gotoPanel(index: number, isScrollingDown: boolean) {
      if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
        intentObserver.disable() // resume native scroll
        return
      }
      allowScroll = false
      scrollTimeout.restart(true)

      let target: any = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index]

      gsap.to(target, {
        yPercent: isScrollingDown ? -100 : 0,
        duration: 0.75,
      })
      setCurrent(index)

      currentIndex = index
    }

    ScrollTrigger.create({
      trigger: '.swipe-section',
      pin: false,
      start: 'top top',
      end: '+=10',
      onEnter: (self) => {
        if (intentObserver.isEnabled) {
          return
        }
        self.scroll(self.start + 1)
        intentObserver.enable()
      },
      onEnterBack: (self) => {
        if (intentObserver.isEnabled) {
          return
        }
        self.scroll(self.end - 1)
        intentObserver.enable()
      },
    })

    let horizontalSections = gsap.utils.toArray('.horizontal .panel')
    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal',
        pin: true,
        scrub: 1,
        end: '+=3500',
        markers: true,
      },
    })
  }, [])

  const onClickTo = (i: number) => {
    const targetElement = document.getElementsByClassName(`tab${i}`)[0]
    console.log('targetElement', targetElement)

    if (!targetElement) return
    let horizontalSections = gsap.utils.toArray('.horizontal .panel')

    let swipePanels = gsap.utils.toArray('.swipe-section .panel')
    console.log('horizontalSectionshorizontalSections', swipePanels.length - 1)

    gsap.to(targetElement, {
      xPercent: -100,
      duration: 0.75,
    })
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
          L2 Native token
        </div>
      ),
      img: (
        <div className=' ml-5'>
          <img src='./gif/1.gif' />
        </div>
      ),
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
        <div className='ml-5 flex'>
          <div>
            <img src='./gif/2.gif' id='gif' className=' py-[30px] w-auto ssm:w-[500px] md:w-[600px]' />
          </div>
          <div className=''>
            <div className='flex flex-col gap-4 font-medium relative top-[100px] ssm:left-[-20px] '>
              <div className='text-[#8F4FFF]  border-[#8F4FFF] border rounded-[50px] px-5 w-[110px] h-8 flex items-center'>Blob Tx</div>
              <div className='text-[#E08900] border-[#E08900] border rounded-[50px] px-5 w-[110px] h-8 flex items-center'>Blob Tx</div>
              {/* <div className='flex items-center relative right-[170px] '>
          <div className='borderLine leftLine'></div>
          <div className=' border-l border-white border-b w-[55px]'>22</div>
          <div style={{ fontFamily: 'inter' }} className=' border text-white border-white rounded-[1px]  flex  '>
            <img src='./interface.svg' /> On-chain Interface for Agg. Data
          </div>
        </div> */}
              {/* <div className='flex flex-col gap-4 font-medium relative top-[100px] text-sm md:left-[-30px] '>
          <div className='text-[#8F4FFF] border-[#8F4FFF] border rounded-[50px] px-5 md:px-[10px] w-[120px] md:w-[80px] h-8 flex items-center'>
            Blob Tx
          </div>
          <div className='text-[#E08900] border-[#E08900] border rounded-[50px] px-5 md:px-[10px] w-[120px] md:w-[80px] h-8 flex items-center'>
            Blob Tx
          </div>
          <div className='flex items-center relative right-[170px] '>
            <div className='borderLine leftLine'></div>
            <div className=' border-l border-white border-b w-[55px] h-10 relative top-[-17px]'></div>
            <div
              style={{ fontFamily: 'inter' }}
              className=' border text-white text-[12px] font-medium border-white h-8 flex items-center justify-center rounded-[50px] w-[227px]   '
            >
              <img src='./interface.svg' className=' mr-1' /> On-chain Interface for Agg. Data
            </div>
          </div>
        </div>
        */}
            </div>
          </div>
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
    },
    {
      title: (
        <div className='text-[42px] md:text-4xl'>
          <span>"Agg. </span>
          <span className='text-black'>Growth</span>
        </div>
      ),
      img: (
        <div style={{ fontFamily: 'inter' }} className='flex flex-col py-[120px] md:w-full'>
          <div className='flex justify-center w-full'>
            <div className='outline text-sm font-medium md:!w-[380px]  '>
              <div className='flex flex-col justify-between  h-full'>
                <div className=' text-white px-[15px] pt-5 flex justify-between'>
                  <span>Tx</span>
                  <div className=' pt-4 ml-[50px]'>Users</div>
                  <span>Accessible</span>
                </div>
                <div className=' text-white px-[15px] pb-[28px] flex justify-between'>
                  <span>Blobs</span>
                  <span>Agg.Data</span>
                </div>
              </div>
              <div className='border_container border_container_top'></div>
              <div className='border_container border_container_top_img'></div>
              <div className='border_container border_container_right_img md:!left-[355px]'></div>
              <div className='border_container border_container_right md:!left-[275px]'></div>
              <div className='border_container border_container_left_bottom'></div>
              <div className='border_container border_container_left_img'></div>
              <div className='border_container border_container_right_bottom'></div>
              <div className='border_container border_container_bottom'></div>
              <div className=' h-[25px]'>
                <div className='border_container border_container_bottom_img'></div>
              </div>
            </div>
          </div>

          <div className='mt-[-70px] flex  w-full  md:w-full  md:justify-center  '>
            <div className='flex flex-col content'>
              <div className='flex'>
                <div style={{ fontFamily: 'inter' }} className='outline3 text-[#E08900] text-sm font-medium   '>
                  <div className={`flex items-center  w-[516px] md:w-[${currentWidth - 40}px]   h-full mt-5 `}>
                    <div className='leftImg'>
                      <div className='w-[50px] h-[50px] relative left-[-25px] top-[30px] bg-black'>
                        <img src='./y-users.svg' />
                      </div>
                    </div>
                    <div className='flex justify-between w-full  items-center font-medium text-sm'>
                      <div>Benefit-Sharing</div>
                      <div className='centerPos'>
                        <div className=' ml-[10px] mt-[-20px]'>PoS</div>
                      </div>
                      <div className=' md:mr-10'>Protocal Incentive</div>
                    </div>
                    <div className='rightImg md:after:!left-[-7px] '>
                      <div className='w-[50px] h-[50px] relative left-[35px] md:left-[-15px] top-[30px] bg-black'>
                        <img src='./y-users.svg' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='center'></div>

                <div style={{ fontFamily: 'inter' }} className='outline4 md:!w-full   text-[#E08900] text-sm font-medium   '></div>
              </div>
              <div className='relative left-[45px] top-[-15px] w-[430px] md:w-full  flex text-[#E08900] justify-between '>
                <div className='left text-[14px] font-medium  bg-black rounded-[50px] border-[#E08900] border w-[130px] h-8  flex items-center'>
                  <div className=' mr-[25px] '>Dual-Stake</div>
                </div>
                <div className='centerDas'>
                  <div className=' bg-black w-[50px] h-[50px] mt-[-70px]'>
                    <img src='./das.svg' />
                  </div>
                  <div className='centerFlag'></div>
                </div>
                <div className='text-[14px] font-medium md:mr-20  bg-black rounded-[50px] border-[#E08900] border w-[120px] h-8  flex items-center'>
                  <div className=' ml-[25px] '>PoS Stake</div>
                </div>
              </div>
              <div className='text-[#E08900] ml-[45px] flex justify-between w-[430px] mt-[-60px]'>
                <div>L2 Native Token</div>
                <div>DAS Nodes</div>
                <div>Restake ETH</div>
              </div>
            </div>
          </div>
        </div>
      ),
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

  const scrollToPanel = (index: number) => {
    const targetElement = document.getElementById(`panel-${index}`)

    if (targetElement) {
      gsap.to(window, {
        duration: 0.75,
        scrollTo: { y: targetElement.offsetTop },
        onComplete: () => setCurrent(index),
      })
    }
  }

  return (
    <>
      <div className='swipe-section '>
        <section id={`panels`}>
          {content.map((item, index) => {
            return (
              <article id={`panel-${index}`} className={`panel bg-slate-500 w-full tab${index}`}>
                <div key={`slider${index}`} className='!flex h-[900px]'>
                  <div className=' bg-[url(/GroupBg.svg)] w-[50%] md:w-[40%] font-le text-white diagram-right'>
                    <div className='flex w-[640px] flex-wrap px-[30px]  md:w-full  h-full text-center items-center  float-end'>
                      <div className='flex flex-col '>
                        <div className='flex items-center flex-row'>
                          <span className='font-bold text-[48px] xmd:text-[40px] md:text-3xl'>{item.title}</span>
                        </div>
                        {item.content}
                      </div>
                    </div>
                  </div>
                  <div className='bg-black w-[50%] md:w-[60%]'>
                    <div className=' w-[680px] md:w-full  '>
                      <div className='flex  flex-start mt-[62px] mx-[40px] flex-row items-start md:flex md:flex-wrap justify-between   '>
                        <div className='flex items-center  gap-[30px]'>
                          {[...Array(content.length)].map((_, i) => {
                            return (
                              <div
                                onClick={() => onClickTo(i)}
                                className={` ${current === i ? ' borders text-[#E08900] h-[40px] w-auto gap-1 px-5' : ' text-white'}   text-base font-medium flex items-center justify-center `}
                              >
                                {current === i && <img src='./Box.svg'></img>}
                                {tab[i]}
                              </div>
                            )
                          })}
                        </div>
                        <div className='md:ml-0 md:w-full md:mt-[30px]'>
                          <div className='flex flex-end'>{item.other}</div>
                          <div className='flex mt-6'>{item.other1}</div>
                        </div>
                      </div>
                      <div className='flex justify-center md:mx-[30px] md:block items-center  '>
                        <div className=' bg-cover object-cover bg-repeat'>{item.img}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default ANewAgg
