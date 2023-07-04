 import { Facebook, Instagram, Twitch, Whatsapp } from 'iconsax-react'
import React from 'react'

function SocialLinksTab() {
    return (
        <>
            <div className='pt-8'>
                <div className="text-[#596080] mb-2 font-[14px] pb-4 rounded-lg border-b-10 border-b-[1px]  flex justify-between">
                    <div className='w-[80%] justify-between flex'>
                        <div className='flex gap-2'>
                            <Instagram size="20" color="
#F00073" variant="Bulk" /><span>Instagram</span>
                        </div>
                        <span>- </span></div>

                </div>
                <div className="text-[#596080] pt-4 font-[14px] pb-4  rounded-lg border-b-10 border-b-[1px] flex justify-between">
                    <div className='w-[80%] justify-between  flex'>
                        <div className='flex gap-2'>
                            <Facebook size="20" color="
#1877F2" variant="Bulk" /><span>Facebook</span>
                        </div>
                        <span>- </span></div>
                </div>
                <div className="text-[#596080] pt-4 font-[14px] pb-4  rounded-lg border-b-10 border-b-[1px] flex justify-between">
                    <div className='w-[80%] justify-between flex'>
                        <div className='flex gap-2'>
                            <Whatsapp size="20" color="
#25D366" variant="Bulk" /><span>WhatsApp</span>
                        </div>
                        <span>- </span></div>
                </div>
                <div className="text-[#596080] pt-4 font-[14px] pb-4 rounded-lg border-b-10 border-b-[1px] flex justify-between">
                    <div className='w-[80%] justify-between flex'>
                        <div className='flex gap-2'>
                            <Twitch size="20" color="
#1877F2" variant="Bulk" /><span>Twitter</span>
                        </div>
                        <span>- </span></div>
                </div>
            </div>
        </>
    )
}

export default SocialLinksTab