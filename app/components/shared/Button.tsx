import { FC } from "react"

const Button:FC<{text:string}> = ({text}) => {
    
  return (
    <>
    <button 
    className="bg-[#00616C] rounded-full py-4 text-white px-8 text-lg font-medium  hover:scale-105 duration-300 hover:shadow-lg" >{text}</button>

    </>
  )
}

export default Button
