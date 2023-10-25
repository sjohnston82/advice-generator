import React from "react";

interface AdviceNumberProps {
  id: number;
}

const AdviceNumber = ({ id }: AdviceNumberProps) => {
  return (
    <p className="lg:text-[13px] lg:mt-12 mx-auto ml-[3px] mt-10 text-center text-[11px] font-[600] tracking-[0.335em] text-neon-green">{`ADVICE #${id}`}</p>
  );
};

export default AdviceNumber;
