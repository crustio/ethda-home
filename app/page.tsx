'use client'
import { Banner } from '@/components/Banner'
import { What } from '@/components/What'
import { With } from '@/components/With'
import { Offer } from '@/components/Offer'
import { Footer } from '@/components/Footer'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Competitive } from '@/components/Competitive'
import * as Popover from '@radix-ui/react-popover'
import { useEffect, useState } from 'react'
import ABanner from '@/components/Home/ABanner'
import Agg from '@/components/Home/Agg'
import AConnectEthDA from '@/components/Home/AConnectEthDA'
import Aaggregated from '@/components/Home/Aaggregated'
import AIntroduce from '@/components/Home/AIntroduce'

export default function Home() {
  // const [enter, setEnter] = useState(false)
  // const [width, setWidth] = useState<number>()
  // const [isMobile, setIsMobile] = useState<boolean>(false)

  // const getWrapperWindowWidth = () => document.getElementById('wrapperContainer')
  // const getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  // const handleResize = () => {
  //   setWidth(getWrapperWindowWidth()?.clientWidth)
  //   setIsMobile(getWindowWidth() <= 900)
  // }
  // useEffect(() => {
  //   handleResize()
  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isMobile) {
  //     setEnter(true)
  //   }
  // }, [isMobile])

  return (
    <>
      {/* <Banner /> */}
      <ABanner />
      <Agg />
      <AConnectEthDA />
      <Aaggregated />
      <AIntroduce />

      {/* <div className={'bg-[rgb(252,246,238)] '}>
        <div className='container mx-auto pt-20 mo:pt-10 '>
          <What />
          <With />
          <Offer />
        </div>
        <div
          style={{ backgroundImage: 'url(/why-bg.png)', backgroundSize: '100% 100%' }}
          className={'py-24 mo:py-10 mx-8 mo:mx-0 flex items-center justify-center py-16 bg-no-repeat   '}
          onMouseEnter={() => !isMobile && setEnter(true)}
          onMouseLeave={() => !isMobile && setEnter(false)}
        >
          <div id='wrapperContainer' className={'w-[660px] mo:px-10 mo:w-full '}>
            <div className=' mo:flex mo:justify-between'>
              <div className={'relative hidden mo:inline'}>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className={`why-button mo:py-3 mo:px-3 ${enter ? 'active' : ''}`}>
                      Security
                      <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content side={isMobile ? 'bottom' : 'right'} align={'start'} style={{ width: width + 'px' }}>
                      <div
                        className={'why-popover active w-[380px] mo:w-auto mo:mx-10  mo:mt-[20px] mo:h-[258px]  '}
                        style={{ transform: !isMobile ? 'translateX(-380px)' : 'none' }}
                      >
                        <div className={'text-[16px]  mo:text-lg mo:font-medium font-medium mb-2 '}>
                          Data Availability Sampling Mechanism
                        </div>
                        <div className={'text-sm mo:text-base mo:font-medium leading-7'}>
                          EthDA employs DAS to secure DA data storage, and derives security from Ethereum by verifying and settling state
                          transitions on L1
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
              <div className='flex justify-end mb-12'>
                <div className={'relative h-[48px]'}>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className={`why-button mo:py-3 mo:px-3 ${enter ? 'active' : ''}`}>
                        Seamless
                        <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
                      </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content sideOffset={5} align={'start'} style={{ width: width + 'px' }} className={` mo:mt-[30px] `}>
                        <div
                          className={`${
                            !isMobile && 'why-popover'
                          } mo:backdrop-blur-lg mo:w-auto mo:h-[258px] w-[400px]   mo:mx-10  mo:whitespace-normal mo:p-4 mo:text-left  mo:border mo:border-primary    mo:rounded-2xl  mo:text-[#373C4F] mo:bg-[rgba(250,247,243,.6)]`}
                        >
                          <div className={'text-[16px] mo:text-lg font-medium mo:font-medium mb-2 mo:w-full'}>
                            Native Blob-Carrying Transactions Support
                          </div>
                          <span className={'text-sm mo:text-base mo:font-normal leading-7 w-full '}>
                            EthDA bolsters on-chain availability and storage capabilities for large data sets through its native support for
                            blob-carrying transactions, enabling sharding and storage of large data blocks.
                          </span>
                        </div>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>
              </div>
            </div>
            <div className={'flex items-center justify-between  mo:inline-block mb-12  mo:w-full'}>
              <div className={'relative mo:hidden '}>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className={`why-button ${enter ? 'active' : ''}`}>
                      Security
                      <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      side={'right'}
                      align={'end'}
                      style={{ width: width + 'px' }}
                      className='mo:max-w-[430px]  md:ml-[130px] mo:px-10 mo:mt-[30px]  '
                    >
                      <div
                        className={
                          'why-popover active w-[380px] md:w-[300px] mo:backdrop-blur-lg mo:w-full mo:whitespace-normal mo:p-4 mo:text-left  mo:border mo:border-primary mo:rounded-2xl  mo:text-[#373C4F] mo:bg-[rgba(250,247,243,.6)]'
                        }
                        style={{ transform: 'translateX(-380px)' }}
                      >
                        <div className={'text-[16px] font-medium mb-2'}>Data Availability Sampling Mechanism</div>
                        <div className={'text-sm leading-7'}>
                          EthDA employs DAS to secure DA data storage, and derives security from Ethereum by verifying and settling state
                          transitions on L1
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
              <div
                className={
                  'text-[80px] mo:w-full  mo:text-[50px] font-bold leading-[90px] mo:leading-[70px] mo:text-center mo:flex mo:flex-col mo:justify-center '
                }
              >
                <div>Why</div>
                <div>EthDA</div>
              </div>
              <button className={'w-[100px] mo:hidden'} />
            </div>
            <div className='flex justify-end pr-20 mo:pr-0 mo:justify-center '>
              <div className={'relative h-[48px]'}>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className={`why-button mo:py-3 mo:px-3 ${enter ? 'active' : ''}`}>
                      Alignment
                      <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content sideOffset={5} align={'start'} side={isMobile ? 'top' : 'bottom'} style={{ width: width + 'px' }}>
                      <div className={'mo:h-[258px]  mo:backdrop-blur-lg why-popover w-[480px] mo:w-auto mo:mt-[-210px] mo:mx-10 '}>
                        <div className={'text-[16px] font-medium mb-2'}>A Fully Ethereum-based Layer 2 Solution</div>
                        <div className={'text-sm leading-7'}>
                          As an Ethereum layer2 network, EthDA is fully aligned with Ethereum technologies and features, adhering to
                          Ethereum’s danksharding roadmap in its design and implementation.
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Competitive /> */}
      <Footer />
    </>
  )
}
