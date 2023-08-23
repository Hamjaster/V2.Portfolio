import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'
import { motion } from 'framer-motion';
import AnimateChar from '../components/AnimateChar'
import { TypeAnimation } from 'react-type-animation';
import ParticlesComponent from '../components/Particles';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function LandingPage() {
    const hy = 'Hy, '
    const I = 'I am'
    const hamza = 'Hamza'
    // const emoji = '👋'
    const i = 0.4;
    const { theme, setTheme } = useContext(MyContext)
    // const [selected, setSelected] = useState(true)

    const setTheam = (theme) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
    }
    return (
        <>

            <div className={`flex  flex-col justify-between relative bg-${theme}-700 items-center bg-fixed text-white h-[100vh]  text-4xl `}>

                {/* Color Pallette */}
                <motion.div initial={{ y: -500, }} animate={{ y: 0 }} transition={{ duration: 1, delay: i + i, type: 'tween' }} className="colortheme  z-50 [&>div]:cursor-pointer blocks flex flex-row fixed [&>div]:h-10 [&>div]:relative top-0 left-50% ">
                    <div id='red' onClick={() => setTheam('red')} className='block__item bg-gradient-to-tr from-red-500 to-red-700'>
                        {theme === 'red' ?
                            (<div className='red text-red-700 text-5xl absolute -bottom-3 left-4'>
                                .
                            </div>)
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                    <div id='blue' onClick={() => setTheam('blue')} className='block__item bg-gradient-to-tr from-blue-500 to-blue-700 '>
                        {theme === 'blue' ?
                            (<div className='red text-blue-700 text-5xl absolute -bottom-3 left-4'>
                                .
                            </div>)
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                    <div id='green' onClick={() => setTheam('green')} className='block__item bg-gradient-to-tr from-green-500 to-green-700'>
                        {theme === 'green' ?
                            (<div className='red text-green-700 text-5xl absolute -bottom-3 left-4'>
                                .
                            </div>)
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                    <div id='purple' onClick={() => setTheam('purple')} className='block__item bg-gradient-to-tr from-purple-500 to-purple-700 '>
                        {theme === 'purple' ?
                            (<div className='red text-purple-700 text-5xl absolute -bottom-3 left-4'>
                                .
                            </div>)
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                    <div id='pink' onClick={() => setTheam('pink')} className='block__item bg-gradient-to-tr from-pink-500 to-pink-700'>
                        {theme === 'pink' ?
                            (<div className='red text-pink-700 text-5xl absolute -bottom-3 left-4'>
                                .
                            </div>)
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </motion.div>

                {/* Particles */}
                <div className='absolute z-10'>
                    <ParticlesComponent />
                </div>

                {/* Text        */}
                <div className="text relative z-40  my-auto font-[Inter] flex items-center justify-center flex-col">

                    <div className="head w-full sm:w-2/3 lg:w-full flex flex-wrap  lg:space-x-6 lg:flex-nowrap flex-row justify-start sm:justify-center items-center ml-8 sm:-ml-8 md:ml-0  h-52 font-[700] md:text-8xl">

                        <span className='block md:inline text-[5.5rem] min-[535px]:text-8xl'>
                            <AnimateChar delay={i} text={hy} />
                        </span>
                        <span className='block md:inline  text-[5.5rem]  min-[535px]:text-8xl'>
                            <AnimateChar delay={i + 0.7} text={I} />
                        </span>
                        <span className='block md:inline text-[4.8rem] min-[535px]:text-[5.2rem] mt-2 sm:mt-0 mb-5 sm:mb-0 sm:text-[5.7rem]'>
                            <AnimateChar delay={i + 0.7} text={hamza} />
                        </span>

                        <motion.span className='text-6xl sm:text-7xl ml-2 items-center flex' initial={{ opacity: 0 }}
                            animate={{
                                rotate: [null, 15, -15, 15, 0],
                                opacity: 1,
                                transition: { delay: i + 2.2 },
                            }}
                        >👋</motion.span>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 100 }} transition={{ duration: 1, delay: i + 2.8 }} animate={{ opacity: 1, y: 0 }} style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="desc w-full flex justify-start sm:justify-center lg:-mt-5 text-2xl md:text-4xl items-center ml-10 md:ml-0 mt-4 ">

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'I’m a full-stack developer 🎩💻',
                                2000,
                                'I’m a MERN magician 🧙 ',
                                2000,
                                'I’m a Python Paragon 🐍💡',
                                2000,
                                'I’m a UI/UX designer ✍🎨 ',
                                2000,
                            ]}
                            speed={40}
                            // style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                    </motion.div>

                </div>

                {/* Scroll Btn.            */}
                <div className="scroll relative z-40 items-center flex flex-row ml-14 ">
                    <motion.svg
                        initial={{ y: 0 }}
                        animate={{ y: [10, 0, 10] }} // Translate up, hold, then translate down
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 5 }}
                        className='mb-5' xmlns="http://www.w3.org/2000/svg" width="36" height="80" viewBox="0 0 16 74" fill="none">
                        <path d="M7.29289 73.7071C7.68342 74.0976 8.31658 74.0976 8.70711 73.7071L15.0711 67.3431C15.4616 66.9526 15.4616 66.3195 15.0711 65.9289C14.6805 65.5384 14.0474 65.5384 13.6569 65.9289L8 71.5858L2.34315 65.9289C1.95262 65.5384 1.31946 65.5384 0.928932 65.9289C0.538408 66.3195 0.538408 66.9526 0.928932 67.3431L7.29289 73.7071ZM7 0L7 73H9L9 0L7 0Z" fill="white" fill-opacity="0.47" />
                    </motion.svg>
                    <span className='font-mono text-sm w-14 font-light uppercase'>
                        scroll or die
                    </span>
                </div>

                {/* Social Icons             */}
                <motion.div transition={{ duration: 1, when: 'beforeChildren', staggerChildren: 0.2, delayChildren: 0.2, delay: i + 4 }} className="icons z-40 space-y-5 flex flex-col bottom-20 left-8 absolute">
                    <motion.div initial={{ y: 400, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                        duration: 1,
                        delay: i + 1
                    }} className="icon cursor-pointer rounded-full">
                        <FaGithub />
                    </motion.div>
                    <motion.div initial={{ y: 400, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                        duration: 1,
                        delay: i + 1
                    }} className="icon cursor-pointer rounded-3xl">
                        <FaInstagram />
                    </motion.div>
                    <motion.div initial={{ y: 400, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                        duration: 1,
                        delay: i + 1
                    }} className="icon cursor-pointer rounded-xl">
                        <FaLinkedin />
                    </motion.div>
                </motion.div>

            </div>

        </>
    )
}
