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

  const onChooseItem = (e: string) => {
    setChooseValue(e)
    setIsShow(false)
    document.body.classList.remove('overflow-hidden')
  }

  useEffect(() => {
    if (!isShow) {
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
      to: 'https://scan-devnet.ethda.io',
    },
    {
      text: 'Blobscan',
      to: 'https://blobscan-devnet.ethda.io/',
    },
    {
      text: 'Try BlobTX',
      to: '/blob-TX',
    },

    {
      text: 'Document',
      to: 'https://docs.ethda.io/',
    },
  ]

  const onSwitchTo = (address: string) => {
    if (!address.startsWith('/')) {
      window.open(address, '_blank')
      return
    }
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
              <div
                onClick={() => onSwitchTo('https://scan-devnet.ethda.io')}
                className={`nav-item ${pathname === '/Explorer' ? 'active' : ''}`}
              >
                Explorer
              </div>
              <div
                onClick={() => onSwitchTo('https://blobscan-devnet.ethda.io/')}
                className={`nav-item ${pathname === '/Blobscan' ? 'active' : ''}`}
              >
                Blobscan
              </div>
              <div className={`nav-item ${pathname === '/build' ? 'active' : ''}`}>Build</div>
              <div onClick={() => onSwitchTo('blob-TX')} className={`nav-item ${pathname === '/blob-TX' ? 'active' : ''}`}>
                Try BlobTx
              </div>
              <Link href={'https://docs.ethda.io/'} target={'_blank'} className={`block nav-item`}>
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
