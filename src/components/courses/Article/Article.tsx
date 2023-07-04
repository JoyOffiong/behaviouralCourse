import React from "react";
import image from "../../../../public/assets/image 5.png";
import Image from "next/image";
import Lesson from "@/core/models/lesson.model";
import ModuleModel from "@/core/models/module.model";
import RateCourse from "../RateCourse";
import Tabs from "@/core/interfaces/tabs.interface";
import TabsContainer from "@/components/TabsContainer/TabsContainer";
import DiscussionForum from "../VideoTabs/DiscussionForum";
import Resources from "../VideoTabs/Resources";
import UsefulLink from "../VideoTabs/UsefulLink";

interface ArticleProps {
  viewData: { moduleId: string; lessonId: string };
  modules: ModuleModel[];
}

export default function Article({ viewData, modules }: ArticleProps) {
  const [lesson, setLesson] = React.useState<Lesson>(new Lesson());
  const [loading, setLoading] = React.useState<boolean>(true);
  const [tabs] = React.useState<Tabs[]>([
    { key: 1, title: "Discussion Forum" },
    { key: 2, title: "Resources" },
    { key: 3, title: "Useful Links" },
  ]);

  const renderComps = (index: number) => {
    switch (index) {
      case 1:
        return <DiscussionForum />;
      case 2:
        return <Resources />;
      case 3:
        return <UsefulLink />;
      default:
        return null;
    }
  };

  React.useEffect(() => {
    getArticle(viewData);
  }, [viewData]);

  const getArticle = (viewData: { moduleId: string; lessonId: string }) => {
    if (modules && modules.length > 0) {
      modules.filter((module: ModuleModel) => {
        if (module.id === viewData.moduleId) {
          if (module.lessons && module.lessons.length > 0) {
            module.lessons.filter((lesson) => {
              if (lesson.id === viewData.lessonId) {
                setLesson(lesson);
                setLoading(false);
              }
            });
          }
        }
      });
    }
  };

  return (
    <>
      {!loading ? (
        <div className="flex flex-col mt-8 space-y-4 w-full">
          <div dangerouslySetInnerHTML={{ __html: lesson.article }}></div>

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
