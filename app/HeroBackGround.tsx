"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroBackGround = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 8, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.5, 0.1, 1.0],
      }}
      transition={{ duration: 3 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[rgb(46,46,46)] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border border-white opacity-20 rounded-full h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="" />
    </motion.div>
  )
}

export default HeroBackGround