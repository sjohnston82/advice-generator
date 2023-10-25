import React from "react";

interface AdviceProps {
  advice: string;
}

const Advice = ({ advice }: AdviceProps) => {
  return (
    <div className="flex ">
      <p className="lg:text-[27.5px] lg:mt-[24px] lg:tracking-[0.005em]  text-light-cyan min-h-[132px] ml-[1px] text-[24px] font-[700] mt-[23px] mb-6 lg:mb-[21px] text-center  leading-snug tracking-[-0.001em]">
        &#8220;{advice}&#8221;
      </p>

    </div>
  );
};

export default Advice;
