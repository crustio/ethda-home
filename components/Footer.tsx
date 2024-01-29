import Link from 'next/link'
import { TelegramIcon } from '@/components/icons/Telegram'
import { MediumIcon } from '@/components/icons/Medium'
import { TwitterIcon } from '@/components/icons/Twitter'
import { GithubIcon } from '@/components/icons/Github'
import { DiscordIcon } from '@/components/icons/Discord'

export const Footer = () => {
  const currentYear = new Date()?.getFullYear()
  return (
    <footer className={'bg-gray-900 py-20 mo:py-10 '}>
      <div className='container mx-auto mo:flex mo:flex-row justify-center mo:flex-wrap md:px-[30px]'>
        <div className='flex justify-between mo:flex-col '>
          <div className={'text-white text-[24px] mo:text-xl font-semibold mo:w-full mo:flex mo:justify-center'}>
            Sign up for EthDA updates
          </div>
          <div className='flex mo:flex-col mo:mt-5'>
            <div className={'border border-[#FF6933] rounded-l-md mo:rounded-[10px] w-[300px] mo:w-[356px] flex items-center px-4 text-xs'}>
              <input
                type='text'
                className={'bg-transparent w-full mo:text-sm mo:font-light outline-0 text-white mo:h-[42px]'}
                placeholder={'Email Address'}
              />
            </div>
            <button
              className={
                'mo:mt-5 bg-gradient-to-r mo:w-[356px] mo:h-[42px] mo:text-sm mo:font-light  from-[#FF6933] to-[#FF2F00] h-[36px] w-[120px]  text-sm rounded-r-md mo:rounded-r-[10px] mo:rounded-l-[10px]  text-white'
              }
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className={'bg-[#333] my-10 mo:my-5 h-[1px] w-full'} />
        <div className='flex justify-between items-center mo:flex-col mo:w-full '>
          <div className={'text-gray-500 text-sm '}>Copyright © EthDA {currentYear} All Rights Reserved</div>
          <div className='flex gap-10 mo:gap-[60px] mo:my-5 mo:w-full mo:justify-center'>
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
  )
}
