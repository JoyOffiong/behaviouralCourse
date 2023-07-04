import React from "react";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Transcript from "../courses/VideoTabs/Transcript";
import DiscussionForum from "../courses/VideoTabs/DiscussionForum";
import Tabs from "@/core/interfaces/tabs.interface";

interface TabsContainerProps {
  tabs: Tabs[];
  renderComps: any;
}

export default function TabsContainer({
  tabs,
  renderComps,
}: TabsContainerProps) {
  const [activeTab, setAactiveTab] = React.useState<number>(1);

  return (
    <div className="p-4  border-[1px] rounded-lg ">
      <div>
        <HorizontalScroll
          tabs={tabs}
          activeTab={activeTab}
          setAactiveTab={setAactiveTab}
        />
        <div className="border-b-[1px] "></div>
      </div>
      {renderComps(activeTab)}
    </div>
  );
}
