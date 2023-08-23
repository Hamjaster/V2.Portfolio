import React from 'react'
import { motion } from 'framer-motion'

export default function Animate({ text, delay, shake, wrap }) {
    const letters = Array.from(text)

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({

            opacity: 1,
            transition: { delay: delay, when: 'beforeChildren', staggerChildren: 0.04, delayChildren: 0.02 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {

                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -10,
            y: -50,
            transition: {
                duration: 0.2,
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className='items-center '
            style={{ display: "flex", paddingBottom: '8px' }}
            variants={container}
            initial="hidden"
            animate="visible"
            delay={delay}

        >
            {letters.map((word, index) => (
                <motion.span
                    variants={child}

                    key={index}
                >
                    {word === " " ? "\u00A0" : word}
                </motion.span>
            ))}
        </motion.div>
    );
};
