import ChangePassword from "@/components/AccountModals/ChangePassword";
import Personalization from "@/components/AccountTabs/Personalization";
import SocialLinksTab from "@/components/AccountTabs/SocialLinksTab";
import ProfileTab from "@/components/AccountTabs/profileTab";
import {Progress} from "@/components/AccountTabs/progress";
import TabsContainer from "@/components/TabsContainer/TabsContainer";
import Tabs from "@/core/interfaces/tabs.interface";
import { Diamonds, Dislike, Edit, Edit2, Like1, Profile, SecurityUser, Star1, Teacher } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";


export default function Account() {

  const [tabs] = React.useState<Tabs[]>([
    { key: 1, title: "Profile" },
    { key: 2, title: "Social Links" },
    { key: 3, title: "Progress" },
    { key: 4, title: "Personalization" },
  ]);
  const renderComps = (index: number) => {
    switch (index) {
      case 1:
        return <ProfileTab />;
        case 2:
          return <SocialLinksTab />;
          case 3:
            return <Progress />;
            case 4:
              return <Personalization/>;
      default:
        return null;
    }
  };

  const [show, setShow] = useState(false)
  return (
    <>
      <div className="font-sans">


        <div className="bg-[#DADEF2]  bgDashboard font-sans rounded-2xl mx-auto flex-col md:flex-row  mt-6 py-6  lg:px-12 px-6 flex justify-between">
        <div className="flex items-center gap-8 w-[50%]">
            <div className="relative">  
              <div className="w-[100px] h-[100px] items-center rounded-[50%] bg-[#182359]">
                <Profile
                  size="64"
                  color="#B8BBCC"
                  variant="Bulk"
                  className="absolute top-1/4 left-5"
                />
              </div>
              <div className="absolute bottom-[0] right-0 h-[30px] w-[30px] border-4 text-center bg-[#F2F4FC] p-1 border-[#B8BBCC] rounded-[50%]">
                <Edit2 size="16" color="#596080" variant="Bulk" />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <h1 className="font-bold text-md pb-5 leading-5 text-[#36394D] text-[20px] ">
                Olakunle Samson
              </h1>
              <div className="flex text-sm items-center">
                <Diamonds size="16" color="#596080" variant="Bulk" /> Fresher
              </div>
              <p className="pt-8 text-sm font-normal">Profile Completion</p>
            </div>
          </div>

        <div className=" md:border-l-[1px] border-t-[1px] lg:mr-12 lg:my-0 my-6 border-[#596080]"></div>

        <div className="flex md:flex-col flex-row text-center items-center border-l-0  md:border-t-0 border-b-0   ">
          {/* <CircularProgress progress={10}/>  */}
          <div className="flex flex-col mt-5 items-center align-middle rounded-full w-[100px] h-[100px] p-1 border-[4px] border-[#FFF]">
            <h1 className="text-[#596080] font-bold text-[32px] font-sans">0%</h1>
            <h5 className="text-[#596080] text-[10px] font-sans">Progress</h5>
          </div>
          <p className="pt-4 text-[14px] text-[#B8BBCC]">
            Not to worry, baby steps 😊
          </p>
        </div>
      </div>

        <div className="flex items-center pt-8  justify-between">
          <div className="flex gap-2 items-center w-1/3">
            <Teacher size="20" color="#36394D" variant="Bulk" />{" "}
            <p className="text-[#36394D] text-sm font-normal">
              June 2023 - July, 2023
            </p>
          </div>
        
          <div className="flex  items-center cursor-pointer" onClick={()=>setShow(true)}>
            <SecurityUser size="20" color="#182359" variant="Outline" />{" "}
            <p className="text-[#36394D] text-sm font-normal">
              {" "}
              Change Password
            </p>
          </div>
        </div>




        <div className="mt-4">
          <TabsContainer tabs={tabs} renderComps={renderComps}/>
        </div>
      </div>

      {show && <ChangePassword show={show} setShow={setShow}/>}
    </>
  );
}
