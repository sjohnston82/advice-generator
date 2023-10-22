"use client";

import React, { useState, useEffect } from "react";
const axios = require("axios").default;
import dynamic from "next/dynamic";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
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
      .get("	https://api.adviceslip.com/advice/117")
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
    <div className="w-[342px] h-[316px] bg-dark-grayish-blue rounded-xl mt-[120px] px-4">
      {currentAdvice && (
        <div className="">
          <AdviceNumber id={currentAdvice.id} />
          <Advice advice={currentAdvice.advice} />
        </div>
      )}
    </div>
  );
};

export default AdviceContainer;
