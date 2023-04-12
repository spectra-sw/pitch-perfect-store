import React from "react";
import spectra from "../../../assets/logos/logospectra1.png";
import hibu from "../../../assets/logos/logohibu1.png";
import qr from "../../../assets/img/qr.png";

export const CarrouselItem6 = () => {
  console.log(spectra);
  return (
    <div
      className={`bg-[url(/src/assets/bg-image/bg-3.jpg)] bg-no-repeat bg-cover bg-opacity-10 bg-center flex justify-center flex-wrap w-full h-full`}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white font-bold relative">
        <h3 className="text-4xl mb-3">Gracias</h3>
        <h2 className="text-6xl">Perfect Store</h2>
        <img
          src={hibu}
          className="w-1/3] absolute bottom-4 left-16"
          alt="..."
        />
      </div>
      <div className="w-full md:w-1/2 relative">
        <img
          src={qr}
          className="w-1/3 absolute top-8 right-16"
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
