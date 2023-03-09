import React, { FC } from 'react'

const QuarterBox:FC<{heading:string,desc:string,Q:number}> = ({heading,desc,Q}) => {
  return (
    <>
    <div className='border rounded-md w-4/12 relative px-4 py-12  mt-4'>
        <h4 className='font-bold text-lg'>{heading}</h4>
        <p className='mt-2 text-slate-600 z-0'>{desc}</p>
        <div className='absolute top-0 right-10 font-bold text-9xl text-gray-200 -z-10'>{Q}</div>
    </div>
    </>
  )
}

export default QuarterBox
