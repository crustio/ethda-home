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
      <div className='subtitle mb-6'>Rollups Leverage EthDA for Data Availability.</div>
      <div className='flex gap-8'>
        <div className={'w-[660px]'}>
          <div className='flex gap-6 mb-8'>
            <button className={'feature-button'}>Cost saving</button>
            <button className={'feature-button'}>Persistent DA</button>
            <button className={'feature-button'}>High throughput</button>
          </div>
          <img src='/with-2.png' alt='with' width={'90%'} />
        </div>
        <div className='screen w-[400px]'>
          <div className='flex mb-4 gap-1'>
            <div className='screen-dot' />
            <div className='screen-dot' />
            <div className='screen-dot' />
          </div>
          <div className={'screen-content'}>
            Rollups could also choose to post compressed transactions via blob-carrying transactions to EthDA. In this case, EthDA acts more
            like a Plasma chain. Blobs are stored on EthDA in the form of a Merkle tree, and storage proofs are submitted to layer 1 smart
            contracts. Rollup’s contracts on layer 1 could then use the storage proofs to check data availability. And in case of fraud
            proving, rollup verifiers need to download transaction Blobs from EthDA.
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
