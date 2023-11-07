import React, { useContext } from 'react'
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaServer, FaPython, FaGithub } from 'react-icons/fa'
import { BiLogoTailwindCss, BiLogoMongodb, BiLogoCPlusPlus, BiLogoRedux, BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi'
import { TbBrandVscode, TbBrandNextjs } from 'react-icons/tb'

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
            <div className='text-white text-4xl sm:text-4xl md:text-6xl  mb-14 sm:mb-24  text-center font-bold'>

                <FadeUp delay={0.3} text={'Dive into my exprience'} />
            </div>

            <div className="skills  -z-0 flex flex-row items-center gap-3 gap-x-5 justify-center flex-wrap w-full md:w-2/3 mx-auto ">

                <Skill icon={<FaReact />} text={'React'} />
                <Skill icon={<BiLogoTailwindCss />} text={'Tailwind'} />
                <Skill icon={<FaCss3 />} text={'CSS3'} />

                <Skill icon={<FaNodeJs />} text={'NodeJS'} />
                <Skill icon={<FaServer />} text={'Servers'} iconSize={'text-2xl'} />
                <Skill icon={<FaPython />} text={'Python'} />
                <Skill icon={<FaGithub />} text={'Github'} />
                <Skill icon={<BiLogoMongodb />} text={'MongoDB'} s={'text-2xl'} mdS={'text-3xl'} />
                <Skill icon={<BiLogoCPlusPlus />} text={'C++'} />
                <Skill icon={<TbBrandVscode />} text={'VScode'} />
                <Skill icon={<BiLogoRedux />} text={'Redux'} />
                <Skill icon={<TbBrandNextjs />} text={'Next'} />
                <Skill icon={<BiLogoTypescript />} text={'TS'} />
                <Skill icon={<BiLogoPostgresql />} text={'SQL'} />
                {/* <Skill icon={<img src={x} />} text={'Git'} /> */}

            </div>

        </div>
    )
}
