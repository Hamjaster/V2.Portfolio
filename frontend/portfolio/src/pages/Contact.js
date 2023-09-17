import React, { useEffect, useState, useRef, useContext } from 'react'
import FadeUp from '../components/FadeUp'
import emailjs from "emailjs-com";
import { motion } from 'framer-motion'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from '../context/ContextProvider';

let r = "";
export default function Contact() {
    const { theme } = useContext(MyContext)
    const form = useRef();


    useEffect(() => {
        const timer = setTimeout(() => { }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    let [inpVal, setinpVal] = useState("");
    let [emailVal, setemailVal] = useState("");
    let [textaVal, settextaVal] = useState("");
    const getInput = (e) => {
        setinpVal(e.target.value);
    };
    const getEmail = (e) => {
        setemailVal(e.target.value);
    };
    const getTexta = (e) => {
        settextaVal(e.target.value);
    };

    const sendEmail = (e) => {
        // notify();
        e.preventDefault();

        if ((inpVal === "") | (emailVal === "") | (textaVal === "")) {
            // toast.warn("You missed a field", {
            //     autoClose: 500,
            //     hideProgressBar: false,
            // });

        } else {
            emailjs.sendForm(
                "service_vxyotcd",
                "template_umq2uh5",
                e.target,
                "0kaS0Fh3vdQJZwSbc"
            )
                .then(
                    (result) => {
                        r = result.text;
                        console.log(r);
                        toast.success("Done", { autoClose: 500, hideProgressBar: false });
                    },
                    (error) => {
                        console.log(error);
                        r = error;
                        toast.error("Error", { autoClose: 500, hideProgressBar: false });
                    }
                );

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    };
    return (
        <>
            <ToastContainer />
            <div className={`bg-${theme}-700 z-40  relative mb-5 text-white w-full flex flex-col px-5 sm:px-10 md:px-14 pt-14 justify-center`}>
                <motion.div initial={{ y: 0, x: 0 }} animate={{ y: [-40, 0, 80] }} transition={{
                    duration: 5,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'reverse'

                }
                } className="text-[600px] font-semibold  pointer-events-none absolute -left-20 -top-56 opacity-10 text-[rgb(255,255,255)]">
                    @
                </motion.div>
                <FadeUp
                    text={<div className="text z-10 ">
                        <h1 className='text-4xl sm:text-4xl md:text-6xl font-bold'>Contact</h1>
                        <h3 className='text-sm sm:text-xl md:text-2xl font-thin mt-3'>If you have any query or question, don't hesitate to use the form.
                            Don't worry, I will not bite you :)
                        </h3>
                    </div>}
                />

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="form mt-8 z-10">

                    <div>
                        <FadeUp text={
                            <div class="flex flex-col mb-3 space-y-2">
                                <label for="name">Name</label>
                                <input
                                    value={inpVal}
                                    onChange={getInput}
                                    name='user_name'
                                    type="text" id="name"
                                    class={`px-3 py-2 bg-${theme}-400 opacity-80  focus:outline-none`}
                                    autocomplete="off"
                                />
                            </div>
                        } />
                        <FadeUp
                            text={
                                <div class="flex flex-col mb-3 space-y-2">
                                    <label for="email">Email</label>
                                    <input
                                        value={emailVal}
                                        onChange={getEmail}
                                        name='user_email'
                                        type="text" id="email"
                                        class={`px-3 py-2 bg-${theme}-400  opacity-80 focus:outline-none `}
                                        autocomplete="off"
                                    />
                                </div>
                            }
                        />
                        <FadeUp
                            text={
                                <div class="flex flex-col mb-3 space-y-2">
                                    <label for="message">Message</label>
                                    <textarea
                                        value={textaVal}
                                        onChange={getTexta}
                                        name='message'
                                        rows="4" id="message"
                                        class={`px-3 py-2 bg-${theme}-400 opacity-80  focus:outline-none `}
                                    ></textarea>
                                </div>
                            }
                        />
                    </div>

                    <FadeUp
                        text={
                            <div class="w-full pt-3 pb-12">
                                <button type="submit" class={`w-2/5 sm:w-[16%] md:w-[19%] rounded-md bg-white text-${theme}-700 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-slate-200 hover:text-${theme}-700 text-xl cursor-pointer`}>
                                    Send
                                </button>
                            </div>
                        }
                    />


                </form>
            </div >
        </>
    )
}
