import Image from 'next/image'

export const Competitive = () => {
  return (
    <div className={'py-28 bg-gradient-to-b from-[rgb(245,230,221)] to-[rgb(249,246,241)]'}>
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
            <div className='w-1/6'>Cost</div>
            <div className='w-1/6 rower-primary'>Low</div>
            <div className='w-1/6'>Low</div>
            <div className='w-1/6'>Low</div>
            <div className='w-1/6'>TDB</div>
            <div className='w-1/6'>High</div>
          </div>
        </div>
      </div>
    </div>
  )
}
