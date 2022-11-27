import React from 'react'
import {motion} from 'framer-motion';

type Props = {
  title : string,
  image : string
}

const Skill = ({title, image} : Props) => {
  return (
    <div className='group relative flex cursor-pointer object-cover'>
    <motion.img
    initial={{
        opacity : 0
    }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    src={`http://localhost:1337${image}`}
    className='rounded-full border border-gray-500  object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
    />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-sm font-bold text-black opacity-100'>{title}</p>
        </div>
    </div>
</div>
  )
}

export default Skill