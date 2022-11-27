"use client";
import React, {useEffect} from 'react'
import {motion} from 'framer-motion';
import Skill from './Skill';
import {use} from 'react';

type Stack = {
  id : number,
  attributes : {
    stack : string,
    image : {
      data : {
        attributes : {
          url : string
        }
      }
    }
  }
}

const fetcghTodos = async () => {
  const res = await fetch("http://localhost:1337/api/stacks/?populate=*", {cache: 'force-cache'})
  const stacks = await res.json();
  return stacks;
}

const Skills = () => {
const stacks = use(fetcghTodos())

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='justify-center xl:space-y-0 mx-auto items-center flex relative flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[15px] font-semibold text-gray-200 text-2xl'>Skills</h3>
        <div className='grid grid-cols-4 gap-5 '>
            {stacks?.data?.map((stack:Stack) =>(
              <Skill 
              key={stack.id} 
              title={stack.attributes.stack}
              image={stack.attributes.image.data.attributes.url}
              />
            ))}
        </div>
    </motion.div>
  )
}

export default Skills






