import React from 'react'
import Cards from './Cards'
import Link from 'next/link'

const Featured = () => {
  return (
    <div className='md:h-[110vh] bg-[#141414]'>
      <div className='flex flex-col items-center'>
        <h2 className='text-[2.5vw] font-light text-[#52e1bf] pb-2 md:text-[1.6vw]'>FEATURED WEBINARS</h2>
        <h1 className='text-[5vw] font-bold text-white md:text-[3vw]'>Enhance Your Musical Journey</h1>
      </div>
      <div className='flex flex-wrap gap-10 pt-8 p-6'>
      <Cards title="Understanding Music Theory" desc="Learn the basics of playing guitar with our comprehensive beginner's course."/>
        <Cards title="The Art of Songwriting" desc="Enhance your singing with advanced vocal techniques for intermediate to advanced learners."/>
        <Cards title="Mastering Your Instruments" desc="Dive into music production with this introductory course on the basics of sound engineering and mixing."/>
        <Cards title="Music Production Essentials" desc="Create competing electronic music with our course designed for beginners to advanced users."/>
        <Cards title="Live Performance Techniques" desc="Master the fundamentals and discover the techniques of blues guitar to add soul and depth to your playing."/>
        <Cards title="Digital Music Marketing" desc="Learn essential guitar skills fast with our beginner crash course. Master chords, strumming, and start playing today."/>
      </div>
      <div className='flex justify-center items-center md:pt-10'>
      <Link className='px-2 md:px-4 py-[1vw] md:py-2 bg-white text-black rounded-xl hover:text-white hover:bg-black hover:border-white hover:border-[1px]' href="/course">View all Courses</Link>
      </div>
    </div>
  )
}

export default Featured