  import { CloseSquare } from "iconsax-react";
import React from "react";
import TextInput from "../Form/TextInput/TextInput";
import { useForm } from "react-hook-form";
import RadioButtons from "../Form/RadioGroupInput";

type props = {
  show: boolean;
  setShow: any;
};

function EditProfileModal({ show, setShow }: props) {
  const { control, handleSubmit } = useForm();

  return (
    <div
      className={`fixed w-full font-sans h-full top-0 block left-0 right-0 z-24 items-center 
${show ? "block" : "hidden"}`}
      style={{ background: "rgba(0, 40, 40, 0.40)" }}
    >
      <div className="relative overflow-y-scroll md:overall-y-hidden mt-5 mb-40 px-6 md:px-12  pt-2 rounded-2xl md:mb-20 lg:w-5/12 w-[80%] bg-white  mx-auto ">
        <div className='flex justify-between my-5 pb-2 pl-2 rounded-lg border-b-10 border-b-2'>
          <p>Edit Profile</p>

          <CloseSquare
            size="32"
            color="#f47373"
            variant="Bulk"
            onClick={() => setShow(false)}
            className="cursor-pointer"
          />
        </div>

        <form>
          <div className="flex flex-col pb-6 border-none">
            <label
              htmlFor=""
              className="text-[#596080] pb-1 text-sm font-normal"
            >
              Email Address
            </label>
            <TextInput
              name="email"
              placeholder="Enter Email Address"
              type="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              }}
            />
          </div>

          <div className="flex flex-col pb-6 border-none">
            <label htmlFor="" className="text-[#596080] text-sm font-normal">
              Phone Number
            </label>
            <TextInput
              name="phoneNumber"
              type="number"
              placeholder="0812374839"
              control={control}
              rules={{
                required: "Number is required",
              }}
            />
          </div>

          <div className="pb-6">
            <label htmlFor="" className="text-[#596080] text-sm font-normal">
              Gender
            </label>
            <div className="flex justify-between gap-10  flex-row">
              <div className=" w-full mb-4 md:mb-0 md:w-[49%] border-2 p-1 md:p-2 rounded-lg text-[#575766]">
                <RadioButtons label="Male" />
              </div>
              <div className=" w-full mb-4 md:mb-0 md:w-[49%] border-2 p-1 md:p-2 rounded-lg text-[#575766]">
                <RadioButtons label="Female" />
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-6 border-none">
            <label
              htmlFor=""
              className="text-[#596080] pb-1 text-sm font-normal"
            >
              Organization
            </label>
            <TextInput
              name="phoneNumber"
              type="text"
              placeholder="0812374839"
              control={control}
              rules={{
                required: "Number is required",
              }}
            />
          </div>


          <div className="flex justify-between gap-10 mb-8  flex-row">
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

export default EditProfileModal;
