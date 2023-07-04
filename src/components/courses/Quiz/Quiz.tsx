import { RecordCircle } from "iconsax-react";
import React from "react";
import ModuleModel from "@/core/models/module.model";
import Lesson from "@/core/models/lesson.model";
import { default as QuizModel } from "@/core/models/quiz.model";
import Course from "@/core/models/course.model";
import { useRouter } from "next/router";

interface QuizProps {
  viewData: { moduleId: string; lessonId: string };
  course: Course;
}

const Quiz = ({ viewData, course }: QuizProps) => {
  const router = useRouter();
  const [lesson, setLesson] = React.useState<Lesson>(new Lesson());
  const [module, setModule] = React.useState<ModuleModel>(new ModuleModel());
  const [quiz, setQuiz] = React.useState<QuizModel>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    getLesson(viewData);
  }, [viewData]);

  const getLesson = (viewData: { moduleId: string; lessonId: string }) => {
    if (course?.modules && course?.modules.length > 0) {
      course?.modules.filter((module: ModuleModel) => {
        if (module.id === viewData.moduleId) {
          setModule(module);

          if (module.lessons && module.lessons.length > 0) {
            module.lessons.filter((lesson) => {
              if (lesson.id === viewData.lessonId) {
                setLesson(lesson);
                setQuiz(lesson.quiz);

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
        <div className="pt-10">
          <h1 className="text-[18px] font-bold text-[#36394D] mb-2">
            {`Course: ${course?.name}`}
          </h1>

          <div className="bg-[#182359] bgDashboard font-sans rounded-2xl mx-auto flex-col md:flex-row  mt-6 py-6  lg:px-12 px-6 flex justify-between">
            <div className="flex flex-col justify-between mr-auto">
              <p className="text-[#B8BBCC] text-sm font-sans lg:mb-auto mb-5">
                {`Module 1`}
              </p>
            </div>

            <div className=" md:border-l-[1px] border-t-[1px] lg:mr-12 lg:my-0 my-6 border-[#596080]"></div>

            <div className="flex md:flex-col gap-4 md:gap-0 flex-row text-center items-center border-l-0  md:border-t-0 border-b-0">
              <div className="flex flex-col mt-5 items-center align-middle rounded-full w-[100px] h-[100px] p-1 border-[4px] border-[#596080]">
                <h1 className="text-white text-[32px] font-sans">{`0%`}</h1>
                <h5 className="text-white text-[10px] font-sans">{`Progress`}</h5>
              </div>
              <p className="pt-4 text-[14px] text-[#B8BBCC]">
                {`Not to worry, baby steps 😊`}
              </p>
            </div>
          </div>

          <div className="mt-20">
            <p className="font-bold text-sm text-[#36394D]">
              {`Review your Learning`}
            </p>

            <ul>
              {quiz?.instructions.map((instruction, index) => {
                return (
                  <li
                    key={index.toString()}
                    className=" mt-4 flex space-x-2 items-center mb-2"
                  >
                    <RecordCircle size="16" color="#2D41A5" variant="Bulk" />
                    <p className="text-[14px] text-[#596080]">{instruction}</p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 mb-4">
              <button
                onClick={() =>
                  router.push({
                    pathname: "/quiz",
                    query: {
                      cId: course.id,
                      mId: module.id,
                      lId: lesson.id,
                    },
                  })
                }
                className="bg-[#2D41A5] text-white text-[14px] font-sans font-medium rounded-lg px-6 py-2"
              >
                {`Start Quiz`}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Quiz;
