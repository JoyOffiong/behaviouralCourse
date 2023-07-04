import Image from "next/image";
import React, { useEffect, useState } from "react";
import welcome from "../../../public/assets/16 6.png";
import Modal2 from "@/components/DashboardModals/modal2";
import Link from "next/link";

interface Props {
  setShow: (value: boolean) => void;
  show: boolean;
  show1: any;
  setShow1: any;
}

const Modal1 = ({ setShow, show, show1, setShow1 }: Props) => {
  const handleClick = () => {
    setShow(!show);
    setShow1(true);
  };

  return (
    <>
      <div
        className={`transform transition-transform duration-900 ease-in-out translate-y fixed font-sans w-full h-full top-0 block left-0 right-0 z-24 items-center  ${
          show ? "block" : "hidden"
        }`}
        style={{ background: "rgba(0, 40, 40, 0.50)" }}
      >
        <div className="relative mt-40 mb-40 rounded-2xl md:mb-20 lg:w-1/3 w-[80%] bg-white mx-auto ">
          <div className="bg-[#EBEEFC] my-4 py-5 flex items-center justify-center rounded-t-xl">
            <Image
              src={welcome}
              alt="welcome to the platform"
              className="rounded-t-xl"
            />
          </div>

          <div className="px-8 py-4 text-center">
            <h3 className="font-bold text-[rgb(0,0,0)] pb-4 text-lg">
              Welcome on Board
            </h3>
            <p>{`👋🏽 Hello, I am Bobby and I’ll be your study partner.`}</p>
            <p>{`Let’s start by personalizing your learning Journey`}</p>
          </div>
          <div className="  mt-10 flex justify-end">
            <button
              onClick={() => {
                handleClick();
              }}
              className="bg-[#2D41A5] buttonShadow py-3 px-8 mr-4 mb-4 text-white font-semibold font-white transition-all duration-500 ease-in-out rounded-xl text-sm hover:bg-[#233280] hover:rounded-2xl"
            >
              {` Let's Go`}
            </button>
          </div>

          {show1 === true ? <Modal2 setShow1={setShow1} show1={show1} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Modal1;
