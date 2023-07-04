import { InfoCircle } from 'iconsax-react'
import React from 'react'

function ProfileTab() {
    return (
        <>
            <div className='py-8 font-sans'>
                <div className="text-[#596080] mb-2 font-[14px] pb-4 rounded-lg border-b-10 border-b-[1px]  flex justify-between">
                    <div className='w-[80%] gap-3 flex-col md:flex-row justify-between flex'>
                        <span>Email</span>
                        <span>jhayoffiongmail.com</span></div>

                </div>
                <div className="text-[#596080] pt-4 font-[14px] pb-4  rounded-lg border-b-10 border-b-[1px] flex justify-between">
                    <div className='w-[80%] gap-3 justify-between flex-col md:flex-row  flex'><span>Phone Number</span> <span>09132765453</span></div>

                </div>
                <div className="text-[#596080] gap-3 pt-4 font-[14px] pb-4  rounded-lg border-b-10 border-b-[1px]  flex justify-between">
                    <div className='w-[80%] gap-3 justify-between flex-col md:flex-row  flex'><span>Gender</span> <span>Female</span></div>

                </div>
                <div className="text-[#596080] gap-3 pt-4 font-[14px] pb-4  rounded-lg border-b-10 border-b-[1px]  flex justify-between">
                    <div className='w-[80%] flex-col md:flex-row  justify-between flex'><span>Organization</span> <span>-</span></div>

                </div>


            </div>

            <div>
                <div className='py-4 flex  gap-2 text-[#596080] font-[14px]  '><input type="checkbox" name="" id="" /> <p>Make my Profile Public</p></div>
                <div className='bg-[#F0F4FC] my-4 p-6 rounded-2xl flex gap-2'>
                    <InfoCircle size="24" color='#2E5AAC' variant="Bulk" /> <p className=' text-[#596080] font-[14px]'>When your profile is set to public, other users can see your contact information (name, email, Organization and social links)</p>
                </div>
            </div>
        </>

    )
}

export default ProfileTab