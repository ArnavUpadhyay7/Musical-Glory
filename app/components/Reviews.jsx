import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <div className='h-[60vh] md:h-[100vh] bg-[#141414] text-white'>
        <div className='flex justify-center items-center'>
            <h1 className='text-[5vw] md:text-[3vw] font-bold mb-12 md:mb-0 md:mt-28'>Hear Our Harmony: Voices Of Success</h1>
        </div>
        <div className='flex overflow-hidden h-[80vw] md:h-[25vw] md:mt-28 gap-8 md:gap-20'>
          <ReviewCard desc="This school offered me the tools and confidence to take my signing to the next level. I'm endlessly grateful for the personalized coaching." name="Michael Chen" post="Vocal Student"/>
          <ReviewCard desc="This school offered me the tools and confidence to take my signing to the next level. I'm endlessly grateful for the personalized coaching." name="Michael Chen" post="Vocal Student"/>
          <ReviewCard desc="This school offered me the tools and confidence to take my signing to the next level. I'm endlessly grateful for the personalized coaching." name="Michael Chen" post="Vocal Student"/>
          <ReviewCard desc="This school offered me the tools and confidence to take my signing to the next level. I'm endlessly grateful for the personalized coaching." name="Michael Chen" post="Vocal Student"/>
        </div>
    </div>
  )
}

export default Reviews
