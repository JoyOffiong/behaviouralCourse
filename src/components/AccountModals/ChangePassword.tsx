import { CloseSquare, Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import TextInput from "../Form/TextInput/TextInput";
import { useForm } from "react-hook-form";
import RadioButtons from "../Form/RadioGroupInput";

type props = {
  show: boolean;
  setShow: any;
};

function ChangePassword({ show, setShow }: props) {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword1, setShowPassword1] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)

  return (
    <div
      className={`fixed w-full h-full top-0 block left-0 right-0 z-24 items-center 
${show ? "block" : "hidden"}`}
      style={{ background: "rgba(0, 40, 40, 0.25)" }}
    >
   <div className="relative overflow-y-scroll mt-5 mb-40 px-6 md:px-12  pt-2 rounded-2xl md:mb-20 lg:w-5/12 w-[80%] bg-white  mx-auto "> <div className='flex justify-between my-5 pb-2 pl-2 rounded-lg border-b-10 border-b-2'>
          <p>Change Password</p>

          <CloseSquare
            size="32"
            color="#f47373"
            variant="Bulk"
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>

        <form>
          <div className="flex flex-col pb-6 border-none">
            <label
              htmlFor=""
              className="text-[#596080] pb-1 text-sm font-normal"
            >
              Current Password
            </label>
            <TextInput
              name="password"
              placeholder="Enter Current Password"
              type={`${!showPassword ? `text`: `password`}`}
              control={control}
              rules={{
                required: "password is required",
              }}
            />
            <span className="absolute right-14 mt-9"> {showPassword?    <Eye size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword(!showPassword)}/> : <EyeSlash size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword(!showPassword)}/>}
         </span>
           
            
          </div>
          <div className="flex flex-col pb-6 border-none">
            <label
              htmlFor=""
              className="text-[#596080] pb-1 text-sm font-normal"
            >
              New Password
            </label>
            <TextInput
              name="newPassword"
              placeholder="Enter New Password"
              type={`${!showPassword1 ? `text`: `password`}`}
              control={control}
              rules={{
                required: "password is required",
              }}
            />
              <span className="absolute right-14 mt-9"> {showPassword1?    <Eye size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword1(!showPassword1)}/> : <EyeSlash size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword1(!showPassword1)}/>}
         </span>
          </div>
          <div className="flex flex-col pb-6 border-none">
            <label
              htmlFor=""
              className="text-[#596080] pb-1 text-sm font-normal"
            >
              Confirm Password
            </label>
            <TextInput
              name="confirmPassword"
              placeholder="Confirm New Password"
              type={`${!showPassword2 ? `text`: `password`}`}
              control={control}
              rules={{
                required: "password is required",
              }}
            />
              <span className="absolute right-14 mt-9"> {showPassword2?    <Eye size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword2(!showPassword2)}/> : <EyeSlash size="32" color="#596080" variant="Bulk" onClick={()=>setShowPassword2(!showPassword2)}/>}
         </span>
          </div>

          <div className=" mt-10 flex justify-between flex-col md:flex-row">
            <button className="bg-[#fff] text-[#2D41A5] md:w-[48%] w-full py-4 px-12 border-[#e5e5e5] border-2 mb-4  font-semibold font-white rounded-lg">
              Cancel
            </button>
            <button className="bg-[#2D41A5] w-full md:w-[48%] py-4 px-12 mb-4 text-white font-semibold font-white rounded-lg buttonShadow">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
