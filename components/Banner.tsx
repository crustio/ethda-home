import { Header } from '@/components/Header'
import Link from 'next/link'

export const Banner = () => {
  return (
    <div className={'h-[750px] bg-cover'} style={{ backgroundImage: 'url(/banner.png)' }}>
      <Header />
      <div className={'h-[calc(100%-66px)] flex flex-col justify-center'}>
        <div className='container mx-auto text-white font-bold flex justify-between'>
          <div>
            <div className={'text-[80px]'}>
              Scale <span className={'text-transparent bg-clip-text bg-gradient-to-r from-[#ff9937] to-[#ff3d00]'}>Ethereum</span>
            </div>
            <div className={'text-[70px]'}>With Data</div>
            <div className={'text-[70px]'}>Availability Layer2</div>
            <Link
              href={'https://ipfs.io/ipfs/QmdMvxeQMzc8FyiKL7PeXkRDpsSmGr3CRSQSpXZtPtAiyV\n'}
              target={'_blank'}
              className={
                'flex items-center justify-center w-[200px] h-[58px] border border-white rounded-[12px] font-semibold text-[20px] mt-8'
              }
            >
              Read the Doc.
            </Link>
          </div>
          <div className={'-mt-10'}>
            <img src={'/banner.gif'} alt={'banner'} width={520} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
