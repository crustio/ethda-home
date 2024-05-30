const AConnectEthDA = () => {
  return (
    <>
      <div className=' text-center  '>
        <div className='bg-black'>
          <div className=' mo:mx-0  px-10 mo:px-5  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]'>
            <div className='flex justify-center'>
              <div className=' pt-[72px] pb-20 text-white text-[42px] mo:text-[6vw] font-black font-hlc'>
                <div className='flex  z-20'>
                  <div className=' relative z-10'>Connect to EthDA</div>
                  <div className=' relative left-[-35px] mt-6 rounded-[40px] bg-[#823ADE] w-[170px] h-[50px] gap-1 px-5 text-[26px] transform  -rotate-12 font-hlc items-center flex'>
                    <img src='./polygon-w.svg' className=' ' />
                    Polygon
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center pb-[120px]  '>
              <img src='./connectEthDA.svg' />
            </div>
          </div>
        </div>

        <div className='flex justify-center overflow-visible bg-black'>
          <div className="flex-1 bg-white rounded-tr-lg"></div>
          <div className="w-[20vw] max-w-40 h-[10vw] max-h-20 p-3 mo:p-[2vw] shrink-0 bg-white relative translate-y-2">
            <div className='w-full h-full absolute left-0 top-0 bg-black rounded-b-full z-0'></div>
            <img src='./design.svg' className='w-full h-auto -translate-y-[calc(50%+0.75rem)] mo:-translate-y-[calc(50%+2vw)]' />
          </div>
          <div className="flex-1 bg-white rounded-tl-lg"></div>
        </div>
      </div>
    </>
  )
}

export default AConnectEthDA
