import {
  ArrowCircleRight,
  Book1,
  Profile2User,
  RecordCircle,
  Star1,
} from "iconsax-react";
import React from "react";
import image from "../../../public/assets/image 5.png";
import Image from "next/image";

type Props = {};

const SocialNorms = (props: Props) => {
  return (
    <div className="flex flex-col mt-8 space-y-4 w-full">
      <h1 className="text-[18px] font-bold text-[#36394D] mb-2">
        Course: Understanding Behavioural Insights
      </h1>
      <div className="bg-[#182359] rounded-lg text-[#F2F4FC] px-4 py-8 mb-4">
        <h1 className="text-[18px] font-bold text-[#F2F4FC]">
        2. Social norms and Impact
        </h1>
        <p className="text-[12px] text-[#B8BBCC] p-1">Module 1</p>
      </div>

      <div>
        <p className="text-[14px] text-[#596080] mb-4">
          As humans, we are social creatures deeply influenced by the norms and
          expectations of the societies we belong to. Social norms are unwritten
          rules that guide our behavior and dictate what is considered
          acceptable or appropriate within a particular group or community.
        </p>
        <p className="text-[14px] text-[#596080] mb-4">
          Now, let us consider an example: Imagine you are walking into a
          library, and you notice that everyone around you is speaking softly
          and behaving quietly. In this scenario, the social norm of the library
          dictates that individuals should maintain a quiet environment to
          respect the needs and expectations of others. This unwritten rule
          influences your behavior, causing you to speak softly and behave
          quietly as well.
        </p>
      </div>
      <Image src={image} alt="image" />
    </div>
  );
};

export default SocialNorms;
