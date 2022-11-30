"use client";
import React from 'react'
import Project from './Project'
import {use} from 'react';

type Project = {
  id : number,
  attributes : {
    code : string,
    deploy: string,
    description: string,
    title: string,
    main : {
      data : {
        attributes : {
          url : string
        }
      }
    }
    stack : {
      data : []
    }
  }
}

const fetcghProjects = async () => {
    const res = await fetch("http://localhost:1337/api/projects/?populate=*", {cache: 'force-cache'})
    const Pro = await res.json();
    return Pro;
  }
  
  const ProjectGet = fetcghProjects()
  
const Projects = () => {
  const pro = use(ProjectGet)

  return (
    <div
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-16 uppercase tracking-[15px] font-semibold text-gray-200 text-2xl'>
            Products
        </h3>
        <div className='carousel relative w-full flex overflow-x-scroll scrollbar scrollbar-thumb-purple-800 scrollbar-track-gray-100 overflow-y-hidden snap-mandatory	snap-x z-20'>
            {pro?.data?.map((project:Project) =>(
              <Project 
                key={project.id} 
                code={project.attributes.code}
                deploy={project.attributes.deploy}
                description={project.attributes.description}
                main={project.attributes.main.data.attributes.url}
                title={project.attributes.title}
                stack={project.attributes.stack.data}
              />
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F0F]/20 left-0 h-[500px] -skew-y-12'>
        </div>
    </div>
  )
}

export default Projects