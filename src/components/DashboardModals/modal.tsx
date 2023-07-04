import { CloseCircle, Profile2User } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Modal1 from "./Modal1";

type props = {
  show: boolean;
  setShow: any;
};

const Modal = ({ show, setShow }: props) => {
  const [secondModal, setSecondModal] = useState(false);

  return (
    <>
      <div
        className={`fixed w-full h-full top-0 block left-0 right-0 z-24 items-center 
    ${show ? "block" : "hidden"}`}
        style={{ background: "rgba(0, 40, 40, 0.25)" }}
      >
        <div className="relative mt-40 mb-40 p-4 pt-2 rounded-2xl md:mb-20 lg:w-1/3 w-2/3 bg-white px-4 mx-auto ">
          <div className="flex justify-end pb-2 text-right">
            <CloseCircle
              height={18}
              width={18}
              color="red"
              className=""
              onClick={() => {
                setShow(false);
                setSecondModal(!secondModal);
                console.log(secondModal);
              }}
            />
          </div>
          <div className="flex flex-col items-center md:flex-row gap-6 bg-red">
            <div>
            {/* <div className="flex items-center justify-center bg-[#E6E9F2] h-[100px] w-[100px] text-center rounded-[50%]"> */}
              <Profile2User
                variant="Bulk"
                color="#596080"
                height={32}
                width={32}
                
              />
            {/* </div> */}
            </div>
            
            <div >
              <h5 className="pb-5 font-semibold text-[#36394D]">{`Yay...!!! you've got company`}</h5>
              <p className="text-[#596080]">{`25+ people have registered for the Behavioral Insight program`}</p>
            </div>
          </div>
        </div>
      </div>

      {/* {secondModal && <Modal1 secondModal ={secondModal} setSecondModal={setSecondModal}/>} */}
    </>
  );
};
export default Modal;
