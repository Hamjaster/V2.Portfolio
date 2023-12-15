import React, { useContext, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/pagination';
import FadeUp from '../components/FadeUp';
import axios from 'axios'
import Project from '../components/Project';
import ProjectsMB from '../components/ProjectsMB';
import { MyContext } from '../context/ContextProvider';
export default function Projects() {

    const { theme } = useContext(MyContext)
    const [projectsArr, setprojectsArr] = useState([])
    const [loading, setLoading] = useState(false)

    const getProjects = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('https://v2-portfolio-cxfebf5bs-hamjaster.vercel.app/projects')

            const filteredData = data.filter((project) => {
                return !project.remove;
            })
            setprojectsArr(filteredData)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {

        getProjects()

    }, [])

    useEffect(() => {
        console.log(projectsArr, 'projectsArr');
    }, [projectsArr])


    return (
        <div className='projects relative z-40 mb-56 text-center'>
            <div className={`uppercase text-xl mb-4 text-${theme}-700 font-mono font-light`}>
                <FadeUp delay={0.1} text='about me' />
            </div>
            <div className={`capitalize text-4xl sm:text-4xl md:text-6xl w-11/12 text-${theme}-700 font-bold`}>
                <FadeUp delay={0.1} text='Check out my work' />
            </div>

            {/* Projects Section */}
            <div className='mx-12 mt-24 flex flex-col-reverse overflow-hidden space-y-4'>

                {loading ?
                    (
                        <div>Loading</div>
                    )
                    : (
                        <>

                            {/* Displaying un-featured products */}
                            {projectsArr
                                .filter((project) => {
                                    return !project.featured
                                })
                                .map((project) => {
                                    return <FadeUp delay={0.1} text={<Project project={project} />} />
                                })
                            }

                            {/* Featured Produce to top */}
                            {projectsArr.filter((project) => {
                                return project.featured === true
                            }).map((featured_project) => {
                                return <FadeUp delay={0.1} text={<Project project={featured_project} />} />
                            })
                            }

                        </>
                    )
                }

            </div>

        </div>
    )
}
