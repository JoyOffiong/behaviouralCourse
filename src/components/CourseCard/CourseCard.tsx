import React from "react";
import LinearProgressBar from "@/components/LinearProgressBar/LinearProgressBar";
import { Layer, Clock, ArrowRight } from "iconsax-react";
import Course from "@/core/models/course.model";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface CourseCardProps {
  item: Course;
}

export default function CourseCard({ item }: CourseCardProps) {
  const router = useRouter();
  const [progress, setProgress] = React.useState(10);
  return (
    <div
      onClick={() => router.push("/courses/[id]", `/courses/${item.id}`)}
      className="bg-white rounded-2xl boxShadow mb-5 lg:max-h-[350px] "
    >
      <div className="rounded-t-2xl h-[60%]">
        <img
          src={item.thumbnailUrl}
          alt="image"
          className=" object-cover w-[100%] h-[100%] rounded-t-2xl"
        />
      </div>

      <div className="p-4 h-[40%] flex flex-col justify-between ">
        <div className="flex pb-2 justify-between">
          <p className="font-sans lg:text-[16px] font-medium text-[14px] leading-tight ">
            {item.name}
          </p>
          <ArrowRight size={20} color="#2D41A5" style={{ marginLeft: "8px" }} />
        </div>

        <div className="flex my-2 ">
          <div className="flex items-center mr-6">
            <Layer
              size={20}
              variant={"Bulk"}
              color="#2D41A5"
              style={{ marginRight: "6px" }}
            />
            <p className="text-[12px] font-sans">
              {`${item.modules ? item?.modules.length : 0} Modules`}
            </p>
          </div>
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
        <Box sx={{ width: "100%" }}>
          <LinearProgressBar value={progress} />
        </Box>
      </div>
    </div>
  );
}
