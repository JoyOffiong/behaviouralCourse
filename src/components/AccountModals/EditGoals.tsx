import { CloseSquare } from "iconsax-react";
import Image from "next/image";
import React from "react";
import TextInput from "../Form/TextInput/TextInput";
import { Controller, useForm } from "react-hook-form";
import MultiLineInputBox from "../Form/MultilineInput/MultilineInput";

type props = {
  show: boolean;
  setShow: any;
};

function EditGoals({ show, setShow }: props) {
  const { control, handleSubmit } = useForm();

  return (
    <div
      className={`fixed font-sans w-full h-full top-0 block left-0 right-0 z-24 items-center 
${show ? "block" : "hidden"}`}
      style={{ background: "rgba(0, 40, 40, 0.25)" }}
    >
        <div className="relative overflow-y-scroll mt-5 mb-40 px-6 md:px-12  pt-2 rounded-2xl md:mb-20 lg:w-5/12 w-[80%] bg-white  mx-auto ">
        <div className='flex justify-between my-5 pb-2 pl-2 rounded-lg border-b-10 border-b-2'>
          <p>Edit Goals</p>

          <CloseSquare
            size="32"
            color="#f47373"
            variant="Bulk"
            onClick={()=>setShow(false)}
          />
        </div>

        <form className="mt-10">
          <h3 className="font-bold text-[lg] mb-6   ">
            Why are you taking the Behavioural Insight Course?
          </h3>

          <div className="flex flex-col pb-6 border-none">
            <p className="text-[#596080] font-medium text-xs pb-4">My Goals</p>
            <MultiLineInputBox
              name="goalsS"
              type="text"
              placeholder="E.g To advance my Career"
              control={control}
            />
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

export default EditGoals;
