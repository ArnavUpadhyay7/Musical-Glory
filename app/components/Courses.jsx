import React from 'react'
import CardsCourses from './CardsCourses'

const Courses = () => {
  return (
    <div className='bg-[#141414]'>

        <div className='py-8 md:pt-8 md:pb-0'>
            <h1 className='flex justify-center text-[10vw] md:text-[5vw] font-semibold text-white'>All Courses (10)</h1>
        </div>

        <div className='md:pt-10 md:flex md:gap-12 md:justify-center md:px-0 px-6'>
            <div>
                <CardsCourses title="Guitar Fundamentals" desc="Learn the basics of playing guitar with our comprehensive beginner's course." imgSrc="https://images.unsplash.com/photo-1706633774362-84d60bbaf463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1aXRhciUyMHBsYXlpbmclMjBtYW4lMjBubyUyMGZhY2V8ZW58MHx8MHx8fDA%3D"/>
            </div>
            <div className='my-8 md:my-0'>
                <CardsCourses title="Piano for Beginners" desc="Start your journey with foundational piano skills taught by expert instructors." imgSrc="https://media.istockphoto.com/id/176997338/photo/piano-pianist-concert-playing.webp?b=1&s=170667a&w=0&k=20&c=y4mEJP2czt_6jl5qqtlRCxt7h1M109Kr8x_mHUbl7iM="/>  
            </div>
        </div>

        <div className='md:pt-6 md:flex md:gap-12 md:justify-center md:px-0 px-6'>
            <div>
                <CardsCourses title="Advanced Vocal Techniques" desc="Enhance your singing with advanced vocal techniques for intermediate to advanced learners." imgSrc="https://images.unsplash.com/photo-1558372083-43eff562cce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"/>
            </div>
            <div className='my-8 md:my-0'>
                <CardsCourses title="Drumming Mastery" desc="Master the drums with our comprehensive course covering all skill levels." imgSrc="https://media.istockphoto.com/id/468161991/photo/drums.webp?b=1&s=170667a&w=0&k=20&c=33W80uyd8ALKN-lIniasrhiCPa3vMCbU7chBX3CQVL8="/>  
            </div>
        </div>

        <div className='md:pt-6 pb-4 md:pb-10 md:flex md:gap-12 md:justify-center md:px-0 px-6'>
            <div>
                <CardsCourses title="Guitar Fundamentals" desc="Learn the basics of playing guitar with our comprehensive beginner's course." imgSrc="https://images.unsplash.com/photo-1706633774362-84d60bbaf463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1aXRhciUyMHBsYXlpbmclMjBtYW4lMjBubyUyMGZhY2V8ZW58MHx8MHx8fDA%3D"/>
            </div>
            <div className='my-8 md:my-0'>
                <CardsCourses title="Piano for Beginners" desc="Start your journey with foundational piano skills taught by expert instructors." imgSrc="https://media.istockphoto.com/id/176997338/photo/piano-pianist-concert-playing.webp?b=1&s=170667a&w=0&k=20&c=y4mEJP2czt_6jl5qqtlRCxt7h1M109Kr8x_mHUbl7iM="/>  
            </div>
        </div>
        
        
        
    </div>
  )
}

export default Courses
