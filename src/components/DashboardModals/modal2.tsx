import Image from "next/image";
import React from "react";
import question from '../../../public/assets/questionMark.png'
import Link from "next/link";

type props = {
    setShow1: (value: boolean) => void;
    show1: boolean;
};

const Modal2 = ({ setShow1, show1 }: props) => {
console.log(show1)
    return (
        <>
            <div
                className={`fixed w-full h-full top-0 block left-0 right-0 z-24 items-center 
   ${show1 ? 'block' : `hidden`} `}
                style={{ background: "rgba(0, 40, 40, 0.25)" }}
            >
                <div className="relative mt-40 mb-40 rounded-2xl md:mb-20 lg:w-1/3 w-2/3 bg-white mx-auto ">
                    <div className="bg-[#EBEEFC] my-4 py-5 flex items-center justify-center rounded-t-xl">
                        <Image src={question} alt="welcome to the platform" className="rounded-t-xl" />
                    </div>
                    <div className="px-8 py-4 text-left">
                        <h3 className="font-bold text-[black] pb-8 text-lg pl-2">Why are you taking the Behavioral <br /> Insight Course?</h3>
                        <p className="text-[#B8BBCC] font-[14px] pb-4 pl-2 rounded-lg border-b-10 border-b-2">E.g To advance my career</p>
                    </div>
                    <div className="  mt-10 flex justify-end">
                        <button
                            className="bg-[#2D41A5] buttonShadow py-3 px-8 mr-4 mb-4 text-white font-semibold font-white transition-all duration-500 ease-in-out rounded-xl text-sm hover:bg-[#233280] hover:rounded-2xl"
                            onClick={() => setShow1(!show1)}
                        >
                            Continue
                        </button>


                    </div>
                </div>
            </div>
        </>
    );
};
export default Modal2;
