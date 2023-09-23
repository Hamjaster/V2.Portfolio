import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'

export default function Project({ project }) {
    const { theme } = useContext(MyContext)
    return (
        <>

            <div className={`border-2 border-${theme}-600 h-72 flex flex-row`}>

                <div style={{
                    background: `url(${project.img}) center/cover`
                }} className="w-2/5">
                </div>


                <div className={`info font-[Roboto] w-3/5 mx-auto relative z-50 bg-${theme}-600 text-white font-semibold text-4xl items-start justify-between flex flex-col px-4 py-7 space-y-3`}>

                    <div className='text-start space-y-3'>
                        <span>{project.title}</span>
                        <div className='font-light text-lg '>{project.desc}</div>
                    </div>

                    <div className="text-start w-full">
                        <a target='_' className={`text-lg w-36 border hover:bg-slate-200 border-slate-50 text-${theme}-700 rounded-xl bg-white px-4 py-2`} href={project.link}>View</a>
                    </div>

                </div>

            </div>

        </>
    )
}
