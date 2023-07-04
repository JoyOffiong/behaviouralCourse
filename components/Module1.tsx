import { LessonType } from "@/core/enums/lesson-type";
import ModuleModel from "@/core/models/module.model";
import CircularProgress from "@/components/AccountTabs/progress/circularProgress";
import {
  ArrowDown2,
  Book1,
  BookSaved,
  Clock,
  MessageQuestion,
  PauseCircle,
  RecordCircle,
  Video,
} from "iconsax-react";
import React, { useState } from "react";

interface AccordionProps {
  module: ModuleModel;
  activeView: number;
  setActiveView: any;
  viewData: { moduleId: string; lessonId: string };
  setViewData: any;
}

const Module1: React.FC<AccordionProps> = ({
  module,
  activeView,
  setActiveView,
  viewData,
  setViewData,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bg, setbg] = useState("#EBEEFC");
  const [activeLesson, setActiveLesson] = useState(true);
  const [color, setColor] = useState("#596080");

  const toggleAccordion = () => {
    if (!isOpen) {
      setIsOpen(true);
      setbg("#2D41A5");
      setColor("#F2F4FC");
    } else {
      setIsOpen(false);
      setbg("#EBEEFC");
      setColor("#596080");
    }
  };

  return (
    <>
      <div className="border-[2px] font-sans rounded-lg  w-[100%] mt-2">
        <div
          className={`flex justify-between items-center rounded-t-lg bg-[${bg}] w-[100%] p-4`}
          onClick={toggleAccordion}
        >
          <div className="space-x-2 flex text-[#596080] items-center ">
            <ArrowDown2
              size="14"
              color={`${color}`}
              style={{
                transform: isOpen ? "rotate(-180deg) " : "rotate(0deg)",
              }}
              variant="Bold"
            />
            <p className={`text-[14px] text-[${color}]`}>{module.name}</p>
          </div>
          <div>
            <CircularProgress progress={20} />
          </div>
        </div>

        {isOpen && (
          <>
            {module.lessons &&
              module.lessons.map((lesson, index) => {
                return (
                  <div
                    key={index.toString()}
                    className="w-[94%] my-4 mx-auto"
                    onClick={() => {}}
                  >
                    <div className="flex justify-between">
                      <div className="mr-[12px]">
                        <div className="flex justify-center text-center items-center rounded-[50%] border-[1px] border-[#596080] w-[15px] h-[15px] ">
                          <span className="text-[7.5px] font-bold">{`0${
                            index + 1
                          }`}</span>
                        </div>
                      </div>
                      <div className="flex w-[90%] justify-between">
                        <p
                          onClick={() => {
                            lesson.type === LessonType.Video
                              ? setActiveView(2)
                              : lesson.type === LessonType.Article
                              ? setActiveView(3)
                              : lesson.type === LessonType.Quiz
                              ? setActiveView(4)
                              : null;

                            setViewData({
                              moduleId: module.id,
                              lessonId: lesson.id,
                            });
                          }}
                          className={` ${
                            lesson.type === LessonType.Video && activeView === 2
                              ? "font-bold text-[#596080]"
                              : lesson.type === LessonType.Article &&
                                activeView === 3
                              ? "font-bold text-[#596080]"
                              : lesson.type === LessonType.Quiz &&
                                activeView === 4
                              ? "font-bold text-[#596080]"
                              : null
                          } text-[12px] hover:cursor-pointer`}
                        >
                          {lesson.name}
                        </p>
                        <input
                          type="radio"
                          className="text-[16px]  text-[#596080]"
                        />
                      </div>
                    </div>

                    <div className="flex ml-7 pt-1  space-x-2">
                      <div className="flex space-x-1 items-center">
                        {lesson.type === LessonType.Video ? (
                          <Video size="16" color="#596080" variant="Bulk" />
                        ) : lesson.type === LessonType.Article ? (
                          <BookSaved size="16" color="#596080" variant="Bulk" />
                        ) : lesson.type === LessonType.Article ? (
                          <MessageQuestion
                            size="16"
                            color="#596080"
                            variant="Bulk"
                          />
                        ) : null}
                        <p className="text-[10px]">{lesson.type}</p>
                      </div>
                      <div className="text-[#596080]">|</div>
                      <div className="flex space-x-1 items-center">
                        <Clock size="16" color="#596080" variant="Bulk" />
                        <p className="text-[10px] ">{lesson?.duration}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default Module1;
