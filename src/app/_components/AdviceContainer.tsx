"use client";

import React, { useState, useEffect } from "react";
const axios = require("axios").default;
import dynamic from "next/dynamic";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import PatternDividerMobile from "../../../public/images/pattern-divider-mobile.svg";
import PatternDividerDesktop from "../../../public/images/pattern-divider-desktop.svg";
import Image from "next/image";
import Reroll from "./Reroll";
import getWindowSize from "@/utils";
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
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
    <div className="relative ml-[1px] mt-[120px] h-[315px] w-[343px] rounded-[10px] bg-dark-grayish-blue px-6 lg:mt-[223px] lg:h-[332px] lg:w-[540px] lg:rounded-[15px] ">
      {currentAdvice && (
        <div className="mx-6">
          <AdviceNumber id={currentAdvice.id} />
          <Advice advice={currentAdvice.advice} />
          {windowSize.innerWidth < 768 ? (
            <Image src={PatternDividerMobile} alt="Pattern divider" />
          ) : (
            <Image src={PatternDividerDesktop} alt="Pattern divider" />
          )}
          <Reroll getNewAdvice={getNewAdvice} />
        </div>
      )}
    </div>
  );
};

export default AdviceContainer;
