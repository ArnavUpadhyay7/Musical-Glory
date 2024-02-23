"use client"
import React from 'react'
import { motion } from "framer-motion"

const ReviewCard = (props) => {
  return (
    <div>
      <motion.div initial={{x: "-100%"}} animate={{x:"100%"}} transition={{ease: "linear", repeat:Infinity, duration: 8, delay: props.delay}} className='p-4 md:p-0 rounded-3xl md:px-12 md:mt-6 h-[40vh] md:h-80 w-[60vw] md:w-[30vw] bg-[#000000] text-white'>
        <motion.h1 className='text-[3.2vw] md:text-[1.2vw] font-semibold py-2 md:pt-20 md:pb-12'>{props.desc}</motion.h1>
        <motion.p className='text-[2.8vw] pt-16 md:pt-0 md:text-[1vw] font-light pb-2 md:pb-1'>{props.name}</motion.p>
        <motion.p className='text-[2.8vw] md:text-[1vw] font-light pb-8 md:pb-16'>{props.post}</motion.p>
      </motion.div>
    </div>
  )
}

export default ReviewCard
