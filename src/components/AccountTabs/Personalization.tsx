import { Edit } from "iconsax-react";
import React from "react";
import EditGoals from "../AccountModals/EditGoals";
import EditStudyTime from "../AccountModals/EditStudyTime";

function Personalization() {
  const days = ["Mondys", "Tuesdays", "Wednesdays"];
  const [show, setShow] = React.useState<boolean>(false);
  const [showTime, setShowTime] = React.useState<boolean>(false);

  return (
    <>
      <div className="font-sans">
        <div className="p-4 border-[1px] my-4 rounded-xl">
          <div className="flex justify-between items-center">
            <h4 className="text-[#36394D] pb-2 text-sm font-bold">
              Personal Goal
            </h4>
            <button className="flex gap-1 items-center font-semibold text-[#2D41A5]">
              <Edit
                size={16}
                color="#2D41A5"
                variant="Outline"
                onClick={() => setShow(true)}
              />
              Edit Goal
            </button>
          </div>

          <div className="text-[#596080] flex flex-col md:flex-row items-center justify-between pt-4 border-t-[1px] border-[#E6E9F2]">
            <p className="pb-4 md:pb-0">
              Why are you taking the Behavioral Insight Course?
            </p>
            <span className="text-[#B8BBCC] text-sm flex justify-start w-full md:w-[40%]">
              E.g to advance in my career
            </span>
          </div>
        </div>

        <div className="p-4 border-[1px] my-4 rounded-xl">
          <div className="flex justify-between items-center">
            <h4 className="text-[#36394D] pb-2 text-sm font-bold">
              Personal Goal
            </h4>
            <button className="flex gap-1 items-center font-semibold text-[#2D41A5]">
              <Edit
                size={16}
                color="#2D41A5"
                variant="Outline"
                onClick={() => setShowTime(true)}
              />
              Edit Time
            </button>
          </div>

          <div className="text-[#596080] flex md:flex-row flex-col md:items-center justify-between pt-4 border-t-[1px] border-[#E6E9F2]">
            <p className="pb-4"> Frequency</p>
            <span className="text-[#596080] text-sm flex justify-start w-full md:w-[40%] ">
              Weekly
            </span>
          </div>

          <div className="text-[#596080]  flex flex-col md:flex-row  md:items-center py-2 justify-between border-t-[1px] border-[#E6E9F2]">
            <p className="pb-4"> Days</p>
            <div className="flex gap-5 text-sm justify-start w-full md:w-[40%] ">
              {days.map((day, index) => (
                <span
                  key={index.toString()}
                  className="text-[#596080] bg-[#DADEF2] p-1 rounded-md"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <div className="text-[#596080] flex flex-col md:flex-row  md:items-center justify-between pt-4 border-t-[1px] border-[#E6E9F2]">
            <p className="pb-4"> Time</p>
            <span className="text-[#596080] text-sm flex justify-start w-full md:w-[40%] ">
              8PM
            </span>
          </div>

          <div className="text-[#596080] flex flex-col md:flex-row  md:items-center justify-between pt-4 border-t-[1px] border-[#E6E9F2]">
            <p className="pb-4"> Reminder:</p>
            <span className="text-[#596080] text-sm flex justify-start w-full md:w-[40%] ">
              30 Mins before Lecture
            </span>
          </div>
        </div>
      </div>

      {show && <EditGoals show={show} setShow={setShow} />}
      {showTime && <EditStudyTime show={showTime} setShow={setShowTime} />}
    </>
  );
}

export default Personalization;
