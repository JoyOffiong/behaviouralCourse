import React from "react";

type props = {
  text: string;
};

function Heading({ text }: props) {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h2 className="font-poppins text-[#2D41A5] text-2xl font-black mt-[24px] leading-8">
        {text}
      </h2>
    </div>
  );
}

export default Heading;
