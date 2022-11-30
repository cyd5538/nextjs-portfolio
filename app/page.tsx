import React from 'react'
import About from './About'
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects';
import Skills from './Skills';

const page = () => {
  return (
    <div className='text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-thumb-purple-800 scrollbar-track-gray-100'>
      <Header />
      <section className='snap-start'>
        <Hero />
      </section>
      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="skills" className='snap-start'>
        {/* @ts-ignore */}
        <Skills />
      </section>
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
    </div>
  )
}

export default page