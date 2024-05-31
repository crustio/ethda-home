import Link from 'next/link'
import { TelegramIcon } from '@/components/icons/Telegram'
import { MediumIcon } from '@/components/icons/Medium'
import { TwitterIcon } from '@/components/icons/Twitter'
import { GithubIcon } from '@/components/icons/Github'
import { DiscordIcon } from '@/components/icons/Discord'

export const Footer = () => {
  const currentYear = new Date()?.getFullYear()
  return (
    <div className='bg-[url(/left-p.svg)] '>
      <footer className={'bg-black py-20 mo:py-10 px-5'}>
        <div className='container mx-auto mo:flex mo:flex-col justify-center mo:flex-wrap md:px-[30px]'>
          <img src='/logo.svg' className='shrink-0 h-[26px] w-[119px]' />
          <div className='flex justify-between mo:flex-col gap-8 items-center  mt-8'>
            <div className={'text-white font-light text-2xl mo:text-xl mo:w-full mo:flex mo:justify-center'}>
              Start Your EthDA Journey Now !
            </div>
            <div
              className='rounded-full'
              style={{
                padding: 1,
                backgroundImage: 'linear-gradient(90deg, #FFBA04 0%, #FC7823 100%)',
              }}
            >
              <button
                style={{
                  background: 'linear-gradient(90deg, #855A10 0%, #562B0F 100%)',
                }}
                onClick={() => window.open('https://forms.gle/TTxnVhnEyNEkyXUAA', '_blank')}
                className={'overflow-hidden rounded-full px-8 py-2  text-2xl font-light mo:text-xl text-white'}
              >
                Connect with Crust Team
              </button>
            </div>
          </div>
          <div className={'bg-white/15 my-10  h-[1px] w-full'} />
          <div className='flex justify-between items-center mo:flex-col mo:w-full '>
            <div className={'text-white/65 text-sm mo:self-start'}>Copyright © EthDA {currentYear} All Rights Reserved</div>
            <div className='flex gap-10 mo:gap-[50px] mo:my-10 mo:w-full mo:justify-center mo:justify-between text-[#737373]'>
              <Link href={'https://twitter.com/CrustNetwork'} target={'_blank'} className={'link-icon'}>
                <TwitterIcon />
              </Link>
              <Link href={'https://discord.com/invite/Jbw2PAUSCR'} target={'_blank'} className={'link-icon'}>
                <DiscordIcon />
              </Link>
              <Link href={'https://t.me/CrustNetwork'} target={'_blank'} className={'link-icon'}>
                <TelegramIcon />
              </Link>
              <Link href={'https://github.com/crustio'} target={'_blank'} className={'link-icon'}>
                <GithubIcon />
              </Link>
              <Link href={'https://crustnetwork.medium.com/'} target={'_blank'} className={'link-icon'}>
                <MediumIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
