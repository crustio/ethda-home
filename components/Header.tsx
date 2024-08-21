'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import classNames from 'classnames'
import FullModal from './FullModal'
import { ethda } from '@/utils/wagmi'
import { docsURL } from '@/constants'

type HeaderType = {
  logo?: string
  isShow?: (e: boolean) => void
  headerTextClassName?: any
  className?: any
  containerClassName?: any
  wrapperClassName?: any
  btnClassName?: any
  contentClassName?: any
}

export const Header: FC<HeaderType> = ({
  logo = '/logo.svg',
  containerClassName = 'container mx-auto ',
  headerTextClassName,
  wrapperClassName,
  className,
  btnClassName,
  contentClassName = ' border-b',
  isShow: isHidden,
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

  const onChooseItem = (e: string) => {
    setChooseValue(e)
    setIsShow(false)
    document.documentElement.classList.remove('overflow-hidden')
    document.body.classList.remove('overflow-hidden')
  }

  useEffect(() => {
    if (!isShow) {
      document.documentElement.classList.remove('overflow-hidden')
      document.body.classList.remove('overflow-hidden')
    }
  }, [isShow])

  const currentMenus = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Explorer',
      to: ethda.blockExplorers.default.url,
    },
    {
      text: 'Blobscan',
      to: ethda.blockExplorers.blobs.url,
    },
    {
      text: 'Try BlobTX',
      to: '/blobtx',
    },

    {
      text: 'Document',
      to: docsURL(),
    },
  ]

  const onSwitchTo = (address: string) => {
    if (address.startsWith('http')) {
      window.open(address, '_blank')
      return
    }
    push(address)
  }

  return (
    <div className={classNames(` ${contentClassName}`)} suppressHydrationWarning>
      <header className={classNames(`py-5  ${isShow && ' !bg-white'}  border-b-[rgba(255,255,255,.2)]`, className)}>
        <div className=' mo:mx-[30px] '>
          <div className={classNames('flex justify-between items-center', containerClassName)}>
            <Link href={'/'}>
              <Image src={`${isShow ? 'b-EthDA.svg' : logo}`} alt={` ${isShow ? 'b-EthDA.svg' : 'logo.svg'}`} width={110} height={22} />
            </Link>
            {isMobile ? (
              <button
                onClick={() => {
                  setIsShow(!isShow)
                  typeof isHidden === 'function' && isHidden(isShow)
                  document.documentElement.classList.add('overflow-hidden')
                  document.body.classList.add('overflow-hidden')
                }}
              >
                {isShow ? (
                  <HiOutlineX className={classNames(`${isShow && '!text-black'} w-6 h-6 `, btnClassName)} />
                ) : (
                  <HiOutlineMenu className={classNames(btnClassName, `w-6 h-6 `)} />
                )}
              </button>
            ) : (
              <div className={classNames('flex items-center gap-8 text-white text-sm', headerTextClassName)}>
                <div onClick={() => onSwitchTo('/')} className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                  Home
                </div>
                <div
                  onClick={() => onSwitchTo(ethda.blockExplorers.default.url)}
                  className={`nav-item ${pathname === '/Explorer' ? 'active' : ''}`}
                >
                  Explorer
                </div>
                <div
                  onClick={() => onSwitchTo(ethda.blockExplorers.blobs.url)}
                  className={`nav-item ${pathname === '/Blobscan' ? 'active' : ''}`}
                >
                  Blobscan
                </div>
                <div onClick={() => onSwitchTo('blobtx')} className={`nav-item ${pathname === '/blobtx' ? 'active' : ''}`}>
                  Try BlobTx
                </div>
                <Link href={docsURL()} target={'_blank'} className={`block nav-item`}>
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
    </div>
  )
}
