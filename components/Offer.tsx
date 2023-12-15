export const Offer = () => {
  return (
    <div
      className={'bg-no-repeat pb-20 mo:px-10 '}
      style={{ backgroundImage: 'url(/offer-1.png)', backgroundSize: '900px', backgroundPosition: '300px top' }}
    >
      <div className={'subtitle mt-20 mb-6 mo:text-center'}>
        <span className={'text-[25px] mo:text-xl text-primary '}>DApps</span> Leverage EthDA for Decentralized Storage
      </div>
      <div className='flex gap-6 mb-8 mo:w-full mo:flex-wrap'>
        <button className={'feature-button mo:w-full mo:text-sm mo:font-light mo:h-[42px]'}>Fully on-chain</button>
        <button className={'feature-button mo:w-full mo:text-sm mo:font-light mo:h-[42px]'}>ETH as fees</button>
      </div>
      <div className='flex gap-12 justify-between mo:flex-wrap mo:flex-col-reverse '>
        <div className='screen w-[380px] grow shrink-0 mo:w-full'>
          <div className='flex mb-4 gap-1'>
            <div className='screen-dot' />
            <div className='screen-dot' />
            <div className='screen-dot' />
          </div>
          <div className={'screen-content mo:text-base mo:font-light'}>
            DApps use EthDA's dStorage infrastructures and toolset to store websites and user-generated data, making DApps fully-on-chain,
            censorship-resistant and unstoppable.
          </div>
          <div className='flex mt-4'>
            <div className='screen-bar w-[40px]' />
            <div className='screen-bar w-[40px] ml-4' />
            <div className='screen-bar w-[40px] ml-auto' />
            <div className='screen-bar w-[40px] ml-4' />
          </div>
        </div>
        <div className={'shrink'}>
          <img src='/offer-2.png' alt='offer' width={'80%'} className='mo:w-auto' />
        </div>
      </div>
    </div>
  )
}
