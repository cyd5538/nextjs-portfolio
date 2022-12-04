"use client"
import React, {useRef} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcCallback } from "react-icons/fc";
import { CiMail } from "react-icons/ci";

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { register, handleSubmit } = useForm<Inputs>(); 
  const onSubmit: SubmitHandler<Inputs> = (e) => {
    emailjs
    .sendForm(
      'service_9gnescd',
      'template_pt4o6gh',
      form.current, 
      process.env.NEXT_PUBLIC_EMAIL_API_KEY
    )
    .then(
      (result) => {
        toast("이메일을 보냈습니다.");
      },
      (error) => {
        toast(error.text);
      }
    )
  };



  return (
    <>
     <ToastContainer />    
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <FcCallback />
            <p className="text-lg">010-1111-1111</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <CiMail />
            <p className="text-lg">cyd9911@gmail.com</p>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register('user_name')}
              placeholder="Name"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40"
              type="text"
            />
            <input
              {...register('user_email')}
              placeholder="Email"
    
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40"
              type="email"
            />
          </div>
          <textarea
            rows={5}
            {...register('message')}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            이메일 보내기
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
