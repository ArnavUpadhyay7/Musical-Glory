import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className='font-[Rejouice Headline] h-[80vh] bg-[#141414]'>
      <div className='flex flex-col items-center justify-center mt-[14vw] md:mt-[5vw]'>
        <h1 className='text-[7.8vw] text-white md:text-[6vw] font-bold'>Master the Art of Music</h1>
        <p className='text-[2.6vw] font-light mt-[6vw] text-white px-16 md:px-96 md:mt-[1vw] md:text-[1.5vw]'>Dive into our comprehensive music and transform your musical journey today. Weather you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
        <Link className='text-[3.5vw] hover:cursor-pointer hover:text-black hover:bg-white p-2 mt-16 border-grey border-[1px] rounded-full text-white md:p-4 md:text-[1.2vw]' href="/course">Explore Courses</Link>
      </div>
    </div>
  )
}

export default Landing
