import { Wrapper } from "@/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "@/assets/HeroPoster.png"
import Button from '@/components/shared/Button'

export const Hero = () => {
  return (
    <section >
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-1" >
            <h4 className="text-red-800 font-bold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="text-5xl sm:text-6xl font-bold ">Certified Web 3.0 and Metaverse Developer</h1>
            <p className=" mt-6 text-xl text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet. </p>
         <p className="mt-2 text-lg text-slate-600">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
         <div className="mt-5">

          <Button text={"Learn More"}/>
         </div>

          </div>

          {/* Right Side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt={"Hero Img"} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
