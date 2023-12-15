import Link from 'next/link'
import { useEffect, useState } from 'react'

export const What = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  const handleResize = () => {
    setIsMobile(getWindowWidth() <= 900)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <div className='title text-center mb-14 mo:mb-10 mo:text-[28px]'>What is EthDA</div>
      <div
        className='flex bg-no-repeat mo:w-full pb-20 grow-0 shrink gap-8 justify-between pr-10 mo:pl-10   mo:flex-col-reverse '
        style={{
          backgroundImage: 'url(/what-1.png), url(/what-3.png)',
          backgroundPosition: 'left 0px, 400px 0px',
          backgroundSize: '420px, 700px',
        }}
      >
        <div className='w-[420px] shrink-0 mo:w-full'>
          <div className='subtitle mb-6  mo:text-xl mo:text-center'>
            {isMobile ? (
              <span>EthDA is a scalable Ethereum layer2 Data Availability solution.</span>
            ) : (
              <>
                <div className=''>EthDA is a</div>
                scalable Ethereum layer2
                <div>Data Availability solution.</div>
              </>
            )}
          </div>
          <div className={'desc flex flex-col gap-4 mo:text-base'}>
            <div className={'dot-text'}>EthDA is running on a permissionless set of decentralized sequencers.</div>
            <div className={'dot-text'}>EthDA leverages DAS for blob sharding and permanent storage.</div>
            <div className={'dot-text'}>
              EthDA supports EIP-4844 blob-carrying transactions, serving as Data Availability for rollups and dStorage for DApps.
            </div>
          </div>
        </div>
        <div className={'flex justify-center w-[560px] mo:w-full  '}>
          <div className={'text-right mo:text-center inline mo:w-full  '}>
            <Link
              target={'_blank'}
              href={'https://ethereum.org/en/roadmap/danksharding'}
              className={'underline border border-primary rounded-lg px-4 py-2 text-sm text-primary '}
            >
              Ethereum's Danksharding roadmap
            </Link>
            <div className='mo:w-full'>
              <img src={'/what-2.png'} alt={'what-2'} width={'100%'} className='mo:mt-10 mo:bg-fill mo:w-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
