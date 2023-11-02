import { Banner } from '@/components/Banner'
import Image from 'next/image'
import { What } from '@/components/What'
import { With } from '@/components/With'
import { Offer } from '@/components/Offer'
import { Footer } from '@/components/Footer'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

export default function Home() {
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
          style={{ backgroundImage: 'url(/why-bg.png)', backgroundSize: '100%' }}
          className={'py-20 mx-8 flex items-center justify-center py-16'}
        >
          <div className={'w-[660px]'}>
            <div className='flex justify-end mb-12'>
              <button className={'why-button'}>
                Seamless
                <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
              </button>
            </div>
            <div className={'flex items-center justify-between mb-12'}>
              <button className={'why-button'}>
                Availibility
                <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
              </button>
              <div className={'text-[80px] font-bold leading-[90px]'}>
                <div>Why</div>
                <div>EthDA</div>
              </div>
              <button />
            </div>
            <div className='flex justify-end pr-20'>
              <button className={'why-button'}>
                Alignment
                <ArrowTopRightIcon className={'w-[20px] h-[20px]'} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={'py-14 bg-gradient-to-b from-[rgb(245,230,221)] to-[rgb(249,246,241)]'}>
        <div className='text-center title mb-10'>Competitive Landscape</div>
        <div className='container mx-auto'>
          <div className='flex mb-2 rower-header'>
            <div className={'w-1/6'}>&nbsp;</div>
            <div className={'w-1/6'}>
              <Image src={'/ethda.svg'} alt={'ethda'} width={101} height={22} />
            </div>
            <div className={'w-1/6'}>
              <Image src={'/celestia.svg'} alt={'ethda'} width={110} height={28} />
            </div>
            <div className={'w-1/6'}>
              <Image src={'/avail.svg'} alt={'ethda'} width={97} height={28} />
            </div>
            <div className={'w-1/6'}>
              <Image src={'/eigenda.svg'} alt={'ethda'} width={134} height={28} />
            </div>
            <div className={'w-1/6'}>
              <div className={'flex flex-col'}>
                <Image src={'/eth.svg'} alt={'ethda'} width={144} height={30} />
                <div className={'text-[10px] mt-1 pl-7'}>(Pre-EIP4844)</div>
              </div>
            </div>
          </div>
          <div className={'border border-2 border-[#f0e7e1] rounded-[4px]'}>
            <div className='flex rower'>
              <div className='w-1/6'>Technology</div>
              <div className='w-1/6 rower-primary'>Ethereum Rollup</div>
              <div className='w-1/6'>Tendermint</div>
              <div className='w-1/6'>Substrate</div>
              <div className='w-1/6'>Smart Contract</div>
              <div className='w-1/6'>Ethereum</div>
            </div>
            <div className='flex rower'>
              <div className='w-1/6'>Payment</div>
              <div className='w-1/6 rower-primary'>$ETH</div>
              <div className='w-1/6'>$TIA</div>
              <div className='w-1/6'>TBD</div>
              <div className='w-1/6'>$ETH</div>
              <div className='w-1/6'>$ETH</div>
            </div>
            <div className='flex rower'>
              <div className='w-1/6'>Data Retention</div>
              <div className='w-1/6 rower-primary'>Permanent</div>
              <div className='w-1/6'>Temporary</div>
              <div className='w-1/6'>Temporary</div>
              <div className='w-1/6'>Temporary</div>
              <div className='w-1/6'>Temporary</div>
            </div>
            <div className='flex rower'>
              <div className='w-1/6'>dStorage</div>
              <div className='w-1/6 rower-primary'>Yes</div>
              <div className='w-1/6'>No</div>
              <div className='w-1/6'>No</div>
              <div className='w-1/6'>No</div>
              <div className='w-1/6'>Yes</div>
            </div>
            <div className='flex rower'>
              <div className='w-1/6'>Data Availability sampling</div>
              <div className='w-1/6 rower-primary'>Yes</div>
              <div className='w-1/6'>Yes</div>
              <div className='w-1/6'>Yes</div>
              <div className='w-1/6'>No</div>
              <div className='w-1/6'>No</div>
            </div>
            <div className='flex rower'>
              <div className='w-1/6'>Proof schema</div>
              <div className='w-1/6 rower-primary'>Fraud & Validity Proofs</div>
              <div className='w-1/6'>Fraud Proofs</div>
              <div className='w-1/6'>Validity Proofs</div>
              <div className='w-1/6'>Validity Proofs</div>
              <div className='w-1/6'>Validity Proofs</div>
            </div>
            <div className='flex rower'>
              <div className='w-1/6'>Ability to scale</div>
              <div className='w-1/6 rower-primary'>Yes</div>
              <div className='w-1/6'>Yes</div>
              <div className='w-1/6'>Yes</div>
              <div className='w-1/6'>No</div>
              <div className='w-1/6'>No</div>
            </div>
            <div className='flex rower'>
              <div className='w-1/6'>Cosst</div>
              <div className='w-1/6 rower-primary'>Low</div>
              <div className='w-1/6'>Low</div>
              <div className='w-1/6'>Low</div>
              <div className='w-1/6'>TDB</div>
              <div className='w-1/6'>High</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
