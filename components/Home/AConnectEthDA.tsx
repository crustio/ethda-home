const AConnectEthDA = () => {
  return (
    <>
      <div className=' text-center bg-black md:px-[30px] '>
        <div className='flex justify-center'>
          <div className=' pt-[72px] pb-20 text-white text-[42px] font-black font-hlc'>
            <div className='flex  z-20'>
              <div className=' relative z-10'>Connect to EthDA</div>
              <div className=' relative left-[-35px] mt-6 rounded-[40px] bg-[#823ADE] w-[170px] h-[50px] gap-1 px-5 text-[26px] transform  -rotate-12 font-hlc items-center flex'>
                <img src='./polygon-w.svg' className=' ' />
                polygon
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center pb-[120px]  '>
          <img src='./connectEthDA.svg' />
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='tab'>
          <div className=' relative left-[13px] top-[10px]'>
            <img src='./design.svg' />
          </div>
        </div>
      </div>
    </>
  )
}

export default AConnectEthDA
