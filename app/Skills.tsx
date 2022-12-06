"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SkillData from "../data/SkillData";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="justify-center xl:space-y-0 mx-auto items-center flex relative flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5 ">
        {SkillData?.map((skill) => (
          <div key={skill.text} className="group relative flex cursor-pointer object-cover">
            <motion.img
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              src={skill.image.src}
              className="rounded-full border border-gray-500  object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-28 xl:h-28 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  {skill.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
