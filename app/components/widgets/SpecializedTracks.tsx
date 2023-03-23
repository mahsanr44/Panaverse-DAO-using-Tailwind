import React from 'react'
import { Wrapper } from '@/components/shared/Wrapper'
import QuarterBox from '@/components/shared/QuarterBox'

export const data=[
  {
    header:"Web 3.0 (Blockchain) and Metaverse Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
    quarters:[
      {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number:4
      },
      {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      }
    ]
  },
  {
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    quarters:[
      {
        header:"Quarter IV",
        description:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number:4
      },
      {
        header:"Quarter V",
        description:"AI-361: Deep Learning and MLOps",
        number:5
      }
    ]
  }
]; 

const SpecializedTracks = () => {
  return (
    <>
      <section>
        <Wrapper>
          {/* Header */}
          <div>

            <h2 className='text-5xl font-bold whitespace-pre-line'>Specialized Tracks</h2>
            <p className='mt-3 text-xl text-slate-600 max-w-screen-sm'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
          </div>

          <div className='mt-10 flex gap-x-6 gap-y-8'>
            {/* Content Left */}
            <div className='shadow-xl basis-8/12 rounded-xl border border-slate-200 py-8 px-8'>
              <h4 className='text-primary text-lg font-medium '>Specialized Program</h4>
              <h3 className='text-2xl font-bold '>Web 3.0 (Blockchain) and Metaverse Specialization </h3>
              <p className='text-xl mt-3 text-slate-600'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
              <button className='text-primary text-xl mt-4 underline flex gap-x-2 items-end'>Learn more
                <svg className='mb-1.5 ' width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                </svg>
              </button>

              <div className='flex gap-4 mt-8'>
                <QuarterBox header={'Quarter IV'} description={'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform'} number={4} haveBorders={false} />
                <QuarterBox header={'Quarter V'} description={'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform'} number={5} haveBorders={false} />
              </div>
            </div>

            {/* Content Right */}
            <div className=' px-4 py-6 bg-slate-200 basis-4/12'>
              <div className='flex gap-x-4 items-center cursor-pointer'>
                <div>
                  <div className='w-20 h-16 rounded bg-green-400'></div>
                </div>
                <div>
                  <h4 className='text-primary font-medium '>Specialized Program</h4>
                  <h3 className='text-xl font-semibold  '>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                </div>
              </div>
              <div className='flex gap-x-4 items-center cursor-pointer'>
                <div>
                  <div className='w-20 h-16 rounded bg-green-400'></div>
                </div>
                <div>
                  <h4 className='text-primary font-medium '>Specialized Program</h4>
                  <h3 className='text-xl font-semibold  '>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                </div>
              </div>

              {/* Underlined */}
            </div>
          </div>
        </Wrapper>

      </section>
    </>
  )
}

export default SpecializedTracks
