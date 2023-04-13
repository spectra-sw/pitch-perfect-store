import React from "react";
import spectra from "../../../assets/logos/logospectra1.png";
import hibu from "../../../assets/logos/logohibu1.png";
import qr from "../../../assets/img/qr.png";

export const CarrouselItem6 = () => {
  console.log(spectra);
  return (
    <>
      {/* Mobile */}
      <div
        className={`bg-[url(/src/assets/bg-image/bg-3.jpg)] bg-no-repeat bg-cover bg-opacity-10 bg-center justify-center flex-wrap w-full h-full flex lg:hidden`}
      >
        <div className="w-full flex flex-col justify-center items-center text-white font-bold relative">
          <div className="w-4/5 border-4 border-white rounded-xl p-2 mb-4">
            <h3
              className="text-5xl mb-3"
              style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
            >
              Gracias
            </h3>
            <h2
              className="text-6xl text-center"
              style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
            >
              Perfect Store
            </h2>
          </div>
          <img src={hibu} className="w-1/2 absolute top-4" alt="..." />
          <div className="w-full flex justify-center absolute bottom-4">
            <img
              src={qr}
              className="w-2/5"
              alt="..."
            />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div
        className={`bg-[url(/src/assets/bg-image/bg-3.jpg)] bg-no-repeat bg-cover bg-opacity-10 bg-center justify-center flex-wrap w-full h-full hidden lg:flex`}
      >
        <div className="w-2/3 flex flex-col justify-center items-center text-white font-bold relative">
          <div className="border-4 border-white rounded-xl p-2">
            <h3
              className="text-4xl mb-3"
              style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
            >
              Gracias
            </h3>
            <h2
              className="text-6xl"
              style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
            >
              Perfect Store
            </h2>
          </div>
          <img
            src={hibu}
            className="w-1/4 absolute bottom-4 left-16"
            alt="..."
          />
        </div>
        <div className="w-1/3 relative">
          <img
            src={qr}
            className="w-[40%] absolute top-8 right-[calc(2rem+10%)]"
            alt="..."
          />
          <img
            src={spectra}
            className="w-[60%] absolute bottom-8 right-8"
            alt="..."
          />
        </div>
      </div>
    </>
  );
};
