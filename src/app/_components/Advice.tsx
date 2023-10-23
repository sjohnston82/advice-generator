import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

interface AdviceProps {
  advice: string;
}

const Advice = ({ advice }: AdviceProps) => {
  return (
    <div className="flex ">
      <p className="text-light-cyan min-h-[132px] ml-[1px] text-[24px] font-[700] mt-[23px] mb-6 text-center  leading-snug tracking-[-0.001em]">
        &#8220;{advice}&#8221;
      </p>

      {/* &quot;{advice}&quot; */}
    </div>
  );
};

export default Advice;
