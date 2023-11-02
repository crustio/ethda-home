import Link from 'next/link'
import { TelegramIcon } from '@/components/icons/Telegram'
import { MediumIcon } from '@/components/icons/Medium'
import { TwitterIcon } from '@/components/icons/Twitter'
import { GithubIcon } from '@/components/icons/Github'
import { DiscordIcon } from '@/components/icons/Discord'

export const Footer = () => {
  return (
    <footer className={'bg-gray-900 py-20'}>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <div className={'text-white text-[24px] font-semibold'}>Sign up for EthDA updates</div>
          <div className='flex'>
            <div className={'border border-[#FF6933] rounded-l-md w-[300px] flex items-center px-4 text-xs'}>
              <input type='text' className={'bg-transparent w-full outline-0 text-white'} placeholder={'Email Address'} />
            </div>
            <button className={'bg-gradient-to-r from-[#FF6933] to-[#FF2F00] h-[36px] w-[120px] text-sm rounded-r-md text-white'}>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className={'bg-[#333] my-10 h-[1px] w-full'} />
        <div className='flex justify-between items-center'>
          <div className={'text-gray-500 text-sm '}>Copyright © EthDA 2023 All Rights Reserved</div>
          <div className='flex gap-10'>
            <Link href={''} className={'link-icon'}>
              <TelegramIcon />
            </Link>
            <Link href={''} className={'link-icon'}>
              <MediumIcon />
            </Link>
            <Link href={''} className={'link-icon'}>
              <TwitterIcon />
            </Link>
            <Link href={''} className={'link-icon'}>
              <GithubIcon />
            </Link>
            <Link href={''} className={'link-icon'}>
              <DiscordIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
