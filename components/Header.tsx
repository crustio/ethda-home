'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PoperMenu } from './poper'
import { HiOutlineMenu } from 'react-icons/hi'

export const Header = () => {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  const getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  const handleResize = () => {
    setIsMobile(getWindowWidth() <= 900)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const currentMenus = [
    {
      text: 'Home',
      // to: "/sign-up-for-community",
    },
    {
      text: 'Build',
      // to: "/contact-us",
    },
    {
      text: 'Document',
      to: './docs/lightpaper.pdf',
    },
  ]
  return (
    <header className={'py-5 border-b border-b-[rgba(255,255,255,.2)]'}>
      <div className=' mo:mx-10 '>
        <div className='container mx-auto flex justify-between items-center'>
          <Image src={'/logo.svg'} alt={'logo.svg'} width={119} height={26} />
          {isMobile ? (
            <PoperMenu containerClassName={'!w-[150px] mo:right-[-1px]'} menus={currentMenus} className='absolute z-[9999]'>
              <button className='text-[2rem] mo:text-2xl'>
                <HiOutlineMenu className={' text-white'} />
              </button>
            </PoperMenu>
          ) : (
            <div className={'flex items-center gap-8 text-white text-sm'}>
              <div className={`nav-item ${pathname === '/' ? 'active' : ''}`}>Home</div>
              <div className={`nav-item ${pathname === '/build' ? 'active' : ''}`}>Build</div>
              <Link href={'./docs/lightpaper.pdf'} target={'_blank'} className={`block nav-item`}>
                Document
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
