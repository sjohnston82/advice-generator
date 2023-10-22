import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

interface AdviceProps {
  advice: string;
}

const Advice = ({ advice }: AdviceProps) => {
  return (
    <div className="flex">
      <p className="text-light-cyan text-[24px] font-[700] mt-[22px] text-center">
        &#8220;It is easy to sit up and take notice, what&apos;s difficult is
        getting up and taking action.&#8221;
      </p>
     
      {/* &quot;{advice}&quot; */}
    </div>
  );
};

export default Advice;
