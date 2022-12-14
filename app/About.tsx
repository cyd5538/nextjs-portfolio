"use client";
import React from 'react'
import {motion} from 'framer-motion';
import AboutImage from './AboutImage';

type Props = {}
// className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
const About = ({} : Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray text-2xl'>About</h3>
      <AboutImage />
      <motion.div
        initial={{
          x: 200,
          opacity : 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{x:0, opacity:1}}
        viewport={{once: true}}
        className='space-y-10 px-0 md:px-10'
      >
        <h4 className='text-2xl sm:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pri</p>
      </motion.div>
    </motion.div>
  )
}

export default About