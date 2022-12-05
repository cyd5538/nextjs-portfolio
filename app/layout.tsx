import '../styles/globals.css'
import React from 'react'
import About from './About'
import Contact from './Contact';
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects';
import Skills from './Skills';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-[rgb(20,20,21)] text-white dark:bg-white dark:text-black h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-thumb-purple-800 scrollbar-track-gray-100'>
        {children}
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
      <section id="contact" className='snap-start'>
        <Contact />
      </section>
      </body>
    </html>
  )
}
