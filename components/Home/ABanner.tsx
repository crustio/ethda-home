import { useEffect, useState } from 'react'
import { Header } from '../Header'

const Typewriter = ({ phrases }: any) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedPhrase, setDisplayedPhrase] = useState('')

  useEffect(() => {
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
      isDeleting ? 80 : 150,
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
const phrases = ['Aggregated Blockchains', 'Aggregated Staking', 'Aggregated Data', 'Aggregated Growth']
const ABanner = () => {
  return (
    <div className='h-[1000px] mo:max-h-[160vw] mo:h-screen mo:min-h-[120vw]  bg-[url(/blackStar.svg)] bg-cover flex flex-col'>
      <Header
        contentClassName={'border-b-[#E0890033] border-b'}
        wrapperClassName={'mt-[67px]'}
        btnClassName={'text-white '}
        className={'py-[28px] md:mx-[30px]  '}
      />
      <div className=' flex justify-center'>
        <div className=' w-full '>
          <div className=' font-bold text-[62px] md:text-[50px] mo:text-[6vw] text-center text-white pt-[206px] mo:pt-[20vw]'>
            <div className='relative'>
              <img src='./circle.svg' className='absolute inset-0 m-auto'></img>
              <div className='flex justify-center items-center '>
                <div className='w-auto whitespace-nowrap flex border border-[#E08900] px-8 mo:px-4 py-3 architecture-info-right items-center'>
                  <div className='text-center'>A Data Availability </div>
                  <span className='text-[#E08900] ml-3'> Layer</span>
                  <div className='border_corner border_corner_left_top'></div>
                  <div className='border_corner border_corner_right_top'></div>
                  <div className='border_corner border_corner_left_bottom'></div>
                  <div className='border_corner border_corner_right_bottom'></div>
                  <div className='flex justify-center flex-col float-end absolute  top-[calc(100%+12px)] right-0'>
                    <div>
                      <img src='./mouse.svg' />
                    </div>
                    <div className='ml-2 mt-2'>
                      <div className=' border w-[70px] h-[30px] rounded border-[#E08900] text-[#E08900] text-[10px] flex items-center justify-center '>
                        Layer 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=' pt-[60px] font-hlc w-full flex justify-center items-center flex-wrap gap-4 mo:flex-col'
              style={{ letterSpacing: '2px' }}
            >
              Designed for
              <div className='text-[#E08900] md:text-[50px]'>
                <Typewriter phrases={phrases} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-[url(/block.svg)] my-auto mo:my-0 w-full '>
        <div className='flex justify-center pt-[118px] mo:pt-[5vw] rounded-sm '>
          <button
            onClick={() => window.open('https://docs.ethda.io/')}
            style={{
              background: 'linear-gradient(90deg, rgba(222, 149, 25, 0.6) 0%, rgba(142, 70, 24, 0.6) 100%)',
              //   backgroundImage: 'linear-gradient(90deg, rgba(222, 149, 25, 0.6) 0%, rgba(142, 70, 24, 0.6) 100%)',
              //   backgroundPositionX: '1px',
            }}
            className='borders  text-white  w-[260px] h-[66px] mo:w-[200px] mo:h-[40px] font-hlc text-2xl mo:text-lg font-black'
          >
            Read Docs
          </button>
        </div>
      </div>
      <div className='flex justify-center mb-8 mo:mt-auto'>
        <div style={{ letterSpacing: '2px' }} className=' text-white flex items-center font-hlc   '>
          <img src='./polygon.svg' className='w-[3.1vw]'></img> <span className=' ml-3 text-[28px] mo:text-[3vw]'>Polygon</span>
          <div className='text-[32px] mo:text-[3vw]'>
            <span className='text-[#8F4FFF] ml-2'>CDK</span>-based L2, <span className='ml-2'>Connect</span> with{' '}
            <span className='text-[#8F4FFF]'>AggLayer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ABanner
