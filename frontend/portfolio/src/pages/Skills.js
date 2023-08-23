import React, { useContext } from 'react'
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaServer, FaPython, FaGithub } from 'react-icons/fa'
import { BiLogoTailwindCss, BiLogoMongodb, BiLogoCPlusPlus } from 'react-icons/bi'
import { TbBrandVscode } from 'react-icons/tb'

import FadeUp from '../components/FadeUp'

import Skill from '../components/Skill'

import { MyContext } from '../context/ContextProvider'

export default function Skills() {

    const { theme } = useContext(MyContext)
    return (
        <div className={`mb-44 relative pb-28 bg-${theme}-700 text-white `}>

            <div className='uppercase mt-64 pt-20 text-center text-xl text-white font-mono font-light'>
                <FadeUp text={'skills'} />
            </div>
            <div className='text-white  mb-24 text-6xl md:text-6xl text-center font-bold'>

                <FadeUp delay={0.3} text={'Dive into my exprience'} />
            </div>

            <div className="skills  -z-0 flex flex-row items-center gap-3 gap-x-5 justify-center flex-wrap w-full md:w-2/3 mx-auto ">

                <Skill icon={<FaReact />} text={'React'} />
                <Skill icon={<BiLogoTailwindCss />} text={'Tailwind'} />
                <Skill icon={<FaCss3 />} text={'CSS3'} />
                <Skill icon={<FaHtml5 />} text={'HTML5'} />
                <Skill icon={<FaNodeJs />} text={'NodeJS'} />
                <Skill icon={<FaServer />} text={'Servers'} />
                <Skill icon={<FaPython />} text={'Python'} />
                <Skill icon={<FaGithub />} text={'Github'} />
                <Skill icon={<BiLogoMongodb />} text={'MongoDB'} s={'text-2xl'} mdS={'text-3xl'} />
                <Skill icon={<BiLogoCPlusPlus />} text={'C++'} />
                <Skill icon={<TbBrandVscode />} text={'VScode'} />
                {/* <Skill icon={<FaGit />} text={'Git'} /> */}

            </div>

        </div>
    )
}
