export const With = () => {
  type Title = {
    name: string
  }[]
  const title: Title = [{ name: 'Cost saving' }, { name: 'Persistent DA' }, { name: 'High throughput' }]
  return (
    <div
      className={'bg-no-repeat mo:px-10'}
      style={{ backgroundImage: 'url(/with-1.png)', backgroundSize: '1100px', backgroundPosition: '0 100px' }}
    >
      <div className={'title mo:text-center mo:text-[28px]'}>With EthDA</div>
      <div className='desc mb-8 just mo:text-base mo:text-center'>
        With EthDA, Ethereum's scalability is enhanced by extending its data availability and storage at layer2
      </div>
      <div className='subtitle mb-6 mo:text-center'>
        <span className={'text-[25px] mo:text-xl text-primary'}>L2s</span> Leverage EthDA for Data Availability.
      </div>
      <div className='flex gap-8 mo:flex-wrap mo:w-full'>
        <div className={'w-[660px] mo:w-full'}>
          <div className='flex gap-6 mb-8 mo:flex-wrap mo:w-full'>
            {title.map((item, i: number) => {
              return (
                <button key={`btn_title_${i}`} className={'feature-button mo:w-full mo:text-sm mo:h-[42px] font-light'}>
                  {item.name}
                </button>
              )
            })}
          </div>
          <img src='/with-2.png' alt='with' width={'90%'} className='mo:w-full' />
        </div>
        <div className='screen w-[380px] mt-8 mo:mt-5 mo:w-full '>
          <div className='flex mb-4 gap-1'>
            <div className='screen-dot' />
            <div className='screen-dot' />
            <div className='screen-dot' />
          </div>
          <div className={'screen-content  mo:text-base'}>
            Optimistic rollups post compressed transaction data to EthDA via EIP-4844 blob-carrying transactions. EthDA employs DAS scheme to store
            blobs among a decentralized sequencer network, and posts storage proofs to Ethereum L1. Rollups check storage proofs to validate
            data storage, and download transaction data blobs from EthDA for fraud proving.
          </div>
          <div className='flex mt-4'>
            <div className='screen-bar w-[120px]' />
            <div className='screen-bar w-[60px] ml-auto' />
            <div className='screen-bar w-[60px] ml-4' />
          </div>
        </div>
      </div>
    </div>
  )
}
