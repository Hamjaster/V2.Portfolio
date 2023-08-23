import React, { useContext } from 'react'
import image from '../images/image.jpg'
import Reveal from '../components/Reveal'
import FadeUp from '../components/FadeUp'
import { MyContext } from '../context/ContextProvider';

export default function About() {
  const { theme } = useContext(MyContext)
  const i = 0.2;
  return (
    <div className={`about-page relative z-40 md:h-[750px]  text-${theme}-700 flex flex-col md:flex-row  space-y-5 mt-52 mb-11`}>

      <div className="text pl-10 pt-6 space-y-6  md:w-1/2  ">


        <div className={`uppercase text-xl text-${theme}-700 font-mono font-light`}>
          <FadeUp delay={i} text='about me' />
        </div>
        <div className="text-5xl w-full md:text-6xl font-bold capitalize">
          <FadeUp delay={i} text="Let me introduce myself" />
        </div>
        <p className='text-xl 2xl:text-3xl  w-11/12 md:w-11/12 leading-relaxed font-sans '>
          <FadeUp delay={i + 0.1} text="👋 Meet the Digital Dynamo: Hamza Shah! 🚀" />
          <br />
          <FadeUp delay={i + 0.2} text="👨‍💻 A 17-year-old with a passion for Full Stack web development, Hamza is not your average student. When he's not conquering textbooks, he's conquering the web." />

          <br />
          <FadeUp delay={i + 0.2} text="🌐 Armed with React, HTML, and CSS, he spins webs of interactivity that make users' jaws drop. But that's just the tip of the iceberg. He manages
          Backend, Handles API's and makes web-apps. He's a Python maestro, bending
          the language to automate tasks and scrape data." />


        </p>
      </div>
      <div className="image overflow-hidden my-auto  h-[100vh] md:h-full md:w-1/2">
        <Reveal theme={theme} image={image} />
      </div>

    </div>
  )
}
