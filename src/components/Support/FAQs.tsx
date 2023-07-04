import { AddCircle, Clock, CloseCircle, Discover } from "iconsax-react";
import React, { useState } from "react";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const questions = [
    {
      question:
        "How can Behavioral Analysis be applied in real-world scenarios?",
      answer: "How can Behavioral Analysis be applied in real-world scenarios?",
    },
    {
      question: " How can an LMS help in learning Behavioral Analysis?",
      answer: " How can an LMS help in learning Behavioral Analysis?",
    },
    {
      question:
        "What are the key topics covered in an LMS course on Behavioral Analysis?",
      answer:
        "What are the key topics covered in an LMS course on Behavioral Analysis?",
    },
  ];
  return (
    <>
      {questions.map((question, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`${isOpen && `border-[1px] border-t-0 rounded-2xl`}`}
          >
            <div
              key={index}
              className={`font-sans  p-4 flex justify-between my-4 border-[1px] rounded-lg text-sm font-normal ${
                isOpen &&
                `mb-12 rounded-t-lg bg-[#2D41A5] p-4 items-center rounded-none text-[white] flex justify-between`
              } `}
              onClick={() => toggleAccordion(index)}
            >
              {question.question}{" "}
              <span>
                {isOpen ? (
                  <CloseCircle size=" 24" color="#fff" variant="Outline" />
                ) : (
                  <AddCircle size="16" color="#000" variant="Outline" />
                )}
              </span>
            </div>
            <div
              className={`rounded-lg border-b-[none] rounded-t-none overflow-hidden transition-all duration-700 ${
                isOpen ? "max-h-[500px] p-4 -mt-12" : "max-h-0 p-0"
              }`}
            >
              <div className="overflow-hidden">{question.answer}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
