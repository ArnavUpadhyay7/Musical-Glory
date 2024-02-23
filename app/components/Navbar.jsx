"use client"
import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='flex justify-center font-[Rejouice Headline] bg-[#141414]'>
        <div className='h-[12vw] w-[90vw] flex gap-16 justify-center items-center text-white rounded-full mt-12 bg-black md:h-[3.5vw] md:w-[40vw] md:gap-20'>
            <Link className='text-[1.6vh] hover:text-[yellow] hover:cursor-pointer md:text-[2.2vh]' href="/">Home</Link>
            <Link className='text-[1.6vh] hover:text-[yellow] hover:cursor-pointer md:text-[2.2vh]' href="/course">Our Courses</Link>
            <Link className='text-[1.6vh] hover:text-[yellow] hover:cursor-pointer md:text-[2.2vh]' href="/contact">Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar
