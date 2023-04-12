import { useState } from "react";
import {
  CarrouselItem1,
  CarrouselItem2,
  CarrouselItem3,
  CarrouselItem4,
  CarrouselItem5,
  CarrouselItem6,
} from "../../components/carrouseItems";

export const useCarrousel = () => {
  const [step, setStep] = useState(0);
  const [CarouselItems, setCarouselItems] = useState([
    {
      container: <CarrouselItem1 />,
      type: "component",
    },
    {
      container: <CarrouselItem2 />,
      type: "component",
    },
    {
      container: <CarrouselItem3 />,
      type: "component",
    },
    {
      container: <CarrouselItem4 />,
      type: "component",
    },
    {
      container: <CarrouselItem5 />,
      type: "component",
    },
    {
      container: <CarrouselItem6 />,
      type: "component",
    },
  ]);

  const handleNext = () => {
    setTimeout(() => {
      if (step === CarouselItems.length * 100 - 100) {
        setStep(0);
      } else {
        setStep((e) => e + 100);
      }
    }, 230);
  };

  const handlePrev = () => {
    setTimeout(() => {
      if (step === 0) {
        setStep(CarouselItems.length * 100 - 100);
      } else {
        setStep((e) => e - 100);
      }
    }, 230);
  };

  return {
    // Propierties
    step,
    CarouselItems,

    // Methods
    handleNext,
    handlePrev,
  };
};
