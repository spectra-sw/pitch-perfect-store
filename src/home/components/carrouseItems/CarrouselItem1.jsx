import React from "react";
import spectra from "../../../assets/logos/logospectra1.png";
import hibu from "../../../assets/logos/logohibu1.png";

export const CarrouselItem1 = () => {
  console.log(spectra);
  return (
    <>
      {/* Mobile */}
      <div
        className={`bg-[url(/src/assets/bg-image/bg-1.png)] bg-no-repeat bg-cover justify-center flex-wrap w-full h-full lg:hidden`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-white font-bold">
          <h3
            className="text-4xl mb-3"
            style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
          >
            Presentación
          </h3>
          <h3
            className="text-5xl mb-3 text-center"
            style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
          >
            Perfect<br/> Store
          </h3>
        </div>

        <div className="w-full absolute top-2 flex justify-center">
          <img src={hibu} className="w-1/2" alt="..." />
        </div>
        <div className="w-full absolute bottom-2 flex justify-center">
          <img src={spectra} className="w-2/3" alt="..." />
        </div>

      </div>

      {/* desktop */}
      <div
        className={`bg-[url(/src/assets/bg-image/bg-1.png)] bg-no-repeat bg-cover justify-center flex-wrap w-full h-full hidden lg:flex`}
      >
        <div className="w-2/3 flex flex-col justify-center items-center text-white font-bold">
          <h3
            className="text-4xl mb-3"
            style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
          >
            Presentación
          </h3>
          <h2
            className="text-6xl"
            style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
          >
            Perfect Store
          </h2>
        </div>
        <div className="w-1/3 relative">
          <img
            src={hibu}
            className="w-1/2 absolute top-8 right-[calc(2rem+10%)]"
            alt="..."
          />
          <img
            src={spectra}
            className="w-2/3 absolute bottom-8 right-8"
            alt="..."
          />
        </div>
      </div>
    </>
  );
};
