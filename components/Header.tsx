'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { PoperMenu } from './poper'
import { HiOutlineMenu } from 'react-icons/hi'
import classNames from 'classnames'

type HeaderType = {
  logo?: string
  headerTextClassName?: any
  className?: any
  containerClassName?: any
}

export const Header: FC<HeaderType> = ({
  logo = '/logo.svg',
  containerClassName = 'container mx-auto ',
  headerTextClassName,
  className,
}) => {
  const { push } = useRouter()
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

  const onSwitchTo = (address: string) => {
    push(address)
  }
  console.log('pathname', pathname)

  return (
    <header className={classNames('py-5 border-b border-b-[rgba(255,255,255,.2)]', className)}>
      <div className=' mo:mx-10 '>
        <div className={classNames('flex justify-between items-center', containerClassName)}>
          <Image src={logo} alt={'logo.svg'} width={119} height={26} />
          {isMobile ? (
            <PoperMenu containerClassName={'!w-[150px] mo:right-[0px]'} menus={currentMenus} className='absolute z-[9999]'>
              <button className='text-[2rem] mo:text-2xl'>
                <HiOutlineMenu className={' text-white'} />
              </button>
            </PoperMenu>
          ) : (
            <div className={classNames('flex items-center gap-8 text-white text-sm', headerTextClassName)}>
              <div onClick={() => onSwitchTo('/')} className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                Home
              </div>
              <div className={`nav-item ${pathname === '/build' ? 'active' : ''}`}>Build</div>
              <div onClick={() => onSwitchTo('blob-TX')} className={`nav-item ${pathname === '/blob-TX' ? 'active' : ''}`}>
                Blob TX
              </div>
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
