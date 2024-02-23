import React from 'react'

const Footer = () => {
  return (
    <div className='h-[80vh] md:h-[60vh] flex flex-col justify-between bg-[#000000] text-[grey]'>
      <div className='md:flex py-6 md:px-32 md:py-16'>
        <div className='md:flex gap-20 px-4 md:px-0'>
            <div className='md:w-[20vw]'>
                <h1 className='md:text-[1.6vw] text-white font-bold'>About Us</h1>
                <p className='pt-6 pb-10 md:pb-0 md:pt-10'>Music School is a premier institution dedicated to teach music at it's peak. We teach students from all around the Globe and we aim to create a vibrant community of musicians.</p>
            </div>
            <div className='h-0 invisible md:visible md:w-[20vw]'>
                <h1 className='md:text-[1.6vw] text-white font-bold'>Quick Links</h1>
                <p className='pt-10 hover:text-white cursor-pointer inline-block'>Home</p>
                <p className='pt-2 hover:text-white cursor-pointer'>About</p>
                <p className='pt-2 hover:text-white cursor-pointer inline-block'>Courses</p>
                <p className='pt-2 hover:text-white cursor-pointer'>Contact</p>
            </div>
        </div>
        <div className='px-4 py-4 md:px-0 md:py-0 flex gap-10 md:flex md:gap-0'>
            <div className='md:w-[20vw] gap-20'>
                <h1 className='md:text-[1.6vw] text-white font-bold'>Follow Us</h1>
                <p className='pt-4 md:pt-10 hover:text-white cursor-pointer inline-block'>Facebook</p>
                <p className='pt-2 hover:text-white cursor-pointer'>Twitter</p>
                <p className='pt-2 hover:text-white cursor-pointer inline-block'>Instagram</p>
            </div>
            <div className='md:w-[20vw]'>
                <h1 className='md:text-[1.6vw] text-white font-bold'>Contact Us</h1>
                <p className='pt-4 md:pt-10'>New Delhi, India</p>
                <p className='pt-2'>Delhi 10001</p>
                <p className='pt-2'>Email: info@musicschool.com</p>
                <p className='pt-2'>Phone: (123) 456-7890</p>
            </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='pb-10 md:pb-20'>@2024 Music School. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
