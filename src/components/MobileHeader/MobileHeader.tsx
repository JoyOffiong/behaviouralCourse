import Image from "next/image";
import React, {useState, useEffect} from "react";
import mobileLogo from "../../../public/assets/MobileLogo.png";
import { HambergerMenu } from "iconsax-react";
import { CssBaseline } from "@mui/material";
import Sidebar from "../SideBar/SideBar";
import MobileSidebar from "./MobileSideBar";
const MobileHeader = () => {

  const [showMenu, setShowMenu]= useState(false)

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
    
    }
  }, [])
  


  return (
    <>
      <CssBaseline />
      
      <div className="relative h-[64px]  bg-black mx-[4%] px-[2%] headerBorder py-[16px] flex justify-between items-center">
        <div className="flex justify-between bg-[#36394D] w-full rounded-xl p-[8px]">
          <HambergerMenu width={32} color="#d9e3f0" variant="Bold" onClick={()=>setShowMenu(true)}/>

          {/* logo */}
          <Image src={mobileLogo} width={54} height={25} alt="mobileLogo" />
        </div>
      </div>

      {/* mobileheader */}
      {showMenu &&  <div className="flex justify-end absolute top-10 right-0">
      <MobileSidebar/>
      </div> }
     
   
    </>
  );
};
export default MobileHeader;
