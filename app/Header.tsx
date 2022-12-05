"use client";
import React, { useState,useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';
import { CiDark } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";
type Props = {};

const Header = ({}: Props) => {
  const [theme, setTheme] = useState<string>("light");
  const element = document.documentElement;
    // 다크모드
    useEffect(() => {
      switch (theme) {
        case "dark":
          element.classList.add("dark");
          break;
        case "light":
          element.classList.remove("dark");
          break;
        default:
          break;
      }
    }, [theme]);

  return (
    <header className="sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 3,
          rotate: 360,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center"
      >
        {/* 소셜 아이콘 */}
        <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
          <Link href="https://velog.io/@cyd5538">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAM1BMVEUgyZf////j+PI80KSP5Mud59Jz3b7x+/ir69guzJ6C4MTH8eVK06q57t5Y1rHV9exm2bcinjlYAAAFFklEQVR4nO2d65ajMAiA02i9tbV9/6ddraPNBZLoTAXO8v3ddQ4YIJBANZeQthteVW/4UY1DZyNxTSB9PVLLmeYe6mB88Tm++ZDGYgqIEH+mBhWwd2q5yqlsrEAn5fW/6R+hAjW1SHupfQXEyb9psCjwoJbmCN1HASvK/ld6uylQUctyjPuqgEAHWKgXBSy1HIfp27cCDbUcx6lnBeQuwHsJzKWjluI31JMCglKgmPFiJFvQRGtEW9C0HZuBWoTfMRjmJWSOlxGaRqwIF3/aCagFUBRFURRFURRFURRFURTlP6dqrjd7ubS3a+mBa9V0z/myur11r6+KViDK0LVOD09J50s/3Ny+JVus9p/Tj9eok+2Z06Cv2/AZS7IK1XCLJJm5ph8b4+Y9go4B6NVvJC9+auShM6+7euTVFyzBp9tqn9p/yFjfUBl+aHH5n/hTt1OkvyZf/QoaVBLyn7MEJdJPYDHlmnzqjFvrQgUQh+y75FO45Z2uAPouGzx0TZxw61iowBP9A1UqApzQelKoQMoYsH3gcooXFyqQ7CR8oYHshPaxUgWSolSYI5ywAnUELEo6HcI0IOk9gbemTDcwogFJ/xgc2nOtYHfQD0iaNwbYGnKyQKZ3xkYW84IVyFlDDyzBKdlcRAUrkI2IQFpE1AUNR/VMVTb3TEYQNcDBuUHWHICVI2rAglPkvEPu1/lLNKAC+bGE6AmqHtA7rED2nGS/yl+ihxXIvs/wATwF/zZwWpCrDyO96bqI4YOS3AuNwihdF+uxMBTu4FQxyBwNQ2EyRHhEfSyZCPY/0kmGQ8lE8BDpMNKRmibwYUvaiH6kpgnKCNpRkiM1TbBqtJMAB2qawPGJZ3mQZCLll8GiUY9i7A9DfvpBPpAKJxOJvdWPQbQhaGZ3MuHHLfphsL3JhO/CDMYJ99Y0/gIwmAjeWdNUntPTFTIO+2oaPxEl9+AZOJnA3q2nLo95VDiZQMKQ5/L0IfQNkkzAwnkLwMCDZ/bUNN4C8DAgsyeZ8O42Wh4GZPbUNF4IIk+CNoprGm8PYLAHrxTXNJ6mbAwIPO2fiWoaz9v5GFB5TeMepjAyIIMlE2EY8kIoIwMyhTWNF0I5GZAprGnc/0R4FgpSUtO4ZQOTHOhDQU3TuwbEJAdygBVwaxrXgNjkQB+yNY2bsbIzIJOvabwIxPE3XXI1jRtnmUXQhUxN4yahvLbglXRN4/4rnyLAB65pFmthHkEX4KaPpaZxPZxhBF2Ak4m3vbsOzve3KfGaxnMPpg5g0GTi7jsAywi6gNY0IhxgBqlpPAfga0AGbfqQ4QAz6fEM5g4wg9Q0QhzAoMmEEAeYyQw4sZc/PWPF4C4yS3JGKdvKywAkmVgcgG0K5IDUNDNcawCfRBjiWgMEoGGI+Q62gQ25sbjLLgFJJvjvYCtIMiHnx63hmkaKAxikpuGewnkANY2IHWwjrmlk7GAb2wGitbdHd62bRpb85j6JPFbChFYURVEURVEURVEURVEUZS+iTo4hhJ9iVob6J6t/ySj/w5qirn9iOkPz23p/hjUs++CLuV+MpCvQmG5SoJW8E9j5I+OCl6B5fyVd8BLYtwJyl2C+0jWyWjE83t1VRl4vwMrSEm/kdWOsLE0NRlw/zMpPT8M6PyhOg7UnYxuAfIjyg89XAD4TnHLa2qYU6NOV5I6gSjGj3p0J9GZorYTm1OAbPMEQsO2Yb2pj+AmheIrZdsPI0R366uV/8WnhH82FHo8XmKEAAAAAAElFTkSuQmCC"
              width="27"
              height="27"
              className="rounded-full"
            />
          </Link>
        </div>

        <SocialIcon
          url="https://github.com/cyd5538"
          fgColor="gray"
          bgColor="transparent"
        />

        <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
          <Link href="https://open.kakao.com/o/sM4YrINe">
            <img
              src="data:image/png;base64,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"
              width="27"
              height="27"
              className="rounded-full"
            />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 3,
          rotate: 360,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center text-gray-300"
      >

          {theme === "dark" ? <div className='w-8 h-8 mr-2 bg-black rounded-full flex justify-center items-center text-center text-xl font-bold text-yellow-300' onClick={() => {
            setTheme('light')
            localStorage.setItem("theme", JSON.stringify("light"));
          }}><CiDark /></div> : <div className='w-8 h-8 mr-2 bg-white rounded-full flex justify-center items-center text-center text-xl text-yellow-800 font-bold' onClick={() => {
            setTheme('dark')
            localStorage.setItem("theme", JSON.stringify("dark"));
          }}><BsBrightnessHigh /></div>}
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 text-center">
            CYJ Portfolio
          </p>

      </motion.div>
    </header>
  );
};

export default Header;
