import { CloseSquare } from 'iconsax-react'
import Image from 'next/image';
import React from 'react';
import radio from '../../../public/assets/radio.png'

type props = {
  show: boolean;
  setShow: any;
};

function PointsModal({ show, setShow }: props) {


  return (
    <div
      className={`fixed font-sans w-full h-full top-0 block left-0 right-0 z-24 items-center 
${show ? "block" : "hidden"}`}
      style={{ background: "rgba(0, 40, 40, 0.25)" }}
    >
        <div className="relative overflow-y-scroll mt-5 mb-40 px-6 md:px-12  pt-2 rounded-2xl md:mb-20 lg:w-5/12 w-[80%] bg-white  mx-auto ">
          <div className='flex justify-between my-5 pb-2 pl-2 rounded-lg border-b-10 border-b-2'>
          <p>Info</p>

          <CloseSquare
            size="32"
            color="#f47373"
            variant="Bulk"
            onClick={()=>setShow(false)}
          />
        </div>

        <div>
          <h4 className='pb-5 font-bold text-lg text-[#36394D]'>How to earn more points</h4>

          <li className='text-[#596080] text-sm pb-4 list-none flex flex-row ' >
            <p className='w-1/12'>
              <Image src={radio} alt='points' height={16} width={16} className='object-cover' />
            </p>

            Earn 2 gems when you complete your profile

          </li>
          <li className='text-[#596080] text-sm pb-4 list-none flex flex-row ' >
            <p className='w-1/12'>
              <Image src={radio} alt='points' height={16} width={16} className='object-cover' />
            </p>Earn 2 gems for every comment on the discussion forum</li>
          <li className='text-[#596080] text-sm pb-4 list-none flex flex-row ' >
            <p className='w-1/12'>
              <Image src={radio} alt='points' height={16} width={16} className='object-cover' />
            </p>Earn 2 gems when you rate a course</li>
          <li className='text-[#596080] text-sm pb-4 list-none flex flex-row ' >
            <p className='w-1/12'>
              <Image src={radio} alt='points' height={16} width={16} className='object-cover' />
            </p>Earn 5 gems for every lesson you attend</li>
          <li className='text-[#596080] text-sm pb-4 list-none flex flex-row ' >
            <p className='w-1/12'>
              <Image src={radio} alt='points' height={16} width={16} className='object-cover' />
            </p>Earn 10 gems when you score above in each quiz</li>
        </div>
        <div className="  mt-10 flex justify-end">
          <button className="bg-[#2D41A5] py-4 px-12 mr-4 mb-4 text-white font-semibold font-white rounded-lg buttonShadow">
            Close
          </button>

        </div>
      </div>
    </div>
  )
}

export default PointsModal