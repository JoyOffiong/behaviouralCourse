import { Clock, CloseSquare } from "iconsax-react";
import Image from "next/image";
import React from "react";
import TextInput from "../Form/TextInput/TextInput";
import { useForm } from "react-hook-form";
import RadioButtons from "../Form/RadioGroupInput";

type props = {
  show: boolean;
  setShow: any;
};

function EditStudyTime({ show, setShow }: props) {
  const { control, handleSubmit } = useForm();

  return (
    <div
      className={`fixed font-sans w-full h-full top-0 block left-0 right-0 z-24 items-center 
${show ? "block" : "hidden"}`}
            style={{ background: "rgba(0, 40, 40, 0.25)" }}
        >
          <div className="relative overflow-y-scroll mt-5 mb-40 px-6 md:px-12  pt-2 rounded-2xl md:mb-20 lg:w-5/12 w-[80%] bg-white  mx-auto ">
             <div className='flex justify-between my-5 pb-2 pl-2 rounded-lg border-b-10 border-b-2'>
                    <p>Edit Social Links</p>

          <CloseSquare size="32" color="#f47373" variant="Bulk" onClick={()=>{setShow(false)}} />
        </div>

        <form className="mt-10">
          <div className="pb-6">
            <label htmlFor="" className="text-[#596080] text-sm font-normal">
              Frequency
            </label>
            <div className="flex justify-between gap-10  flex-row">
              <div className=" w-full mb-4 md:mb-0 md:w-[49%] border-2 p-1 md:p-2 rounded-lg text-[#575766]">
                <RadioButtons label="Daily" />
              </div>
              <div className=" w-full mb-4 md:mb-0 md:w-[49%] border-2 p-1 md:p-2 rounded-lg text-[#575766]">
                <RadioButtons label="Weekly" />
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4 w-[80%]">
            <p className="rounded-full border-2 px-4 py-2"> Sun</p>
            <p className="rounded-full border-2 px-4 py-2">Mon</p>
            <p className="rounded-full border-2 px-4 py-2">Tues</p>
            <p className="rounded-full border-2 px-4 py-2">Wed</p>
          </div>
          <br />
          <div className="flex justify-between gap-2 mb-4 w-[60%]">
            <p className="rounded-full border-2 px-4 py-2"> Thurs</p>
            <p className="rounded-full border-2 px-4 py-2">Fri</p>
            <p className="rounded-full border-2 px-4 py-2">Sat</p>
          </div>

          <div className="pb-4">
            <h4 className="text-[14px] font-semibold pb-2 text-[#596080]">
              Time
            </h4>
            <p className="text-[#B8BBCC] bg-[#F2F4FC] font-[14px] py-4 pl-2 rounded-lg flex justify-between">
              <span>8pm</span>{" "}
              <span className="pr-2">
                <Clock color="#596080" variant="Bulk" />
              </span>
            </p>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold pb-2 text-[#596080]">
              Remind Me
            </h4>
            <div className="flex gap-10 pt-2 items-center">
              <p className="text-[#B8BBCC] bg-[#F2F4FC] font-[14px] py-2 pl-2 rounded-lg border-b-10 border-b-2 w-1/6 text-center">
                30
              </p>
              <p className="text-sm font-normal">
                Minutes before my study time
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-10 mb-8 mt-4  flex-row">
              <button className=" w-full text-[#2D41A5] bg-[#fff] mb-4 md:mb-0 md:w-[49%] border-2 p-1 md:p-2 rounded-lg">
                Cancel
              </button>
              <button className=" w-full bg-[#2D41A5] buttonShadow text-[#FFF] mb-4 md:mb-0 md:w-[49%] border-2 p-1 md:p-2 rounded-lg">
             Save Changes
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudyTime;
