"use client";
import React from 'react'
import HeroBackGround from './HeroBackGround'
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi My Name's CYJ", "FrontEnd Developer"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className='h-screen flex flex-col justify-center items-center text-center overflow-hidden'>
        <HeroBackGround />
        <img
            className="relative rounded-full h-40 w-40 mx-auto object-cover"
            src="https://avatars.githubusercontent.com/u/91642972?v=4"
            alt=""
        />
        <div className="z-20 mt-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            <span className="mr-3">
                {text} <Cursor cursorColor="white" />
            </span>
          </h1>
          <div className="pt-5">
            <a href="#about">
                <button className="z-30 px-6 py-2 border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#fff]/70">About</button>
            </a>
            <a href='#skills'>
                <button className="z-30 px-6 py-2 border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#fff]/70">Skills</button>
            </a>
            <a href='#projects'>
                <button className="z-30 px-6 py-2 border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#fff]/70">Projects</button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero