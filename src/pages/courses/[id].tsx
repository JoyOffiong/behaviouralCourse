import { ArrowCircleRight } from "iconsax-react";
import React, { useState } from "react";
import Overview from "@/components/courses/Overview/Overview";
import Course from "@/core/models/course.model";
import { useRouter } from "next/router";
import courseService from "@/core/services/course.service";
import { getSession, useSession } from "next-auth/react";
import RightBar from "../../../components/overview-right";
import ModuleModel from "@/core/models/module.model";
import Article from "@/components/courses/Article/Article";
import Quiz from "@/components/courses/Quiz/Quiz";
import Video from "@/components/courses/Video/Video";

interface CourseOverviewProps {
  sessionn: any;
}

export default function CourseOverview({ sessionn }: CourseOverviewProps) {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [courseDetail, setCourseDetail] = React.useState<Course>(new Course());
  const [modules, setModules] = React.useState<ModuleModel[]>([]);
  const [activeView, setActiveView] = React.useState<number>(1);
  const [viewData, setViewData] = React.useState<{
    moduleId: string;
    lessonId: string;
  }>({
    moduleId: "",
    lessonId: "",
  });

  const { id, tracks, mId, lId }: any = router?.query;
  const courseId: string = id ? id : "";

  React.useEffect(() => {
    if (status === "unauthenticated") router.replace("/");
  }, [status]);

  React.useEffect(() => {
    if (tracks && mId && lId) {
      if (+tracks === 4) {
        setActiveView(+tracks);
        setViewData({
          moduleId: mId,
          lessonId: lId,
        });
      }
    }
  }, [tracks, mId, lId]);

  React.useEffect(() => {
    if (courseId) getCourse(courseId);
  }, [courseId]);

  const getCourse = async (id: string) => {
    const courseData: any = await courseService.getCourseDetails(
      id,
      // @ts-ignore
      session?.user.accessToken
    );

    if (courseData) {
      setCourseDetail(courseData);
      setModules(courseDetail.modules);
      setLoading(false);
    }
  };

  const [showBar, setShowBar] = useState(true);

  const open = () => {
    setShowBar(!showBar);
  };

  return (
    <>
      {!loading ? (
        <div className="flex-col md:flex-row mt-[1%]  flex justify-between pb-1 font-poppins">
          <div
            className={`w-full transition-all duration-10000 md:w-[${
              showBar ? "70%" : "100%"
            }] lg:mr-auto`}
          >
            {activeView === 1 && <Overview course={courseDetail} />}
            {activeView === 2 && (
              <Video viewData={viewData} modules={courseDetail.modules} />
            )}
            {activeView === 3 && (
              <Article viewData={viewData} modules={courseDetail.modules} />
            )}
            {activeView === 4 && (
              <Quiz viewData={viewData} course={courseDetail} />
            )}
          </div>

          <div className="hidden md:flex flex-col transition-all duration-10000 justify-center items-center lg:mr-2">
            <ArrowCircleRight
              size={24}
              color="#E6E9F2"
              variant="Outline"
              className="mb-2 "
              style={{
                transform: showBar ? "rotate(0deg) " : "rotate(-180deg)",
              }}
              onClick={() => open()}
            />
            <div className="w-[1px] h-full bg-[#E6E9F2]"></div>
          </div>

          {showBar ? (
            <RightBar
              activeView={activeView}
              setActiveView={setActiveView}
              course={courseDetail}
              viewData={viewData}
              setViewData={setViewData}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      sessionn: await getSession(context),
    },
  };
}
