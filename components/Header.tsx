'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import classNames from 'classnames'
import FullModal from './FullModal'

type HeaderType = {
  logo?: string
  headerTextClassName?: any
  className?: any
  containerClassName?: any
  wrapperClassName?: any
  btnClassName?: any
}

export const Header: FC<HeaderType> = ({
  logo = '/logo.svg',
  containerClassName = 'container mx-auto ',
  headerTextClassName,
  wrapperClassName,
  className,
  btnClassName,
}) => {
  const { push } = useRouter()
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [chooseValue, setChooseValue] = useState<string | undefined>(undefined)

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

  const onChooseItem = (e) => {
    setChooseValue(e)
    setIsShow(false)
    document.body.classList.remove('overflow-hidden')
  }

  const currentMenus = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Build',
      to: '',
    },
    {
      text: 'Blob TX',
      to: '/blob-TX',
    },

    {
      text: 'Document',
      to: './docs/lightpaper.pdf',
    },
  ]

  const onSwitchTo = (address: string) => {
    push(address)
  }
  return (
    <header className={classNames('py-5 border-b border-b-[rgba(255,255,255,.2)]', className)}>
      <div className=' mo:mx-[30px] '>
        <div className={classNames('flex justify-between items-center', containerClassName)}>
          <Image src={logo} alt={'logo.svg'} width={119} height={26} />
          {isMobile ? (
            <button
              onClick={() => {
                setIsShow(!isShow)
                document.body.classList.add('overflow-hidden')
              }}
            >
              {isShow ? (
                <HiOutlineX className={classNames('w-6 h-6', btnClassName)} />
              ) : (
                <HiOutlineMenu className={classNames(btnClassName, 'w-6 h-6')} />
              )}
            </button>
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
      {isShow && (
        <FullModal wrapperClassName={wrapperClassName} menus={currentMenus} onChooseItem={onChooseItem} chooseValue={chooseValue} />
      )}
    </header>
  )
}
