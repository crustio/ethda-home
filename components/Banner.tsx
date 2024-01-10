import { Header } from '@/components/Header'
import Link from 'next/link'

export const Banner = () => {
  return (
    <div className={'h-[750px] bg-cover'} style={{ backgroundImage: 'url(/banner.png)' }}>
      <Header wrapperClassName={'mt-[67px]'} btnClassName={'text-white'} />
      <div className={'h-[calc(100%-66px)] flex flex-col justify-center mo:justify-center mo:flex-row mo:mt-10'}>
        <div className='container mx-auto text-white font-bold flex justify-between mo:justify-center mo:text-center mo:flex mo:flex-wrap'>
          <div className='mo:text-center'>
            <div className={'text-[80px] mo:text-[38px]'}>
              Scale <span className={'text-transparent bg-clip-text bg-gradient-to-r from-[#ff9937] to-[#ff3d00]'}>Ethereum</span>
            </div>
            <div className={'text-[70px] mo:text-[38px]'}>With Data</div>
            <div className={'text-[70px] mo:text-[38px]'}>Availability Layer2</div>
            <div className='mo:flex justify-center'>
              <Link
                href={'./docs/lightpaper.pdf'}
                target={'_blank'}
                className={
                  'flex items-center justify-center w-[200px] h-[58px] border border-white rounded-[12px] font-semibold text-[20px] mo:text-2xl mt-8'
                }
              >
                Read the Doc.
              </Link>
            </div>
          </div>
          <div className={'-mt-10'}>
            <img src={'/banner.gif'} alt={'banner'} width={520} height={200} className=' mo:w-[324px] mo:h-[334px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
