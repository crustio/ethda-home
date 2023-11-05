export const With = () => {
  return (
    <div
      className={'bg-no-repeat'}
      style={{ backgroundImage: 'url(/with-1.png)', backgroundSize: '1100px', backgroundPosition: '0 100px' }}
    >
      <div className={'title'}>With EthDA</div>
      <div className='desc mb-8'>
        With ETHDA, Ethereum's scalability is enhanced by extending its data availability and storage at layer2
      </div>
      <div className='subtitle mb-6'>
        <span className={'text-[25px] text-primary'}>Rollups</span> Leverage EthDA for Data Availability.
      </div>
      <div className='flex gap-8'>
        <div className={'w-[660px]'}>
          <div className='flex gap-6 mb-8'>
            <button className={'feature-button'}>Cost saving</button>
            <button className={'feature-button'}>Persistent DA</button>
            <button className={'feature-button'}>High throughput</button>
          </div>
          <img src='/with-2.png' alt='with' width={'90%'} />
        </div>
        <div className='screen w-[380px] mt-8'>
          <div className='flex mb-4 gap-1'>
            <div className='screen-dot' />
            <div className='screen-dot' />
            <div className='screen-dot' />
          </div>
          <div className={'screen-content'}>
            Rollups post compressed transaction data to EthDA via EIP-4844 blob-carrying transactions. EthDA employs DAS scheme to store
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
