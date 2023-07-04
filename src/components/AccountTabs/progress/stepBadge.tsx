
import { Lock1 } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';
import fresher from "../../../../public/assets/badges 9.png";
import rookie from "../../../../public/assets/badges 10.png";
import expert from "../../../../public/assets/badges 11.png";
import master from "../../../../public/assets/badges 6.png";

export const StepBadge: React.FC = () => {
    const steps: Step[] = [
      {
        pic: <Image src={fresher} alt="fresher" width={32} height={32} />,
        isActive: true,
        level: "Fresher",
      },
      {
        pic: <Image src={rookie} alt="rookie" width={32} height={32} />,
        isActive: false,
        level: "Rookie",
      },
      {
        pic: <Image src={expert} alt="expert" width={32} height={32} />,
        isActive: false,
        level: "Expert",
      },
      {
        pic: <Image src={master} alt="master" width={32} height={32} />,
        isActive: false,
        level: "Master",
      },
    ];
  
    return (
      <div>
        <StepComponent steps={steps} />
      </div>
    );
  };
  
 
  interface StepComponentProps {
    steps: Step[];
  }
  
  interface Step {
    pic: any;
    isActive: boolean;
    level: string;
  }
interface StepComponentProps {
    steps: Step[];
  }
  
  export const StepComponent: React.FC<StepComponentProps> = ({ steps }) => {
    return (
      <div className="flex mt-10 justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-1">
              <div
                className={`w-[48px] h-[48px] flex items-center justify-center rounded-full ${
                  step.isActive
                    ? `bg-[#596080] text-white`
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.pic}
              </div>
              <p
                key={index}
                className="flex gap-1 font-bold text-xs text-center font-poppins text-[#596080]"
              >
                {step.isActive ? (
                  step.level
                ) : (
                  <>
                    <Lock1 size={12} variant="Bulk" className="text-[12px]" />{" "}
                    {step.level}
                  </>
                )}
              </p>
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 -mt-4 -ml-1 ${
                  step.isActive ? "bg-[#596080]" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  
  