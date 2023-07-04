import React, { useEffect, useRef } from "react";
import { CssBaseline } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/assets/Logo.png";
import { Notification, ArrowDown2, Chart2, LogoutCurve, Profile } from "iconsax-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const [showmenu, setShowMenu] = React.useState(false)
  const { status, data: session } = useSession();

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          !(e.target instanceof SVGElement) &&
          !(e.target instanceof HTMLDataElement)
        ) {
          setShowMenu(false);
        }
      };
  
      window.addEventListener('click', handleClickOutside);
  
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, []);


  return (
    <>
      <CssBaseline />
      <div className="relative h-[64px] font-sans mx-[8%] px-[2%] headerBorder py-[16px] flex justify-between border-b-[2px] items-center">
        <Image src={logo} width={70} alt="logo"/>
        <div className="flex relative  justify-evenly items-center space-x-4 " onMouseOver={() => { setShowMenu(true) }}>
          <div className=" hidden md:block border-[#B8BBCC] border-[1px] p-1 rounded-[12px] ">
            <Notification size="24" color="#596080" variant="Bulk" />
          </div>

          <h1 className="text-[20px] text-slate-200">|</h1>
          <h3 className="text-[#596080] font-[14px] font-sans">{`${session?.user.firstName} ${session?.user.lastName}`}</h3>
          <div className="space-x-1 flex items-center">
            <div className="border-[#B8BBCC] border-[1px] p-0.5 rounded-[12px] border-t-r-0 ">
              <h3 className="bg-[#2D41A5] rounded-[10px] p-1.5 text-[14px] text-slate-100 font-bold">
                {`${session?.user.firstName[0]}${session?.user.lastName[0]}`}
              </h3>
            </div>

            <ArrowDown2 size={16} color="#596080" variant="Bold" />
          </div>
        </div>

        {showmenu &&
        
        (<div className=" text-[#596080] font-sans shadow-sm transition ease-in-out transition-x-full shadow-white absolute -right-[100px] z-10 mt-52 w-56 origin-top-right rounded-[10px] bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="p-4 font-normal">

            <div className="flex items-center pb-2 gap-2 border-b-[1px] border-[#E6E9F2]">
              <Profile size="20" color="#596080" variant="Bulk" />
              <a href="#" className="text-gray-700 py-2 text-sm leading-5" role="menuitem" id="menu-item-0">My Profile</a>
            </div>



            <div className="flex items-center py-2 gap-2 border-b-[1px] border-[#E6E9F2]">
              <Chart2 size="20" color="#596080" variant="Bulk" />
              <a href="#" className="text-gray-700 text-sm  py-2 leading-5" role="menuitem" id="menu-item-1">Progress</a>
            </div>


            <button type="submit"  onClick={() => signOut()} className="flex py-2 gap-2 items-center text-gray-700 w-full text-left text-sm" role="menuitem" id="menu-item-3"  >
              <LogoutCurve size="20" color="#596080" variant="Bulk" />
              LogOut</button>

          </div>

        </div>)}

      </div>
    </>
  );
};

export default Header;
