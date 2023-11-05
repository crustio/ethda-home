'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <header className={'py-5 border-b border-b-[rgba(255,255,255,.2)]'}>
      <div className='container mx-auto flex justify-between items-center'>
        <Image src={'/logo.svg'} alt={'logo.svg'} width={119} height={26} />
        <div className={'flex items-center gap-8 text-white text-sm'}>
          <div className={`nav-item ${pathname === '/' ? 'active' : ''}`}>Home</div>
          <div className={`nav-item ${pathname === '/build' ? 'active' : ''}`}>Build</div>
          <Link
            href={'https://ipfs.io/ipfs/QmdMvxeQMzc8FyiKL7PeXkRDpsSmGr3CRSQSpXZtPtAiyV\n'}
            target={'_blank'}
            className={`block nav-item`}
          >
            Document
          </Link>
        </div>
      </div>
    </header>
  )
}
