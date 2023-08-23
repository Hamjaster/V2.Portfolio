import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'

export default function Project({ project }) {
    const { theme } = useContext(MyContext)
    return (
        <>

            <div className={`card group border-2 border-${theme}-600 overflow-hidden hover:after:opacity-100 after:bg-${theme}-700 after:bg-opacity-75 after:transition-all after:duration-500`}>
                <img className='w-full group-hover:scale-110 transition-all duration-500 h-full object-cover ' src={project.img} alt="" />

                <div className="info font-[Roboto] w-11/12 mx-auto relative z-50 opacity-0 group-hover:translate-y-[-272px] text-white font-semibold text-4xl group-hover:opacity-100 transition-all duration-500">
                    <span>{project.title}</span>
                    <div className='font-light text-sm mt-4 mb-4'>{project.desc}</div>
                    <a target='_' className={`text-lg border hover:bg-slate-200 border-slate-50 mt-6 text-${theme}-700 rounded-xl bg-white px-4 py-2`} href={project.link}>View</a>
                </div>

            </div>
        </>
    )
}
