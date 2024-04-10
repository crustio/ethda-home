import { useEffect, useRef, useState } from 'react'
import { Header } from '../Header'

const ABanner = () => {
  const phrases = ['Aggregated Blockchains', 'Agg.Staking', 'Agg.Data', 'Agg.Growth']
  const Typewriter = ({ phrases }: any) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [displayedPhrase, setDisplayedPhrase] = useState('')

    useEffect(() => {
      const typingInterval = isDeleting ? 300 : 150
      const deletingInterval = isDeleting ? 300 : 150

      const phrase = phrases[currentPhraseIndex]

      const typingTimer = setTimeout(
        () => {
          if (!isDeleting && currentCharIndex === phrase.length) {
            setIsDeleting(true)
          } else if (isDeleting && currentCharIndex === 0) {
            setIsDeleting(false)
            setCurrentPhraseIndex((prevIndex) => (prevIndex === phrases.length - 1 ? 0 : prevIndex + 1))
          } else {
            setCurrentCharIndex((prevIndex) => (isDeleting ? prevIndex - 1 : prevIndex + 1))
          }
        },
        isDeleting ? deletingInterval : typingInterval,
      )

      setDisplayedPhrase(phrase.substring(0, currentCharIndex))

      return () => clearTimeout(typingTimer)
    }, [currentCharIndex, isDeleting, currentPhraseIndex, phrases])

    return (
      <div className='typewriter'>
        <h1>{displayedPhrase}</h1>
      </div>
    )
  }
  return (
    <div className=' h-[1000px] bg-[url(/blackStar.svg)] bg-cover'>
      <Header contentClassName={'border-b-[#E0890033] border-b'} wrapperClassName={'mt-[67px]'} btnClassName={'text-white '} className={'py-[28px] md:mx-[30px]  '} />
      <div className=' flex justify-center mo:mx-10 px-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]   '>
        <div className=' w-full '>
          <div className=' font-bold text-[62px] md:text-[50px] text-center text-white pt-[206px]  '>
            <div className='relative'>
              <img src='./circle.svg' className='absolute inset-0 m-auto'></img>
              <div className='flex justify-center items-center '>
                <div className=' w-auto flex border border-[#E08900] px-[30px] architecture-info-right items-center'>
                  <div className='text-center'>A Data Availability </div>
                  <span className='text-[#E08900] ml-3'> Layer</span>
                  <div className="border_corner border_corner_left_top"></div>
                    <div className="border_corner border_corner_right_top"></div>
                    <div className="border_corner border_corner_left_bottom"></div>
                    <div className="border_corner border_corner_right_bottom"></div>
                </div>
                <div className='flex justify-center flex-col float-end relative right-[2.5rem] md:right-[2.5rem] top-[85px]'>
                <div>
                 <img src='./mouse.svg'/>
              </div>
              <div className='ml-2 mt-2'>
              <div className=' border w-[70px] h-[30px] rounded border-[#E08900] text-[#E08900] text-[10px] flex items-center justify-center '>
                Layer 2
              </div>
              </div>

              </div>
              </div>
             
            </div>
            <div className=' pt-[60px] font-hlc w-full flex justify-center' style={{ letterSpacing: '2px' }}>
              Designed for
              <div className='text-[#E08900] ml-4 md:text-[50px]'>
                <Typewriter phrases={phrases} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-[url(/block.svg)] h-[350px] w-full '>
        <div className='flex justify-center pt-[118px] rounded-sm '>
          <button
            onClick={() => window.open('https://docs.ethda.io/')}
            style={{
              background: 'linear-gradient(90deg, rgba(222, 149, 25, 0.6) 0%, rgba(142, 70, 24, 0.6) 100%)',
              //   backgroundImage: 'linear-gradient(90deg, rgba(222, 149, 25, 0.6) 0%, rgba(142, 70, 24, 0.6) 100%)',
              //   backgroundPositionX: '1px',
            }}
            className='borders  text-white  w-[260px] h-[66px] font-hlc text-2xl font-black'
          >
            Read Docs
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
        <div style={{ letterSpacing: '2px' }} className=' text-white flex items-center font-hlc   '>
          <img src='./polygon.svg'></img> <span className=' ml-3 text-[28px]'>polygon</span>
          <div className='text-[32px]'>
            <span className='text-[#8F4FFF] ml-2'>CDK</span>-based L2, <span className='ml-2'>Connect</span> with{' '}
            <span className='text-[#8F4FFF]'>AggLayer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ABanner
