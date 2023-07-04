import React from "react";
import Courses from "../../../components/home-courses";
import { useSession } from "next-auth/react";
import CircularProgressBar from "@/components/CirclarProgress/CircularProgress";
import { Clock, Edit, Video } from "iconsax-react";
// import modal from "@/components/DashboardModals/modal";
import Modal1 from "@/components/DashboardModals/Modal1";
import CircularProgress from "@/components/AccountTabs/progress/circularProgress";
// import Modal2 from "@/components/DashboardModals/modal2";
// import Modal3 from "@/components/DashboardModals/modal3";

export default function Home() {
  const { status, data: session } = useSession();

  const [show, setShow] = React.useState(true);
  const [show1, setShow1] = React.useState(false);

  return (
    <>
      <div className="bg-[#182359] bgDashboard font-sans rounded-2xl mx-auto flex-col md:flex-row  mt-6 py-6  lg:px-12 px-6 flex justify-between">
        <div className="flex flex-col justify-between mr-auto">
          <h1 className="font-bold text-md pb-5 leading-5 text-white text-[20px] font-sans">
            Hi,{` ${session?.user.firstName}`}👋🏽
          </h1>
          <p className="text-[#B8BBCC] text-sm font-sans lg:mb-auto mb-5">
            It’s great to have you back 😊
          </p>
          <div className="flex items-center gap-2">
            <Edit variant="Bulk" size={20} color="white" />
            <p className=" text-white text-[12px] font-thin font-sans">
              Personalize my learning Journey
            </p>
          </div>
        </div>

        <div className=" md:border-l-[1px] border-t-[1px] lg:mr-12 lg:my-0 my-6 border-[#596080]"></div>

        <div className="flex md:flex-col flex-row text-center items-center border-l-0  md:border-t-0 border-b-0   ">
          {/* <CircularProgress progress={10}/>  */}
          <div className="flex flex-col mt-5 items-center align-middle rounded-full w-[100px] h-[100px] p-1 border-[4px] border-[#596080]">
            <h1 className="text-white font-bold text-[32px] font-sans">0%</h1>
            <h5 className="text-white text-[10px] font-sans">Progress</h5>
          </div>
          <p className="pt-4 text-[14px] text-[#B8BBCC]">
            Not to worry, baby steps 😊
          </p>
        </div>
      </div>

      <div className="lg:flex pt-6 hidden items-center ">
        <CircularProgressBar value={80} label={"12"} size={25} />
        <p className="text-[#36394D] text-[14px] font-sans">
          Your Program ends 25th July, 2023
        </p>
      </div>

      <p className="text-[#36394D] font-semibold pt-14 pb-4 font-sans">
        {`Here's the last step you visited`}
      </p>

      <div className="rounded-2xl bg-[#F2F4FC] p-3 flex  md:flex-row justify-between items-center ">
        <div className=" rounded-2xl p-4 bg-[#E6E9F2] flex items-center">
          <Video size={32} variant="Bulk" color="#2D41A5" />
        </div>

        <div className="lg:ml-4 ml-2 mr-auto">
          <p className="text-[#36394D] lg:text-[16px] text-[12px] font-normal font-sans">
            What is Behavioural Insights?
          </p>
          <div className="flex items-center font-sans">
            <Clock
              size={20}
              color="#2D41A5"
              variant={"Bulk"}
              style={{ marginRight: "6px" }}
            />
            <p className="text-[12px]">{"1hr, 30mins"}</p>
          </div>
        </div>

        <button type="button" className="flex items-center">
          <p className=" text-[#2D41A5] text-[12px] font-bold hidden lg:flex font-sans">
            Go to Class
          </p>

          <div className="ml-1 lg:rounded-none lg:text-transparent lg:bg-transparent rounded-lg p-2 bg-[#2D41A5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="lg:w-6 lg:h-6 w-4 h-4  text-white lg:text-[#2D41A5]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </button>
      </div>

      <Courses />
      {show && (
        <Modal1
          show={show}
          setShow={setShow}
          show1={show1}
          setShow1={setShow1}
        />
      )}
    </>
  );
}
