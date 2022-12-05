import { link } from "fs/promises";
import React from "react";


type Stack = {
  attributes : {
    url : string
  }
}
type Props = {
  code : string,
  deploy : string
  description : string
  main: string
  title : string
  stack : Stack[]
  length: number
  sum: number
  subtitle : string
}

const Project = ({code, deploy, main, title , stack, length, sum, subtitle, description} : Props) => {
  const des = description.split("\n")
  return (
    <div>

      <div className="w-screen relative flex-shrink-0 snap-center flex flex-col lg:flex-row gap-8 space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <img
          src={`http://localhost:1337${main}`}
          alt={title}
          className="w-[250px] h-[150px] lg:w-[350px] lg:h-[250px]  rounded-xl"
        />
        <div className="flex justify-around items-start flex-col gap-4">
        <div className="text-xl font-semibold mb-8 text-left w-full">프로젝트 <span className="text-purple-800 dark:text-yellow-400">{length + 1}</span>/ {sum}</div>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <h2 className="text-sm mb-1">{subtitle}</h2>
          <ul className="text-sm text-gray-100 dark:text-black ">{des?.map((d) => (
            <li key={d} className="mb-1">{d}</li>
          ))}</ul>
          <div className="flex gap-4">
            {stack.map((sta) => (
                <img key={sta.attributes.url} src={`http://localhost:1337${sta.attributes.url}`} className="w-8 h-8 rounded-full" alt="" />
            ))}
          </div>
          <div className="flex gap-4 justify-end items-end w-full ">
            <button className="bg-purple-900 text-white px-5 py-2.5 mr-2 mb-2 font-medium text-sm rounded-lg hover:bg-purple-900/70">
              <a href={deploy}>배포</a>
            </button>
            <button className="bg-white text-purple-900 px-5 py-2.5 mr-2 mb-2 font-medium text-sm rounded-lg hover:bg-white/70">
              <a href={code}>코드</a>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Project;
