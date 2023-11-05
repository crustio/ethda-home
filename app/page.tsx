'use client'
import { Banner } from '@/components/Banner'
import { What } from '@/components/What'
import { With } from '@/components/With'
import { Offer } from '@/components/Offer'
import { Footer } from '@/components/Footer'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Competitive } from '@/components/Competitive'
import * as Popover from '@radix-ui/react-popover'
import { useState } from 'react'

export default function Home() {
  const [enter, setEnter] = useState(false)

  return (
    <>
      <Banner />
      <div className={'bg-[rgb(252,246,238)]'}>
        <div className='container mx-auto pt-20'>
          <What />
          <With />
          <Offer />
        </div>
        <div
          style={{ backgroundImage: 'url(/why-bg.png)', backgroundSize: '100% 100%' }}
          className={'py-24 mx-8 flex items-center justify-center py-16 bg-no-repeat'}
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <div className={'w-[660px]'}>
            <div className='flex justify-end mb-12'>
              <div className={'relative h-[48px]'}>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className={`why-button ${enter ? 'active' : ''}`}>
                      Seamless
                      <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content sideOffset={5} align={'start'}>
                      <div className={`why-popover w-[400px]`}>
                        <div className={'text-[16px] font-medium mb-2'}>Native Blob-Carrying Transactions Support</div>
                        <div className={'text-sm leading-7'}>
                          EthDA bolsters on-chain availability and storage capabilities for large data sets through its native support for
                          blob-carrying transactions, enabling sharding and storage of large data blocks.
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
            </div>
            <div className={'flex items-center justify-between mb-12'}>
              <div className={'relative'}>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className={`why-button ${enter ? 'active' : ''}`}>
                      Security
                      <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content side={'right'} align={'end'}>
                      <div className={'why-popover active w-[380px]'} style={{ transform: 'translateX(-380px)' }}>
                        <div className={'text-[16px] font-medium mb-2'}>Data Availability Sampling Mechanism</div>
                        <div className={'text-sm leading-7'}>
                          EthDA employs DAS to secure DA data storage, and derives security from Ethereum consensus by rolling-up storage
                          proofs to Ethereum for fraud proving and trustless finality
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
              <div className={'text-[80px] font-bold leading-[90px]'}>
                <div>Why</div>
                <div>EthDA</div>
              </div>
              <button className={'w-[100px]'} />
            </div>
            <div className='flex justify-end pr-20'>
              <div className={'relative h-[48px]'}>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className={`why-button ${enter ? 'active' : ''}`}>
                      Alignment
                      <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content sideOffset={5} align={'start'}>
                      <div className={'why-popover w-[480px]'}>
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

      <Competitive />
      <Footer />
    </>
  )
}
