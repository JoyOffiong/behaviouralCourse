import { Dislike, Edit, Like1, Star1 } from 'iconsax-react'
import React from 'react'

function RateCourse() {
    return (

        <div className='border-[1px] my-5 p-3 border-[#E6E9F2] rounded-lg'>
            <div className="flex justify-between flex-col md:flex-row">

                <div className="flex flex-row gap-5 mb-4 md:mb-[0] items-center w-[100%] md:w-[50%]">
                    <p className="text-[#596080] font-medium">Rate Course:</p>
                    <div className="gap-1 flex flex-row"><Star1 size="16" color="#B8BBCC" variant="Bulk" /> <Star1 size="16" color="#B8BBCC" variant="Bulk" /> <Star1 size="16" color="#B8BBCC" variant="Bulk" /><Star1 size="16" color="#B8BBCC" variant="Bulk" /><Star1 size="16" color="#B8BBCC" variant="Bulk" /><div />
                    </div>
                </div>

                <div className="flex  flex-row gap-3 items-center">

                    <button className="bg-[#EBEEFC] p-2 gap-1  text-[#596080] flex items-center rounded-lg"> <Like1 size="16" color="#596080" variant="Bulk" /><span className="text-xs">Like </span> </button>


                    <button className="bg-[#EBEEFC] p-2 gap-1  text-[#596080] flex items-center rounded-lg"> <Dislike size="16" color="#596080" variant="Bulk" /> <span className="text-xs">Dislike </span> </button>

                    <div className=" w-[3px] bg-[#DADEF2]"></div>

                    <button className="bg-[#EBEEFC] gap-1 p-2 text-[#596080] flex items-center rounded-lg"> <Edit size="16" color="#596080" variant="Bulk" />   <span className="text-xs">Leave Feedback</span> </button>

                </div>

            </div>

        </div>

    )
}

export default RateCourse