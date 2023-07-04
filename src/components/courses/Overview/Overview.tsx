import Course from "@/core/models/course.model";
import { Profile2User, RecordCircle, Star1 } from "iconsax-react";
import React from "react";

interface OverviewProps {
  course: Course;
}

const Overview = ({ course }: OverviewProps) => {
  // console.log("course :>> ", course);
  return (
    <>
      <div className="flex flex-col space-y-4 w-full">
        <div className="bg-[#182359] rounded-lg text-[#F2F4FC] p-4 mb-4 bgDashboard">
          <p className="text-[12px] text-[#B8BBCC] mb-2">Course Overview</p>
          <h2 className="text-[20px] text-[#F2F4FC] font-bold mb-3 font-poppins">
            {course?.name}
          </h2>
          <div className="flex space-x-4 mb-4">
            <div className="flex space-x-2">
              <Profile2User size="12" color="#B8BBCC" variant="Bulk" />
              <p className="text-[12px] text-[#B8BBCC]">50+ Students</p>
            </div>
            <div className="flex space-x-2">
              <Star1 size="12" color="#B8BBCC" variant="Bulk" />
              <p className="text-[12px] text-[#B8BBCC]">4.7 (230 Rating)</p>
            </div>
          </div>
          <p className="text-[12px] text-[#B8BBCC] mb-4 font-sans">
            {course?.overview}
          </p>
          <button className="p-2 text-[#E6E9F2] text-[12px] font-semibold border-[1px] border-[#FFDA00] rounded-md font-poppins">
            Start Course
          </button>
        </div>

        <div>
          <h1 className="text-[#36394D] text-[14px] font-extrabold mb-3">
            About the Courses
          </h1>
          <p className="text-[14px] text-[#596080]">{course?.about}</p>
        </div>
        <div>
          <h1 className="text-[#36394D] text-[14px] font-extrabold mb-3">
            Learning Objectives
          </h1>
          <p className="text-[14px] text-[#596080] mb-2">
            By the end of the course, participants will be able to:
          </p>
          <ul>
            {course.objectives &&
              course.objectives.map((objective: any, index: number) => {
                return (
                  <li
                    key={index.toString()}
                    className="flex space-x-2 items-center mb-2"
                  >
                    <RecordCircle size="16" color="#2D41A5" variant="Bulk" />
                    <p className="text-[14px] text-[#596080]">{objective}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Overview;
