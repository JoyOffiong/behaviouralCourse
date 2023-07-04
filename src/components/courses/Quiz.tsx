import { RecordCircle } from "iconsax-react";
import React from "react";
import Link from "next/link";
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

          //
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
          <div className="bg-[#182359] bgDashboard font-sans rounded-2xl mx-auto flex-col md:flex-row px-4 md:px-0 text-center  mt-6  md:pl-12 flex justify-between">
            <div className="py-8 text-left">
              <h1 className="font-bold text-md pb-5 leading-5 text-white text-[20px] ">
                {`${lesson.lessonNumber}. Test your knowledge: Quiz`}
              </h1>
              <p className="text-[#B8BBCC] text-sm pb-24">{module.name}</p>
            </div>
            {/* <div className="flex gap-20"> */}
            <div className=" md:border-l-[1px] md:ml-[20rem] border-t-[1px] lg:my-0 my-6 border-[#596080]"></div>

            <div className="flex md:flex-col gap-4 md:gap-0 flex-row text-center items-center border-l-0  md:border-t-0 border-b-0   ">
              <div className="flex  flex-col mt-5 items-center align-middle rounded-full w-[100px] h-[100px] p-4 border-[4px] border-[#fff]">
                <h1 className=" text-[32px] font-sans text-[#596080]">0%</h1>
              </div>
              <p className="pt-4 text-[14px] text-[#596080]">
                Not to worry, baby steps 😊
              </p>
            </div>
            {/* </div> */}
          </div>

          <div className="mt-20">
            <p className="font-bold text-sm text-[#36394D]">
              Review your Learning
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
                className="bg-[#2D41A5]  transition-all duration-700 ease-in-out hover:bg-[#233280] hover:rounded-3xl text-white text-[14px] font-sans font-medium rounded-lg px-6 py-2  "
              >
                Start Quiz
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
