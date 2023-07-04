import { Book1 } from "iconsax-react";
import React from "react";
import Module1 from "./Module1";
import Course from "@/core/models/course.model";

type Props = {
  activeView: number;
  setActiveView: any;
  course: Course;
  viewData: { moduleId: string; lessonId: string };
  setViewData: any;
};
export default function RightBar({
  activeView,
  setActiveView,
  viewData,
  setViewData,
  course,
}: Props) {
  return (
    <div className="w-full lg:w-[23%] mt-2 lg:mt-0">
      <div className="border-[2px] rounded-lg w-[100%] p-2">
        <h1 className="text-[14px] text-[#36394D] font-bold mb-2 ">
          Course Overview
        </h1>
        <div
          onClick={() => setActiveView(1)}
          className="flex space-x-2 items-center hover:cursor-pointer"
        >
          <Book1 size="18" color="#2D41A5" variant="Bulk" />
          <p className="text-[12px] text-[#2D41A5]">{course?.name}</p>
        </div>
      </div>

      {course.modules &&
        course.modules.map((module, index) => (
          <Module1
            key={index.toString()}
            activeView={activeView}
            setActiveView={setActiveView}
            module={module}
            viewData={viewData}
            setViewData={setViewData}
          />
        ))}
    </div>
  );
}
