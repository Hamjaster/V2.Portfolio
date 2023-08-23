import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'

export default function Footer() {
    const { theme } = useContext(MyContext)
    return (
        <div className='footer relative z-40 mb-12 mt-12'>

            <hr class="h-px w-11/12 mx-auto my-8 bg-gray-300 border-0 dark:bg-gray-700" />
            <div className={`text-lg sm:text-xl text-${theme}-600 flex flex-row w-full`}>
                <span className='w-2/4 sm:w-1/4 text-center text-gray-500'>© 2023 Hamza Shah</span>
                <div className="svg w-2/4 text-center flex items-center justify-center">
                    <svg width={50} version="1.0" xmlns="http://www.w3.org/2000/svg"
                        // width="421.000000pt" height="484.000000pt" 
                        viewBox="0 0 421.000000 484.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,484.000000) scale(0.100000,-0.100000)"
                            fill={theme} stroke="none">
                            <path d="M1042 4217 l-1034 -612 6 -285 c3 -157 9 -699 12 -1206 l6 -921 1030
                        -584 c567 -321 1038 -588 1048 -592 13 -7 267 139 1054 605 l1038 613 -6 285
                        c-3 157 -9 699 -12 1206 l-6 921 -1040 589 c-571 324 -1045 590 -1051 591 -7
                        1 -477 -274 -1045 -610z m1969 -191 l924 -524 7 -763 c4 -420 7 -901 5 -1067
                        l-2 -304 -911 -539 -911 -539 -924 524 -924 524 -7 763 c-4 420 -7 900 -5
                        1067 l2 304 910 538 c501 297 910 539 911 540 0 0 417 -236 925 -524z"/>
                            <path d="M1327 3583 c-4 -3 -7 -292 -7 -642 l0 -635 38 36 c39 37 187 136 309
                        207 100 57 128 83 160 149 l28 57 0 415 0 415 -261 3 c-143 1 -263 -1 -267 -5z"/>
                            <path d="M2388 3313 c-3 -264 -5 -281 -26 -328 -44 -97 -94 -135 -547 -416
                        -370 -229 -416 -264 -463 -354 l-27 -50 -3 -280 c-2 -254 -1 -283 15 -307 20
                        -30 478 -388 497 -388 3 0 6 165 8 368 3 359 4 368 26 417 33 71 71 107 202
                        188 618 383 712 450 777 558 59 99 64 136 61 520 l-3 344 -257 3 -256 2 -4
                        -277z"/>
                            <path d="M2860 2632 c-55 -71 -176 -162 -417 -312 l-53 -32 0 -555 c0 -443 3
                        -554 13 -546 6 5 61 47 121 94 60 46 152 117 205 157 53 40 109 85 125 100 57
                        53 56 47 56 604 0 282 -4 518 -8 524 -4 8 -20 -5 -42 -34z"/>
                        </g>
                    </svg>
                </div>
            </div>

        </div>
    )
}
