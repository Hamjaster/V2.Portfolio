import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'
export default function Ask() {

    const { setTheme } = useContext(MyContext);

    // useEffect(() => {
    //     console.log('ran effect');
    //     if (!theme) return;
    //     console.log('ran effect');
    //     localStorage.setItem('theme', theme)
    // }, [theme, setTheme])

    const setTheam = (theme) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
    }


    return (
        <div className='bg-black text-white h-[100vh] relative'>
            <div className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-mono text-center pt-32  w-full">
                Select the theme you like :)
            </div>
            {/* <div className="gap-8 flex-wrap items-center mt-32 ml-20 flex flex-row h-max  ">
                <div onClick={() => setTheme('blue')} class="wrapper">
                    <a href="#" className='w-36 h-32  cursor-pointer flex items-center after:bg-blue-500   justify-center text-blue-500 hover:text-white text-3xl border border-blue-500 uppercase font-mono'><span>Blue</span></a>
                </div>
                <div onClick={() => setTheme('red')} class="wrapper">
                    <a className='w-36 h-32  cursor-pointer flex items-center after:bg-red-500 justify-center text-red-500 hover:text-white text-3xl border border-red-500 uppercase font-mono'><span>Red</span></a>
                </div>
                <div onClick={() => setTheme('green')} class="wrapper">
                    <a className='w-36 h-32  cursor-pointer flex items-center after:bg-green-500 justify-center text-green-500 hover:text-white text-3xl border border-green-500 uppercase font-mono'><span>Green</span></a>
                </div>
                <div onClick={() => setTheme('purple')} class="wrapper">
                    <a className='w-36 h-32  cursor-pointer flex items-center after:bg-purple-500 justify-center text-purple-500 hover:text-white text-3xl border border-purple-500 uppercase font-mono'><span>Purple</span></a>
                </div>
                <div onClick={() => setTheme('black')} class="wrapper">
                    <a className='w-36 h-32  cursor-pointer flex items-center after:bg-white justify-center text-white hover:text-black text-3xl border border-white uppercase font-mono'><span>Black</span></a>
                </div>

            </div> */}
            <div className='grid text-3xl md:text-5xl grid-cols-2 absolute bottom-0 right-0 left-0 top-64 grid-rows-3'>
                <div onClick={() => setTheam('red')} className="color  group bg-red-600 w-full flex items-center justify-center">
                    <div className=' overflow-hidden z-40 translate-x-32 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 font-semibold uppercase'>Red</div>
                </div>
                <div onClick={() => setTheam('purple')} className="color group bg-purple-600 w-full flex items-center justify-center">
                    <div className=' overflow-hidden z-40 translate-x-32 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 font-semibold uppercase'>Purple</div>
                </div>
                <div onClick={() => setTheam('green')} className="color group bg-green-600 w-full flex items-center justify-center">
                    <div className=' overflow-hidden z-40 translate-x-32 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 font-semibold uppercase'>Green</div>
                </div>
                <div onClick={() => setTheam('blue')} className="color group bg-blue-600 w-full flex items-center justify-center">
                    <div className=' overflow-hidden z-40 translate-x-32 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 font-semibold uppercase'>Blue</div>
                </div>
                <div onClick={() => setTheam('pink')} className="color group bg-pink-600 col-span-2 w-full flex items-center justify-center">
                    <div className=' overflow-hidden z-40 translate-x-32 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 font-semibold uppercase'>Pink</div>
                </div>

            </div>
        </div>
    )
}
