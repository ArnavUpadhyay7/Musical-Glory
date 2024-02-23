import React from 'react'

const Instructors = () => {
  return (
    <div className='h-[80vh] bg-[#141414] pt-24 md:pt-36'>
      <div className='flex justify-center'>
        <h1 className='text-[8vw] font-bold text-white md:text-[5vw] md:pb-4'>Meet Our Instructors</h1>
        <p className='absolute md:left-[28vw] text-[2.3vw] font-extralight pt-12 md:pt-36 text-white pb-2 md:text-[1.2vw]'>Discover the talented professionals who will guide your musical journey.</p>
      </div>
      <div className='flex justify-center pt-28'>
        <img className='h-16 w-16 md:h-24 md:w-24 rounded-full border-[1px] border-black absolute left-[20vw] md:left-[40vw] object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG9ubHklMjBmYWNlfGVufDB8fDB8fHww"/>
        <img className='h-16 w-16 md:h-24 md:w-24 rounded-full border-[1px] border-black absolute left-[32vw] md:left-[45vw] object-cover' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG9ubHklMjBmYWNlfGVufDB8fDB8fHww"/>
        <img className='h-16 w-16 md:h-24 md:w-24 rounded-full border-[1px] border-black absolute left-[44vw] md:left-[50vw] object-cover z-9' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"/>
        <img className='h-16 w-16 md:h-24 md:w-24 rounded-full border-[1px] border-black absolute left-[56vw] md:left-[54vw] object-cover z-20 ' src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2Zlc3Npb25hbCUyMG9ubHklMjBmYWNlfGVufDB8fDB8fHww"/>
      </div>
    </div>
  )
}

export default Instructors
