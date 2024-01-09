import classNames, { ArgumentArray } from 'classnames'
import { FC } from 'react'

type SuccessType = {
  size?: string
  onLeftButton?: () => void
  onRightButton?: () => void
  className?: any
}

export const ASuccess: FC<SuccessType> = ({ onLeftButton, className, onRightButton, size = '', ...other }) => {
  return (
    <div {...other} className={classNames('text-black w-full h-full flex items-center justify-center', className)}>
      <div className=' w-[420px] bg-white flex justify-center h-[340px]'>
        <div className=' flex flex-col  items-center w-full justify-center bg-[#FFFAF6]  mx-[10px] my-[10px] border-dashed border rounded-xl border-[#FC7823]'>
          <img src='success.svg' />
          <div className=' font-medium text-xl text-[#FC7823] mt-[-35px]  '>Success</div>
          <div className='flex gap-[38px] mt-[40px] mb-5'>
            <button
              onClick={onLeftButton}
              className='w-[141px] border h-[36px] rounded-lg border-[#000000] px-[21px] font-medium text-base'
            >
              View History
            </button>
            <button
              onClick={onRightButton}
              className='w-[141px] h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[21px] font-medium text-base'
            >
              Send more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SuccessFull: FC<SuccessType> = ({ onLeftButton, onRightButton }) => {
  return (
    <ASuccess className='fixed z-50 left-0 top-0 w-full !h-full bg-black/25' onLeftButton={onLeftButton} onRightButton={onRightButton} />
  )
}
