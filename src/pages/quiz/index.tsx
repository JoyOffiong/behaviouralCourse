import React from "react";
import { ArrowLeft, TickCircle } from "iconsax-react";
import Lesson from "@/core/models/lesson.model";
import { useRouter } from "next/router";
import { default as QuizModel } from "@/core/models/quiz.model";
import Course from "@/core/models/course.model";
import ModuleModel from "@/core/models/module.model";
import { useSession } from "next-auth/react";
import courseService from "@/core/services/course.service";
import QuestionOption from "@/core/models/questionOption.model";
import Question from "@/core/models/question.model";
import Answer from "@/core/models/answer.model";
import AlertDialog from "@/components/AlertDialog/AlertDialog";
import answerService from "@/core/services/answer.service";
import Spinner from "@/components/Spinner/Spinner";
import useGlobalData from "@/core/hooks/useGlobalData";

export default function Quiz() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [courseDetail, setCourseDetail] = React.useState<Course>(new Course());
  const [lesson, setLesson] = React.useState<Lesson>(new Lesson());
  const [module, setModule] = React.useState<ModuleModel>(new ModuleModel());
  const [quiz, setQuiz] = React.useState<QuizModel>();
  const [totalQuestions, setTotalQuestions] = React.useState<number>(0);
  const [answers, setAnswers] = React.useState<Answer[]>([]);
  const [selectedOptions, setSelectedOptions] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { loadUserProfile } = useGlobalData();
  const [alert, setAlert] = React.useState<any>({
    open: false,
    message: "",
    severity: "",
    onClose: () => {},
  });

  const { cId, mId, lId }: any = router?.query;

  React.useEffect(() => {
    if (status === "unauthenticated") router.replace("/");
  }, [status]);

  React.useEffect(() => {
    if (cId) getCourse(cId);
  }, [cId]);

  // React.useEffect(() => {
  //   console.log("selectedOptions :>> ", selectedOptions);
  //   console.log("answers :>> ", answers);
  // }, [selectedOptions, answers]);

  const getCourse = async (id: string) => {
    const courseData: any = await courseService.getCourseDetails(
      id,
      // @ts-ignore
      session?.user.accessToken
    );

    if (courseData) {
      setCourseDetail(courseData);

      if (courseData?.modules && courseData?.modules.length > 0) {
        courseData?.modules.filter((_module: ModuleModel) => {
          if (_module.id === mId) {
            setModule(_module);
            //
            if (_module.lessons && _module.lessons.length > 0) {
              _module.lessons.filter((lesson) => {
                if (lesson.id === lId) {
                  setLesson(lesson);
                  setQuiz(lesson.quiz);
                  setTotalQuestions(lesson.quiz.questions.length);
                  setLoading(false);
                }
              });
            }
          }
        });
      }
    }
  };

  const isSelected = (optionId: string): boolean => {
    return !selectedOptions.includes(optionId) ? false : true;
  };

  const onClickOption = (
    quizId: string,
    question: Question,
    option: QuestionOption
  ) => {
    let _answer: any = {};
    let tempOptionsArr: any = [...selectedOptions];
    let tempAnswerArr: any = [...answers];

    const questionMatched = answers.filter(
      (answer) => answer.questionId === question.id
    );

    if (questionMatched.length > 0) {
      // get matched option
      const OptionMatched = questionMatched.filter(
        (answer) => answer.optionId === option.id
      );

      // check matched option
      if (OptionMatched.length > 0) {
        // remove answer from answerModel
        const index = tempAnswerArr.indexOf(questionMatched[0]);
        if (index > -1) {
          tempAnswerArr.splice(index, 1);
          setAnswers(tempAnswerArr);
        }

        // remove option from slectedOptions
        const optionIndex = tempOptionsArr.indexOf(questionMatched[0].optionId);
        if (optionIndex > -1) {
          tempOptionsArr.splice(optionIndex, 1);
          setSelectedOptions(tempOptionsArr);
        }
      } else {
        // replace optionId in selected Options
        const optionIndex = tempOptionsArr.indexOf(questionMatched[0].optionId);
        if (optionIndex !== -1) {
          tempOptionsArr[optionIndex] = option.id;
          setSelectedOptions(tempOptionsArr);
        }

        // just update the answer with new selected option data
        questionMatched[0].optionId = option.id;
        questionMatched[0].optionLabel = option.label;
        questionMatched[0].optionText = option.text;
        questionMatched[0].isCorrect = option.isCorrect;
      }
    } else {
      _answer = {
        // userId: session?.user.id,
        quizId: quizId,
        questionId: question.id,
        questionText: question.text,
        optionId: option.id,
        optionLabel: option.label,
        optionText: option.text,
        isCorrect: option.isCorrect,
      };

      setAnswers((x) => [...x, _answer]);
      // set selectedOptions
      setSelectedOptions((x: string[]) => [...x, option.id]);
    }
  };

  const submitAnswers = async () => {
    setSubmitting(true);
    if (answers.length !== totalQuestions) {
      setAlert({
        open: true,
        message: "Please Answer all Questions!",
        severity: "error",
      });
      setSubmitting(false);
      return;
    }

    const dto = { answers: answers };

    const { ok, data, problem }: any = await answerService.saveAnswer(
      dto,
      // @ts-ignore
      session?.user.accessToken
    );
    if (ok && data?.success) {
      // verify social user
      //else
      setAlert({
        open: true,
        message: data.data,
        severity: "success",
      });

      // @ts-ignore
      await loadUserProfile(session?.user.accessToken);
      setTimeout(
        () =>
          router.replace({
            pathname: "/courses/[id]",
            query: {
              id: cId,
              mId: mId,
              lId: lId,
              tracks: 4,
            },
          }),
        3000
      );
    } else if (problem === "CLIENT_ERROR" && data.data) {
      setAlert({
        open: true,
        message: data.data || "Unexpected error, Please try again!",
        severity: "error",
      });
    } else {
      setAlert({
        open: true,
        message: "Unexpected error, Please try again!",
        severity: "error",
      });
    }

    setSubmitting(false);
  };

  return (
    <>
      {!loading ? (
        <div className="pb-10">
          <AlertDialog
            open={alert?.open}
            severity={alert?.severity}
            message={alert?.message}
            handleClose={() =>
              setAlert({
                open: false,
              })
            }
          />
          {/* heading */}
          <div className="grid lg:grid-cols-12 pt-4">
            <div className="lg:col-span-2">
              <div
                className="flex items-center mb-4"
                onClick={() => {
                  window.history.go(-1);
                }}
              >
                <ArrowLeft size="20" color="#2D41A5" />
                <p className="text-[#2D41A5] flex font-semibold  ml-3">
                  Go Back
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 lg:flex justify-between">
              <div className="">
                <h3 className="text-[#36394D] font-bold font-sans text-[14px]  lg:text-lg">
                  {`Course: ${courseDetail.name}`}
                </h3>
                <div className="flex items-center ">
                  <p className="text-[#596080] font-bold font-sans text-sm">
                    {`Module ${module.moduleNumber}`}
                  </p>
                  <span className="text-[#596080] font-normal ml-1 font-sans text-sm">
                    Practice Quiz
                  </span>
                  <span className="text-[#596080] font-normal ml-1 font-sans text-sm lg:hidden">
                    {` - ${answers.length || 0}/${totalQuestions} Answered`}
                  </span>
                </div>
              </div>
              <p className="#596080 text-sm font-semibold font-sans hidden lg:flex">
                {`${answers.length || 0}/${totalQuestions} Answered`}
              </p>
            </div>

            <div className="lg:col-span-2"></div>
          </div>

          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-10 border-t-[1px] my-3"></div>
            <div className="lg:col-span-1"></div>
          </div>

          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-2"></div>
            <div className="lg:col-span-8">
              {quiz?.questions.map((question, index) => {
                return (
                  <>
                    <div
                      key={index.toString()}
                      className="rounded-md bg-[#F2F4FC] mt-10 py-4 px-8 mx-auto  w-full"
                    >
                      <div>
                        <p className="font-bold text-[#36394D] pb-4  text-xs ">
                          {`Question ${index + 1}`}
                        </p>
                        <p className="text-[#596080] text-sm font-normal">
                          {question.text}
                        </p>
                      </div>

                      <div className=" mt-5 ">
                        {question?.options.map((option, index) => (
                          <div
                            key={index.toString()}
                            className={`px-4 mb-2 py-2 gap-2 items-center  text-[#596080] bg-[white] flex`}
                            onClick={() => {
                              onClickOption(quiz?.id, question, option);
                            }}
                          >
                            <span className="font-sans ">{option.label}</span>
                            <div className="border-l-2 pl-2  mr-auto">
                              <p className=" text-sm font-sans">
                                {option.text}
                              </p>
                            </div>

                            {isSelected(option.id) ? (
                              <TickCircle
                                size={18}
                                color={"green"}
                                variant="Bulk"
                              />
                            ) : (
                              <div className="h-4 w-4  rounded-full bg-[#E6E9F2] border border-[#B8BBCC] "></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="flex justify-end  ">
                <button
                  onClick={submitAnswers}
                  className="bg-[#2D41A5]  flex justify-center items-center text-white text-[14px] font-sans font-medium rounded-lg px-6 py-2 mt-8"
                >
                  {submitting && <Spinner size={"20px"} color="white" />}
                  Submit Quiz
                </button>
              </div>
            </div>
            <div className="lg:col-span-2"></div>
          </div>
        </div>
      ) : (
        <>{/* TODO: Loader */}</>
      )}
    </>
  );
}
