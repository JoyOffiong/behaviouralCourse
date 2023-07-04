import React, { useState } from "react";
import Transcript from "../VideoTabs/Transcript";
import DiscussionForum from "../VideoTabs/DiscussionForum";
import TabsContainer from "@/components/TabsContainer/TabsContainer";
import Tabs from "@/core/interfaces/tabs.interface";
import Lesson from "@/core/models/lesson.model";
import ModuleModel from "@/core/models/module.model";
import FileUpload from "@/core/models/file-upload.model";
import ReactPlayer from "react-player/file";
import Resources from "../VideoTabs/Resources";
import UsefulLink from "../VideoTabs/UsefulLink";
import RateCourse from "../RateCourse";
import RightBar from "../../../../components/overview-right";
import VideoProgress from "@/core/interfaces/video-progress.interface";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth/core/types";
import userService from "@/core/services/user.service";
import { useRouter } from "next/router";
import useGlobalData from "@/core/hooks/useGlobalData";

interface VideoProps {
  viewData: { moduleId: string; lessonId: string };
  modules: ModuleModel[];
}

export default function Video({ viewData, modules }: VideoProps) {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [lesson, setLesson] = React.useState<Lesson>(new Lesson());
  const [video, setVideo] = React.useState<FileUpload>(new FileUpload());
  const [renderVideo, setRenderVideo] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [progressRecorded, setProgressRecorded] =
    React.useState<boolean>(false);
  const [currentTime, setCurrentTime] = React.useState<any>();
  const { loadUserProfile, user } = useGlobalData();
  const [tabs] = React.useState<Tabs[]>([
    { key: 1, title: "Transcript" },
    { key: 2, title: "Discussion Forum" },
    { key: 3, title: "Resources" },
    { key: 4, title: "Useful Links" },
  ]);
  const playerRef = React.useRef<any>();

  console.log("user :>> ", user);

  React.useEffect(() => {
    if (status === "unauthenticated") router.replace("/");
  }, [status]);

  React.useEffect(() => {
    getLesson(viewData);
  }, [viewData]);

  React.useEffect(() => {
    if (video)
      setRenderVideo(
        <div className="w-[100%] rounded-2xl">
          <ReactPlayer
            url={video.actualFileUrl}
            width={"100%"}
            height={"auto"}
            style={{ borderRadius: "50%" }}
            controls={true}
            ref={playerRef}
            onProgress={async (progress: VideoProgress) => {
              if (progress.played >= 0.8) {
                if (!progressRecorded) {
                  completeLesson();
                }
              }
            }}
            progressInterval={3000}
          />
        </div>
      );
  }, [video]);

  const getLesson = (viewData: { moduleId: string; lessonId: string }) => {
    if (modules && modules.length > 0) {
      modules.filter((module: ModuleModel) => {
        if (module.id === viewData.moduleId) {
          if (module.lessons && module.lessons.length > 0) {
            module.lessons.filter((lesson) => {
              if (lesson.id === viewData.lessonId) {
                setLesson(lesson);
                setVideo(lesson.video);
                setLoading(false);
              }
            });
          }
        }
      });
    }
  };

  const completeLesson = async () => {
    const dto = {
      lessonId: lesson.id,
    };

    const { ok, data }: any = await userService.completeLesson(
      dto,
      //@ts-ignore
      session?.user.accessToken
    );

    if (ok && data?.success) {
      console.log("hoooo");
      // @ts-ignore
      await loadUserProfile(session?.user.accessToken);
      setProgressRecorded(true);
    }
  };

  const renderComps = (index: number) => {
    switch (index) {
      case 1:
        return <Transcript />;
      case 2:
        return <DiscussionForum />;
      case 3:
        return <Resources />;
      case 4:
        return <UsefulLink />;
      default:
        return null;
    }
  };

  return (
    <>
      {!loading ? (
        <div>
          <div>
            <h4 className="font-sans text-[18px] text-[#36394D] ">
              {lesson.name}
            </h4>

            <div className="py-6 rounded-lg">
              <div className="w-[100%] border-[2px] rounded-lg border-black">
                {renderVideo}
              </div>
            </div>
          </div>
          <div className="mb-10">
            <TabsContainer tabs={tabs} renderComps={renderComps} />
          </div>

          <div>
            <RateCourse />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
