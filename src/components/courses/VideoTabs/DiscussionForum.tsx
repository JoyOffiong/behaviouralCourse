import MultiLineInputBox from "@/components/Form/MultilineInput/MultilineInput";
import TextInput from "@/components/Form/TextInput/TextInput";
import {
  ArrowDown3,
  Dislike,
  Like1,
  Messages,
  Profile,
  Send,
} from "iconsax-react";
import React from "react";
import { useForm } from "react-hook-form";

function DiscussionForum() {
  const { control, handleSubmit } = useForm();
  return (
    <div className="font-sans m-4">
      <div className="w-[80%] text-[#596080] bg-[#EBEEFC]  rounded-2xl px-8 py-4">
        <div>
          <p className="pb-5 text-xs font-light">
            What are your thoughts on this? Are there any real-life examples of
            nudges that you find particularly interesting or impactful?
          </p>

          <div className=" flex flex-col  md:flex-row justify-between md:items-center items-left border-t-[1px] border-[#DADEF2] rounded-2xl   mx-0  py-2 ">
            <div className="flex gap-2 mb-5 items-center">
              <div className="p-1 w-[40px] h-[40px] bg-[#DADEF2] flex items-center justify-center rounded-[50%]">
                <Profile size="20" color="#7D86B2" variant="Bulk" />
              </div>
              <span className="text-[#596080] font-semibold">Moses</span>
              <ArrowDown3 size="14" color="#596080" variant="Bulk" />
            </div>

            <div className="flex gap-2 justify-end md:justify-normal">
              <div className="flex gap-1 items-center">
                <Like1 size="16" color="#596080" variant="Bulk" />
                <span className="text-xs hidden md:block">Like</span>
                <span className="font-semibold text-[#596080]  text-xs">
                  86
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <Dislike size="16" color="#596080" variant="Bulk" />
                <span className="text-xs hidden md:block">Dislike</span>
                <span className="font-semibold text-[#596080]  text-xs">
                  86
                </span>
              </div>
              <div className="w-[1px] bg-[#000000]"></div>
              <div className="flex gap-1 items-center">
                <Messages size="16" color="#596080" variant="Bulk" />
                <span className="text-xs hidden md:block">Comment</span>
                <span className="font-semibold text-[#596080]  text-xs">
                  86
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <div className=" w-[80%] text-[#fff] flex justify-end bg-[#7D86B2] rounded-2xl px-8 py-4">
          <div>
            <p className="pb-5 text-xs font-light">
              What are your thoughts on this? Are there any real-life examples
              of nudges that you find particularly interesting or impactful?
            </p>

            <div className=" flex flex-col md:flex-row justify-between md:items-center items-left rounded-2xl border-t-[1px]  border-[#DADEF2]  mx-0  py-2 ">
              <div className="flex gap-2 mb-5 items-center">
                <div className="p-1 w-[40px] h-[40px] border-[#596080] border-[1px] bg-[#7D86B2] flex items-center justify-center rounded-[50%]">
                  <Profile size="20" color="#fff" variant="Bulk" />
                </div>
                <span className="text-[#FFF] font-semibold">You</span>
                <ArrowDown3 size="14" color="#FFF" variant="Bulk" />
              </div>

              <div className="flex gap-2 justify-end md:justify-normal">
                <div className="flex gap-1 items-center">
                  <Like1 size="16" color="#FFF" variant="Bulk" />
                  <span className="text-xs">86</span>
                </div>
                <div className="flex gap-1 items-center">
                  <Dislike size="16" color="#FFF" variant="Bulk" />
                  <span className="text-xs">86</span>
                </div>
                <div className="w-[1px] bg-[#888888]"></div>
                <div className="flex gap-1 items-center">
                  <Messages size="16" color="#FFF" variant="Bulk" />
                  <span className=" text-xs">86</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add comment */}
      <form action="">
        <div className="flex items-center rounded-2xl mt-8 relative border-none">
          <TextInput
            name="conversation"
            placeholder="join the Conversation"
            control={control}
            rules={{}}
          />
          <div className="w-[1px] bg-[#000000]"></div>
          <span className="-mb-[4px] right-3 absolute">
            <Send size="24" color="#596080" />
          </span>
        </div>
      </form>
    </div>
  );
}

export default DiscussionForum;
