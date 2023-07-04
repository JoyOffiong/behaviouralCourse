import Image from "next/image";
import React from "react";
import CircularProgress from "./progress/circularProgress";

import {
  ArrowRight,
  Award,
  InfoCircle,
  Lock1,
  SearchNormal1,
  Sort,
} from "iconsax-react";
import { StepBadge } from "./progress/stepBadge";




// MainComponent
export const Progress = ({ certificate }: any) => {
  return (
    <>
      <StepBadge />
      <div className="flex items-center  gap-2 text-[14px] font-bold font-poppins text-[#596080]  my-[20px]">
        <InfoCircle size="14" variant="Bulk" /> How can i get more points? 😥
      </div>
      <div className="flex items-center justify-between bg-[#F2F4FC] rounded-xl text-[#596080]  p-4 font-poppins">
        <div className="flex gap-2 items-center">
          <Award size="24" color="#596080" variant="Bulk" />
          <h3 className="text-[14px] font-bold">
            {certificate} Certifications
          </h3>{" "}
        </div>
        <div className="text-[#2D41A5] flex gap-2 items-center">
          <h3 className="text-[12px] font-bold">View Certification(s)</h3>{" "}
          <ArrowRight size="16" variant="Outline" />{" "}
        </div>
      </div>
      <div className="border-[1px] border-[#E6E9F2] px-4 py-2 rounded-lg my-2">
        <div className="flex items-center justify-between text-[#596080] font-poppins my-[10px]">
          <h2 className="font-bold text-[14px] ">My Progress</h2>
          <div className="flex items-center gap-2">
            <div className="border-[1px] border-[#E6E9F2] rounded-lg w-[32px] h-[32px] flex items-center justify-center">
              <Sort size="16" color="#2D41A5" variant="Outline" />
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <SearchNormal1 size="16" color="#E6E9F2" variant="Outline" />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-[35px] rounded-lg border-[1px] border-[#E6E9F2] h-[32px] w-[220px] text-[12px] "
                />
              </div>
              <button className="bg-[#2D41A5] rounded-lg w-[32px] h-[32px] flex items-center justify-center">
                <SearchNormal1 size="16" color="#E6E9F2" variant="Outline" />
              </button>
            </div>
          </div>
        </div>
        <hr className="h-[1px] text-[#E6E9F2]" />
        <table className="font-poppins text-[#596080] text-[14px] w-[100%]">
          <thead className="border-b-[1px] ">
            <tr>
              <th className="px-4 py-2 text-left">Course</th>
              <th className="px-4 py-2 text-left">Module</th>
              <th className="px-4 py-2 text-left">Assessment</th>
              <th className="px-4 py-2 text-left">Average Score</th>
              <th className="px-4 py-2 text-left">Course Progress</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-4 py-2">Understanding Behavioural Insights</td>
              <td className="px-4 py-2">3/5</td>
              <td className="px-4 py-2">2/5</td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <CircularProgress progress={85} /> 85%
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <CircularProgress progress={60} /> 60%
                </div>
              </td>
            </tr>
            <tr className="bg-[#F2F4FC]">
              <td className="px-4 py-2">Mastering Behavioural Change</td>
              <td className="px-4 py-2">4/7</td>
              <td className="px-4 py-2">3/7</td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <CircularProgress progress={37} /> 37%
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <CircularProgress progress={57} /> 57%
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">The Science of Influence</td>
              <td className="px-4 py-2">2/4</td>
              <td className="px-4 py-2">1/4</td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <CircularProgress progress={78} />
                  78%
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <CircularProgress progress={50} /> 50%
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr className="h-[1px] text-[#E6E9F2]" />
      </div>
    </>
  );
};
