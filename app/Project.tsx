import React from 'react'




type Props = {
   project : {
    code: string
    deploy : string
    description: string
    main : string
    subtitle: string
    title : string
    stack1 : string
    stack2 : string
    stack3 : string | null
   },
   length : number
}
  

const Project = ({project , length} : Props) => {
    const des = project.description.split("\n")
  return (
    <div>

    <div className="w-screen relative flex-shrink-0 snap-center flex flex-col lg:flex-row gap-8 space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <img
        src={project.main}
        alt={project.title}
        className="w-[250px] h-[150px] lg:w-[350px] lg:h-[250px]  rounded-xl"
      />
      <div className="flex justify-around items-start flex-col gap-4">
      <div className="text-xl font-semibold mb-8 text-left w-full">프로젝트 <span className="text-purple-800 dark:text-yellow-400">{length + 1}</span>/ 3</div>
        <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
        <h2 className="text-sm mb-1">{project.subtitle}</h2>
        <ul className="text-sm text-gray-100 dark:text-black ">{des.map((d) => (
          <li key={d} className="mb-1">{d}</li>
        ))}</ul>
        <div className="flex gap-4">
            <img className="w-8 h-8 rounded-full" src={project.stack1} alt="" />
            <img className="w-8 h-8 rounded-full" src={project.stack2} alt="" />
            <img className="w-8 h-8 rounded-full" src={project.stack3} alt="" />

        </div>
        <div className="flex gap-4 justify-end items-end w-full ">
          <button className="bg-purple-900 text-white px-5 py-2.5 mr-2 mb-2 font-medium text-sm rounded-lg hover:bg-purple-900/70">
            <a href={project.deploy}>배포</a>
          </button>
          <button className="bg-white text-purple-900 px-5 py-2.5 mr-2 mb-2 font-medium text-sm rounded-lg hover:bg-white/70">
            <a href={project.code}>코드</a>
          </button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Project