import classNames from 'classnames'
import { FC, useEffect } from 'react'

export const ALoading: FC<{ className: any }> = ({ className, ...other }) => {
  return (
    <div {...other} className={classNames('text-black w-full h-full flex items-center justify-center', className)}>
      <div className=' w-[400px] bg-white flex justify-center h-[340px] rounded-xl'>
        <div className=' flex flex-col  items-center w-full justify-center bg-[#FFFAF6]  mx-[10px] my-[10px] border-dashed border rounded-xl border-[#FC7823]'>
          <img src='loading.svg' className='animate-spin' />
          <div className=' mt-5 font-medium text-xl text-[#FC7823]  '>Sending</div>
        </div>
      </div>
    </div>
  )
}

export const LoadingFull = () => {
  return <ALoading className='fixed z-50 left-0 top-0 w-full !h-full bg-black/25' />
}
