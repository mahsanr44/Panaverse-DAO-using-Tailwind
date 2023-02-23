import { Wrapper } from "@/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "@/assets/hero.png"
export const Hero = () => {
  return (
    <section >
      <Wrapper>
        <div className="flex items-center">
          {/* Left Side */}
          <div className="flex-1" >
            <h4 className="text-teal-800 font-bold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="text-6xl font-bold leading-[72px]">Certified Web 3.0 and Metaverse Developer</h1>
            <p className=" mt-6 text-lg text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
            <button className="bg-teal-700 rounded-full p-3 text-white px-4 mt-8">Learn More</button>
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
