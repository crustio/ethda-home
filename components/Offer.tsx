export const Offer = () => {
  return (
    <div
      className={'bg-no-repeat pb-20'}
      style={{ backgroundImage: 'url(/offer-1.png)', backgroundSize: '900px', backgroundPosition: '300px top' }}
    >
      <div className={'subtitle mt-20 mb-6'}>DApps Leverage EthDA for an On-chain Decentralized Storage Solution.</div>
      <div className='flex gap-6 mb-8'>
        <button className={'feature-button'}>Fully on-chain</button>
        <button className={'feature-button'}>ETH as fees</button>
      </div>
      <div className='flex gap-12 justify-between'>
        <div className='screen w-[380px] grow shrink-0'>
          <div className='flex mb-4 gap-1'>
            <div className='screen-dot' />
            <div className='screen-dot' />
            <div className='screen-dot' />
          </div>
          <div className={'screen-content'}>
            With its array of application layer protocols, EthDA not only caters to the data availability network for Rollups but also
            introduces an innovative, fully on-chain decentralized storage solution for the entire Ethereum ecosystem.
          </div>
          <div className='flex mt-4'>
            <div className='screen-bar w-[40px]' />
            <div className='screen-bar w-[40px] ml-4' />
            <div className='screen-bar w-[40px] ml-auto' />
            <div className='screen-bar w-[40px] ml-4' />
          </div>
        </div>
        <div className={'shrink'}>
          <img src='/offer-2.png' alt='offer' width={'80%'} />
        </div>
      </div>
    </div>
  )
}
