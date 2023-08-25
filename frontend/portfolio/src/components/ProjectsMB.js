import React, { useContext } from 'react'
import FadeUp from './FadeUp'
import { MyContext } from '../context/ContextProvider'

export default function ProjectsMB({ project }) {
    const { theme } = useContext(MyContext)
    return (
        <FadeUp
            text={
                <div class={`bg-${theme}-600 text-white rounded-lg overflow-hidden shadow-lg ring-2 ring-${theme}-600 w-10/12 mx-auto`} >
                    <div class="relative overflow-hidden">
                        <img class="w-full hover:scale-110 transition duration-300" src={project.img} alt={project.title} />
                    </div>
                    <div class="p-4">
                        <h3 class="text-2xl font-medium mb-2">{project.title}</h3>
                        <p class=" text-sm mb-4">{project.desc}</p>
                        <div class="flex items-center justify-between">
                            <a target='_blank' href={project.link} className='mx-auto'>
                                <button class={`bg-white self-center  hover:bg-slate-200 text-${theme}-700 font-bold py-2 px-4 rounded`}>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            }
        />
    )
}
