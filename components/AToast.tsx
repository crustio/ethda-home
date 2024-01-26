import classNames from 'classnames'
import { FC, ReactNode } from 'react'

type ToastType = {
  size?: string
  onLeftButton?: () => void
  onRightButton?: () => void
  className?: any
  chilren: ReactNode
  contentClassName?: any
}

export const AToastFull: FC<ToastType> = ({ onLeftButton, className, contentClassName, onRightButton, chilren, size = '', ...other }) => {
  return (
    <div
      id='modal'
      {...other}
      className={classNames(
        'text-black w-full h-full flex items-center justify-center fixed z-50 left-0 top-0  bg-black/25 px-10 ',
        className,
      )}
    >
      <div className={classNames(' w-[420px] relative bg-white flex justify-center h-[340px] rounded-xl', contentClassName)}>
        <div className=' flex flex-col  items-center w-full justify-center bg-[#FFFAF6]  mx-[10px] my-[10px] border-dashed border rounded-xl border-[#FC7823]'>
          {chilren}
        </div>
      </div>
    </div>
  )
}
