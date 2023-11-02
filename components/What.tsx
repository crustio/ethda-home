export const What = () => {
  return (
    <>
      <div className='title text-center mb-14'>What is EthDA</div>
      <div
        className='flex bg-no-repeat pb-20 grow-0 shrink gap-8 justify-between pr-10'
        style={{
          backgroundImage: 'url(/what-1.png), url(/what-3.png)',
          backgroundPosition: 'left 0px, 400px 0px',
          backgroundSize: '420px, 700px',
        }}
      >
        <div className='w-[420px] shrink-0'>
          <div className='subtitle mb-6'>
            <div>EthDA is an</div>
            scalable Ethereum layer2
            <div>Data Availability solution.</div>
          </div>
          <div className={'desc flex flex-col gap-4'}>
            <div className={'dot-text'}>EthDA is running on a permissionless set of decentralized sequencers.</div>
            <div className={'dot-text'}>EthDA leverages DAS for blob sharding and permanent storage.</div>
            <div className={'dot-text'}>
              EthDA supports EIP-4844 blob-carrying transactions, serving as Data Availability for rollups and dStorage for DApps.
            </div>
          </div>
        </div>
        <div className={'flex justify-center w-[560px]'}>
          <div className={'text-right inline'}>
            <button className={'border border-primary rounded-lg px-4 py-2 text-sm text-primary'}>Ethereum's Danksharding roadmap</button>
            <img src={'/what-2.png'} alt={'what-2'} width={'100%'} />
          </div>
        </div>
      </div>
    </>
  )
}
