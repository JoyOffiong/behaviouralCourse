import Image from "next/image";
import React from "react";
import clock from '../../../public/assets/time.png'
import Link from "next/link";
import { Clock, InfoCircle } from "iconsax-react";

type props = {
    show: boolean;
    setShow: any;
};

const Modal3 = ({ show, setShow }: props) => {
    return (
        <>
            <div
                className={`fixed font-sans w-full h-full top-0 block left-0 right-0 z-24 items-center 
    ${show ? "block" : "hidden"}`}
                style={{ background: "rgba(0, 40, 40, 0.25)" }}
            >
    <div className="relative  mb-40 rounded-2xl md:mb-20 lg:w-1/3 w-2/3 bg-white mx-auto ">
             <div className="bg-[#EBEEFC] my-4 py-5 flex items-center justify-center rounded-t-xl">
                        <Image src={clock} alt="welcome to the platform" className="rounded-t-xl" />
                    </div>
                    <div className="px-8 py-4 text-left">
                        <h3 className="font-bold text-[black] pb-2 text-lg pl-2">Let’s pick a convenient study time</h3>
                       <div className="flex"><InfoCircle size="32" color="#FF8A65" variant="Bulk"/><p className="text-[#B8BBCC] font-[14px] pb-4 pl-2"> You can always change your study time</p>
                        </div> 
                  

                    <div className="pb-4">
                        <h4 className="text-[14px] font-semibold pb-2 text-[#596080]">Frequency</h4>
                        <div className="flex flex-row justify-between">
                        <div className="border-2 rounded-lg w-[45%] p-4">
                            <p className="text-[#596080]">Daily</p>
                        </div>
                        <div className="border-2 rounded-lg w-[45%] p-4">
                            <p  className="text-[#596080]">Weekly</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className="pb-4">
                        <h4 className="text-[14px] font-semibold pb-2 text-[#596080]">Time</h4>
                         <p className="text-[#B8BBCC] font-[14px] pb-4 pl-2 rounded-lg border-b-10 border-b-2 flex justify-between">
                            <span> HH:MM</span> <span className="pr-2"><Clock color="#596080" variant="Bulk"/></span>
                            </p>   
                    </div>
                    <div>
                        <h4 className="text-[14px] font-semibold pb-2 text-[#596080]">Remind Me</h4>
                        <div className="flex gap-10 pt-2">
                        <p className="text-[#B8BBCC] font-[14px] pb-4 pl-2 rounded-lg border-b-10 border-b-2 w-1/6 text-center">
                           30
                            </p>   
                            <p className="text-sm font-normal">Minutes before my study time</p>
                        </div>
                        
                    </div>
                    <div className="  mt-10 flex flex-row md:justify-end justify-between ">
                        <button className="bg-[#fff] py-1 px-4 mr-4 mb-4 text-blue font-semibold font-white rounded-lg border-[#DADEF2] border-2">
                        previous
                        </button>
                        <button onClick={()=>{setShow(false)}} className="bg-[#2D41A5] buttonShadow py-1 px-6 mr-4 mb-4 text                                        -white font-semibold font-white rounded-lg">
                         Finish
                        </button>
                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Modal3;
