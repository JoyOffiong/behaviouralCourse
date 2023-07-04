import FAQs from "@/components/Support/FAQs";
import { Facebook, Instagram, Whatsapp } from "iconsax-react";
import React from "react";

export default function Support() {
  return (
    <div className="my-4 font-sans">
      <div className="bg-[#EBEEFC] text-center rounded-lg">
        <div className=" py-10 md:w-[50%] w-2/3 mx-auto">
          <h3 className="text-[#36394D] text-2xl font-bold pb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-[#596080] ">
            Experiencing a challenge? Chances are your questions <br /> have
            already been answered.
          </p>

          <div className="flex w-[20%] justify-between pt-4 mx-auto">
            <Facebook size="24" color="#596080" variant="Bulk" />
            <Whatsapp size="24" color="#596080" variant="Bulk" />
            <Instagram size="24" color="#596080" variant="Bulk" />
          </div>

          <p className="text-[#2D41A5] text-sm font-semibold pt-10 cursor-pointer">
            Contact Support
          </p>
        </div>
      </div>

      <div className="w-[90%] md:w-[70%] mt-10 mx-auto">
        <FAQs />
      </div>
    </div>
  );
}
