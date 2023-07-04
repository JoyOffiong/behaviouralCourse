import React from "react";
import { useSession } from "next-auth/react";
import Course from "@/core/models/course.model";
import courseService from "@/core/services/course.service";
import CourseCard from "@/components/CourseCard/CourseCard";

const Courses = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    if (session?.user) getCourses();
  }, [session]);

  const getCourses = async () => {
    if (session?.user) {
      const data = await courseService.getCourses(session?.user.accessToken);

      // console.log("data :>> ", data);
      if (data && data.length > 0) {
        setCourses(data);

        setLoading(false);
      }
    }
  };
  return (
    <>
      <h3 className="text-[#36394D] text-base py-8 font-bold font-sans">
        Courses
      </h3>
      <div className=" pb-14 grid lg:grid-cols-3  sm:grid-cols-2 gap-x-6  item-center">
        {courses.map((course, index) => (
          <CourseCard item={course} key={index.toString()} />
        ))}
      </div>
    </>
  );
};
export default Courses;
