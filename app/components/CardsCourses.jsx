import React from 'react'

const CardsCourses = (props) => {
  return (
    <div>
      <div className='md:h-[30vw] h-[55vh] rounded-3xl md:w-[36vw] bg-black text-white hover:scale-[0.9] ease duration-500'>
            <h1 className='md:px-8 md:pt-8 p-4 md:p-0 text-[5.5vw] md:text-[2vw] font-semibold'>{props.title}</h1>
            <p className='md:px-8 md:pt-2 px-4 md:text-[1vw] font-light text-[#bcbaba]'>{props.desc}</p>
            <img className='pt-4 object-contain h-[60vw] md:h-[20vw] w-[80vw] md:w-[35vw]' src={props.imgSrc} />
      </div>
      <div className='flex justify-center'>
        <button className='rounded-3xl mt-4 md:mt-6 bg-[blue] px-4 md:px-4 py-2 md:py-2 hover:bg-[#4c85ff]'>
            <h2 className= 'text-white md:text-[1.1vw]'>Learn More</h2>
        </button>
      </div>
    </div>
  )
}

export default CardsCourses
