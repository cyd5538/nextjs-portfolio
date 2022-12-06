import React from 'react'
import About from './About'
import Contact from './Contact';
import Header from './Header'
import Hero from './Hero'
import Practice from './Projects';
import Projects from './Project';
import Skills from './Skills';

const page = () => {
  return (
    <div className='text-white dark:bg-white dark:text-black h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-thumb-purple-800 scrollbar-track-gray-100'>
      <Header />
      <section id="home" className='snap-start'>
        <Hero />
      </section>
      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      <section id="projects" className='snap-start'>
        <Practice />
      </section>
      <section id="contact" className='snap-start'>
        <Contact />
      </section>
    </div>
  )
}

export default page