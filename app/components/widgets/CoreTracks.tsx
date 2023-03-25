import React from 'react'
import { Wrapper } from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import QuarterBox from '@/components/shared/QuarterBox'

export const CoreTrackData = [
  {
    heading: 'Quarter I',
    description: 'CS-101: Object-Oriented Programming using TypeScript',
    number: 1
  },
  {
    heading: 'Quarter II',
    description: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    number: 2
  },
  {
    heading: 'Quarter III',
    description: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    number: 3
  },
]
function CoreTracks() {
  const header = "Core Courses \n (Common in All Specializations):"
  return (
    <section className='mt-16 lg:mt-28'>
      <Wrapper>
        {/* Content */}
        <div className='max-w-screen-md'>
          <h4 className='text-red-800 font-semibold text-lg uppercase'>Program of Studies</h4>
          <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2>
          <p className=" mt-3 text-xl text-slate-600">Every participant of the program will start by completing the following three core courses:</p>

          <div className='mt-5'>
            <Button text={"Learn More"} />
          </div>
        </div>

        {/* Boxes */}
        <div className='my-20 flex flex-1  flex-col md:flex-row  gap-y-6  gap-x-8'>
          {
            CoreTrackData.map((item) => (
              <QuarterBox
              key={item.number}
                header={item.heading}
                description={item.description}
                number={item.number}
              />
            ))
          }
        </div>
      </Wrapper>
    </section>
  )
}

export default CoreTracks
