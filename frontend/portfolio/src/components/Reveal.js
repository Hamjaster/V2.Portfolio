import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function Reveal({ children, image, theme }) {
    const ref = useRef(null)
    const InView = useInView(ref, {})
    const slideControls = useAnimation()
    const mainControls = useAnimation()

    useEffect(() => {
        console.log(InView);
        if (InView) slideControls.start('animate');
        if (InView) mainControls.start('animate');
        // eslint-disable-next-line
    }, [InView])

    return (
        <>
            <motion.div ref={ref}
                style={{
                    background: `url(${image})`,

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
                variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 }
                }}
                initial='initial'
                animate={mainControls}
                className=' h-full overflow-hidden transition-transform cursor-pointer hover:scale-110 duration-300'

                transition={{ when: 'afterChildren' }}
            >
                <motion.div
                    variants={{
                        initial: { translateX: "0px" },
                        animate: {
                            translateX: "1240px",
                            transition: {
                                duration: 1,
                                delay: 0.2,
                                ease: 'easeInOut'
                            }
                        },
                    }}
                    initial='initial'
                    animate={slideControls}
                    style={{
                        height: "100%",
                        background: theme,
                        width: "100%",


                    }}
                >
                </motion.div>
            </motion.div >


        </>
    )
}
