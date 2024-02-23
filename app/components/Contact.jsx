import React from 'react'

const Contact = () => {
  return (
    <div className='text-white'>
        <div className='flex justify-center'>
            <h1 className='md:text-[6vw] text-[9vw] md:py-0 py-8 font-semibold md:pt-4'>Contact Us</h1>
        </div>
        <div className='flex justify-center'>
            <p className='md:text-[1.2vw] px-3 md:px-96 text-[#9d9d9d]'>We're here to help with any questions about our courses programs, or events. Reach out and let us know how we can assist you in your musical journey.</p>
        </div>
        <div className='flex justify-center'>
            <input className='md:mt-8 mt-8 w-[80vw] h-[15vw] bg-black md:w-[40vw] md:h-[4vw] rounded-2xl' type="text" placeholder='Your email address'/>
        </div>
        <div className='flex justify-center'>
            <input className='mt-4 md:mt-6 bg-black w-[80vw] h-[40vw] md:w-[40vw] md:h-[16vw] rounded-2xl' type="text" placeholder='Your email address'/>
        </div>
        <div className='flex justify-center'>
            <button className='rounded-3xl mt-4 md:mt-6 bg-[blue] px-4 md:px-4 py-2 md:py-2 hover:bg-[#4c85ff]'>
                <h2 className= 'text-white md:text-[1.1vw]'>Send Message</h2>
            </button>
        </div>
    </div>
  )
}

export default Contact
