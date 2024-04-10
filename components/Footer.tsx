import Link from 'next/link'
import { TelegramIcon } from '@/components/icons/Telegram'
import { MediumIcon } from '@/components/icons/Medium'
import { TwitterIcon } from '@/components/icons/Twitter'
import { GithubIcon } from '@/components/icons/Github'
import { DiscordIcon } from '@/components/icons/Discord'

export const Footer = () => {
  const data = [
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line1.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2024 Q1</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(-2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          DevNet launch in Feb, with workable chain and interfaces, demonstration DApp, BlobScan, and necessary dev docs
        </div>
      ),
      borderImg: 'bg-[url(/border1.svg)] mt-[54px]',
    },
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line2.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2024 Q2</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(-2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          TestNet launch in May, with initial DAS implementation and related flows, full dev docs and SDK; CDK readiness for market
          promotion
        </div>
      ),
      borderImg: 'bg-[url(/border2.svg)]',
    },
    {
      img: <img src='./calendar.svg' />,
      line: <img src='./dev-Line3.svg' />,
      title: <div className=' text-2xl font-bold  text-white'>2024 Q4</div>,
      content: (
        <div style={{ fontFamily: 'inter', transform: 'rotate(2deg)' }} className='mt-[37px] font-medium text-base text-white'>
          Full DAS and Staking implement- tation, benefit sharing contracts, treasury and governance modules MainNet Launch
        </div>
      ),
      borderImg: 'bg-[url(/border3.svg)]  mt-[-24px]',
    },
  ]
  const currentYear = new Date()?.getFullYear()
  return (
    <div className='bg-[url(/left-p.svg)] '>
      <div className=' '>
        <div className=' pb-10 bg-black fixed z-50 text-white justify-center mo:mx-10 px-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]'>
          <div className=' flex font-hlc font-black gap-4 text-[42px] items-center '>
            Dev Plan
            <img src='./plus.svg'></img>
          </div>
          <div style={{ fontFamily: 'inter' }} className='mt-[50px] font-extralight text-[54px]'>
            <div>MainNet Launch in</div>
            <div>2024 Q4</div>
          </div>
          <div className=' flex gap-[89px]'>
            {data.map(({ img, content, borderImg, title, line }, i) => {
              return (
                <div key={`content_${i}`} className={`${borderImg} w-[340px] h-[435px] bg-repeat bg-cover`}>
                  <div className=' mt-[34px] mx-[34px]'>
                    <div style={{ fontFamily: 'inter' }} className=' flex items-center gap-3'>
                      {img}
                      {title}
                    </div>
                    <div className='mt-[37px]'>{line}</div>
                    {content}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <footer className={'bg-gray-900 py-20 mo:py-10 '}>
        <div className='container mx-auto mo:flex mo:flex-row justify-center mo:flex-wrap md:px-[30px]'>
          <div className='flex justify-between mo:flex-col '>
            <div className={'text-white text-[24px] mo:text-xl font-semibold mo:w-full mo:flex mo:justify-center'}>
              Start Your EthDA Journey Now!
            </div>
            <div className='flex mo:flex-col mo:mt-5'>
              <button
                onClick={() => window.open('https://forms.gle/TTxnVhnEyNEkyXUAA', '_blank')}
                className={
                  'mo:mt-5 bg-gradient-to-r  rounded-lg mo:w-[300px] mo:h-[42px] mo:text-sm mo:font-light  from-[#FF6933] to-[#FF2F00] h-[36px] w-[240px]  text-sm  text-white'
                }
              >
                Connect with Crust Team
              </button>
            </div>
          </div>
          <div className={'bg-[#333] my-10 mo:my-5 h-[1px] w-full'} />
          <div className='flex justify-between items-center mo:flex-col mo:w-full '>
            <div className={'text-gray-500 text-sm '}>Copyright © EthDA {currentYear} All Rights Reserved</div>
            <div className='flex gap-10 mo:gap-[50px] mo:my-5 mo:w-full mo:justify-center '>
              <Link href={'https://t.me/CrustNetwork'} target={'_blank'} className={'link-icon'}>
                <TelegramIcon />
              </Link>
              <Link href={'https://crustnetwork.medium.com/'} target={'_blank'} className={'link-icon'}>
                <MediumIcon />
              </Link>
              <Link href={'https://twitter.com/CrustNetwork'} target={'_blank'} className={'link-icon'}>
                <TwitterIcon />
              </Link>
              <Link href={'https://github.com/crustio'} target={'_blank'} className={'link-icon'}>
                <GithubIcon />
              </Link>
              <Link href={'https://discord.com/invite/Jbw2PAUSCR'} target={'_blank'} className={'link-icon'}>
                <DiscordIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
