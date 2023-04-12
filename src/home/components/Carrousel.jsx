import React from "react";
import { ButtonsCarousel } from "./ButtonsCarousel";
import { motion } from "framer-motion";
import { useCarrousel } from "../hooks/components/useCarrousel";

export const Carrousel = () => {
  const { CarouselItems, step, handleNext, handlePrev } =
    useCarrousel();

  return (
    <div className="relative lg:px-24">
      <div className="flex h-[calc(90vh-4rem)] relative rounded-xl overflow-hidden">
        <motion.div
          className="absolute flex h-full"
          animate={{ width: `${(CarouselItems.length * 100).toString()}%` }}
          initial={{ width: `${(CarouselItems.length * 100).toString()}%` }}
        >
          {CarouselItems.map(({ container, type }, index) => (
            <motion.div
              key={index}
              animate={{ x: `-${step}%`, y: 0 }}
              initial={{ x: `-${step}%`, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {
                type === "img" ? (<img src={container} className="w-full h-full" alt="..." />) : (container)
              }
             
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ButtonsCarousel handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};
