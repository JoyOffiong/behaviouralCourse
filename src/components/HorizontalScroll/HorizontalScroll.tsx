import React from "react";

interface HorizontalScrollProps {
  tabs: any[];
  activeTab: number;
  setAactiveTab: any;
}

export default function HorizontalScroll({
  tabs,
  activeTab,
  setAactiveTab,
}: HorizontalScrollProps) {
  return (
    <div className="flex  lg:overflow-x-auto overflow-x-scroll no-scrollbar  pb-[1px]">
      <div className="flex flex-nowrap  ">
        {tabs.map((tab: any, index) => (
          <div
            key={index.toString()}
            onClick={() => setAactiveTab(tab.key)}
            className="inline-block mr-6 hover:cursor-pointer"
          >
            <div className="min-w-max max-w-xs overflow-hidden bg-white transition-shadow duration-300 ease-in-out ">
              <div className="flex justify-center items-center w-full flex-col">
                <p
                  className={
                    activeTab === tab.key
                      ? "font-sans text-[#2D41A5] pb-2 text-[14px] font-bold "
                      : "font-sans text-[#7D86B2] pb-2 text-[14px]"
                  }
                >
                  {tab.title}
                </p>
                {activeTab === tab.key && (
                  <div className="bg-[#FFDA00] h-[3px] w-[50%] rounded-t-lg "></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
