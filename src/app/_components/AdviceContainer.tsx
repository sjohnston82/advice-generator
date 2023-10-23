"use client";

import React, { useState, useEffect } from "react";
const axios = require("axios").default;
import dynamic from "next/dynamic";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import PatternDividerMobile from "../../../public/images/pattern-divider-mobile.svg";
import Image from "next/image";
import Reroll from "./Reroll";
const NoSSRLoadingSpinner = dynamic(() => import("./LoadingSpinner"), {
  ssr: false,
});

type Advice = {
  id: number;
  advice: string;
};

const AdviceContainer = () => {
  const [currentAdvice, setCurrentAdvice] = useState<Advice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getNewAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then(function (response: any) {
        const { id, advice } = response.data.slip;
        setIsLoading(true);
        setCurrentAdvice({ id, advice });
        console.log(currentAdvice);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (currentAdvice == null) {
      getNewAdvice();
    }
  }, []);

  return (
    <div className="w-[343px] ml-[1px] h-[315px] bg-dark-grayish-blue rounded-[10px] mt-[120px] px-6 relative">
      {currentAdvice && (
        <div className="">
          <AdviceNumber id={currentAdvice.id} />
          <Advice advice={currentAdvice.advice} />
          <Image src={PatternDividerMobile} alt="Pattern divider" />
          <Reroll getNewAdvice={getNewAdvice} />
        </div>
      )}
    </div>
  );
};

export default AdviceContainer;
