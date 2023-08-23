import React, { useEffect, useRef } from 'react'
import Wave from 'react-wavify';
import { motion, useAnimation, useInView } from 'framer-motion'

export default function Flowchart({ theme, height, opacity }) {
    const ref = useRef(null)
    const InView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (InView) controls.start('animate')
        // eslint-disable-next-line
    }, [InView])

    // let h = height - 10;
    return (

        <motion.div ref={ref} variants={{
            initial: { height: 0 },
            animate: { height: "52%", transition: { duration: 1.2 }, }
        }} initial='initial' animate={controls}
            className={` w-full  ${opacity}`}>

            <Wave fill={theme}
                paused={false}
                options={{
                    height: height,
                    amplitude: 20,
                    speed: 0.15,
                    points: 4
                }}
            />

        </motion.div>

    )
}
