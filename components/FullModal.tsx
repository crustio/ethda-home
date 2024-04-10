import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import { FC, Fragment, HTMLAttributes } from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'

type MenuItem = {
  topSplit?: boolean
  icon?: any
  text: any
  to: string
  selected?: boolean
  onClick?: () => void
  [key: string]: any
}

type FullModalProps = {
  menus: MenuItem[]
  arrow?: HTMLAttributes<HTMLDivElement>
  keys?: string
  containerClassName?: any
  chooseItem?: (item: any) => void
  isShowText?: boolean
  iconClassName?: any
  onChooseItem?: (item: string) => void
  chooseValue?: string
  wrapperClassName?: any
}

const FullModal: FC<FullModalProps> = ({ menus, keys = 'text', onChooseItem, chooseValue, wrapperClassName }) => {
  const r = useRouter()
  const pathname = document.location.pathname.split('/')[1] || ''

  const onClickItem = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick()
    }
    if (item.to.startsWith('http')) {
      window.open(item.to, '_blank')
      return
    }

    r.push(item.to)

    typeof onChooseItem === 'function' && onChooseItem(item.text)
  }

  return (
    <div
      id='modal'
      style={{ background: 'rgba(255, 255, 255, 0.90)' }}
      className={classNames('fixed inset-0 mt-[81px] flex ', wrapperClassName)}
    >
      <div className='p-8 rounded-md mo:w-full'>
        {menus.map((item, i) => {
          return (
            <Fragment key={`poper_menu_item${i}`}>
              {item.topSplit && i > 0 && <div className='h-[1px] my-[.625rem] mo:my-[2px] mx-4 bg-[#eeeeee]' />}
              <div
                className={classNames(
                  'flex  w-full items-center py-[.625rem] mo:py-[.875rem]  text-black hover:text-green-2 cursor-pointer',
                )}
                onClick={() => onClickItem(item)}
              >
                {!!item.icon && <div className='text-xl mo:text-2xl'>{item.icon}</div>}
                <div className=' text-[22px] inline-block  font-medium border-b border-[#D9D9D9] border-solid  pb-5 w-full  mo:flex mo:w-full items-center  mo:justify-between'>
                  <span
                    className={classNames({
                      'text-[#FC7823]': !item.to.startsWith('http') && pathname === item.to.split('/')[1],
                    })}
                  >
                    {item[keys]}
                  </span>
                  <RiArrowRightUpLine
                    className={classNames({
                      'text-[#FC7823]': !item.to.startsWith('http') && pathname === item.to.split('/')[1],
                    })}
                    size={22}
                  />
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
export default FullModal
