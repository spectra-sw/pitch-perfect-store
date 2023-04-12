import React from "react";
import spectra from "../../../assets/logos/logospectra1.png";
import hibu from "../../../assets/logos/logohibu1.png";

export const CarrouselItem1 = () => {
  console.log(spectra);
  return (
    <div
      className={`bg-[url(/src/assets/bg-image/bg-1.png)] bg-no-repeat bg-cover flex justify-center flex-wrap w-full h-full`}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white font-bold">
        <h3 className="text-4xl mb-3">Presentación</h3>
        <h2 className="text-6xl">Perfect Store</h2>
      </div>
      <div className="w-full md:w-1/2 relative">
        <img
          src={hibu}
          className="w-1/3] absolute top-8 right-16"
          alt="..."
        />
        <img
          src={spectra}
          className="w-[40%] absolute bottom-8 right-8"
          alt="..."
        />
      </div>
    </div>
  );
};
