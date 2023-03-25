import { FC } from "react";

interface IProps {
    header:string;
    description:string;
    number:number;
    haveBorders?:boolean
}

const QuarterBox:FC<IProps> = ({header, description, number, haveBorders=true}) => {
  return (
   
      <div className={` rounded-md  flex flex-1 flex-col justify-center  shadow-md relative px-8 py-16 ${haveBorders ? 'border' : ''}`}> 
        <h4 className='font-bold mt-16 '>{header}</h4>
        <p className='mt-2 text-slate-600 z-0'>{description}</p>
        <div className='absolute -top-8 right-10 font-bold text-[170px] text-red-100 -z-10'>{number}</div>
    </div>
   
  )
}

export default QuarterBox
