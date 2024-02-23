import React from 'react'
import Cards from './Cards'
import Link from 'next/link'

const Featured = () => {
  return (
    <div className='md:h-[110vh] bg-[#141414]'>
      <div className='flex flex-col items-center'>
        <h2 className='text-[2.5vw] font-light text-[#52e1bf] pb-2 md:text-[1.6vw]'>FEATURED COURSES</h2>
        <h1 className='text-[5vw] font-bold text-white md:text-[3vw]'>Learn With The Best</h1>
      </div>
      <div className='flex flex-wrap gap-10 pt-8 p-6'>
        <Cards title="Guitar Fundamentals" desc="Learn the basics of playing guitar with our comprehensive beginner's course."/>
        <Cards title="Advanced Vocal Techniques" desc="Enhance your singing with advanced vocal techniques for intermediate to advanced learners."/>
        <Cards title="Music Production Fundamentals" desc="Dive into music production with this introductory course on the basics of sound engineering and mixing."/>
        <Cards title="Electronic Music Production" desc="Create competing electronic music with our course designed for beginners to advanced users."/>
        <Cards title="Blues Guitar Techniques" desc="Master the fundamentals and discover the techniques of blues guitar to add soul and depth to your playing."/>
        <Cards title="Guitar Basics 101" desc="Learn essential guitar skills fast with our beginner crash course. Master chords, strumming, and start playing today."/>
      </div>
      <div className='flex justify-center items-center md:pt-10'>
      <Link className='px-2 md:px-4 py-[1vw] md:py-2 bg-white text-black rounded-xl hover:text-white hover:bg-black hover:border-white hover:border-[1px]' href="/course">View all Courses</Link>
      </div>
    </div>
  )
}

export default Featured
