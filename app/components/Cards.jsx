import React from 'react'

const Cards = (props) => {
  return (
    <div className='hover:scale-[1.1] hover:ease duration-500 h-60 w-[100vw] md:h-72 md:w-[30vw] rounded-3xl bg-black text-white flex flex-col justify-center items-center'>
      <h1 className='text-[5vw] md:text-[1.6vw] font-semibold py-2 md:py-4'>{props.title}</h1>
      <p className='text-[3.8vw] px-10 md:text-[1vw] font-light md:px-20 pb-8 md:pb-16'>{props.desc}</p>
      <button className='px-2 md:px-4 py-[1vw] md:py-2 bg-white text-black rounded-xl hover:text-white hover:bg-black hover:border-white hover:border-[1px]'>Learn more</button>
    </div>
  )
}

export default Cards
