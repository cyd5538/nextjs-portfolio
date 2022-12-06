"use client";
import React from 'react'
import ProjectData from '../data/ProjectData';
import Pratices from './Project';

const Projects = () => {
 
  return (
    <div
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray text-2xl'>
            Products
        </h3>
        <div className='carousel relative w-full flex overflow-x-scroll scrollbar scrollbar-thumb-purple-800 scrollbar-track-gray-100 overflow-y-hidden 	snap-x z-20'>
            {ProjectData.map((project, i) => (
                <Pratices 
                    key={project.title}
                    project={project}
                    length={i}
                />
            ))}
        </div>
        <div className='w-full absolute top-[30%] dark:bg-purple-800/80 bg-purple-700/20 left-0 h-[500px] -skew-y-12'>
        </div>
    </div>
  )
}

export default Projects