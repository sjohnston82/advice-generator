import React from "react";
import Die from "../../../public/images/icon-dice.svg";
import Image from "next/image";

interface RerollProps {
  getNewAdvice: () => void;
}

const Reroll = ({ getNewAdvice }: RerollProps) => {
  return (
    <div
      onClick={getNewAdvice}
      className="absolute -bottom-8 left-[139px]  flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-neon-green hover:shadow-[0px_0px_30px_10px] hover:shadow-neon-green"
    >
      <Image src={Die} alt="Reroll die" />
    </div>
  );
};

export default Reroll;
