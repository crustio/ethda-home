import { useEffect, useRef, useState } from 'react'
import { Header } from '../Header'

const ABanner = () => {
  const phrases = ['Aggregated Blockchains', 'Agg.Staking', 'Agg.Data', 'Agg.Growth']
  const Typewriter = ({ phrases }) => {
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
    <div className=' h-[1040px] bg-[url(/blackStar.svg)] bg-cover'>
      <Header wrapperClassName={'mt-[67px]'} btnClassName={'text-white '} className={'py-[28px] md:mx-[30px]'} />
      <div className=' flex justify-center   '>
        <div className=' w-full w-'>
          <div className=' font-bold text-[62px] md:text-[50px] text-center text-white pt-[206px]  '>
            <div className='relative'>
              <img src='./circle.svg' className='absolute inset-0 m-auto'></img>
              <div className='flex justify-center items-center '>
                <div className=' w-auto flex ] px-[30px]'>
                  <div className='text-center'>A Data Availability </div>
                  <span className='text-[#E08900] ml-3'> Layer</span>
                </div>
              </div>
            </div>
            <div className=' pt-[120px] font-hlc w-full flex justify-center' style={{ letterSpacing: '2px' }}>
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
