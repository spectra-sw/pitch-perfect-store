import logoHibu from "../../../assets/logos/logohibu1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import img5 from "../../../assets/img/img5.png";

export const CarrouselItem4 = () => {
  console.log(img2);
  return (
    <>
      {/* Mobile */}
      <div className="bg-[url(/src/assets/img/img2.png)] bg-no-repeat bg-cover w-full h-full flex-wrap overflow-hidden lg:hidden">
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          {/* <img src={logoHibu} className="w-[50%]" /> */}

          <h2
            className="text-6xl font-bold text-blue-500 w-full text-center"
            style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}
          >
            Solución
          </h2>

          <div className="w-[44%] relative mt-8 mb-4">
            <img src={img4} className="w-full" />
            <img
              src={img5}
              className="w-[76%] h-[92%] top-[4%] left-[12%] absolute z-20 rounded-2xl"
            />
          </div>

          <img src={logoHibu} className="w-1/2" />
        </div>
      </div>

      {/* Desktop */}
      <div className="w-full h-full bg-neutral-800 flex-wrap overflow-hidden hidden lg:flex">
        <div className="w-2/3 h-full flex flex-col items-center relative px-12">
          <div className="w-full absolute bottom-4 left-0 flex flex-col items-center">
            <img src={logoHibu} className="w-[24%]" />
          </div>
          {/* <img src={logoHibu} className="w-[50%]" /> */}
          <h2 className="text-6xl font-bold text-blue-500 w-full text-center mt-6">
            Solución
          </h2>
          <div className="flex flex-wrap justify-between w-full mt-8">
            <div className="w-[28%] relative">
              <img src={img4} className="w-full max-h-72" />
              <img
                src={img5}
                className="w-[76%] h-[92%] top-[4%] left-[12%] absolute z-20 rounded-2xl"
              />
            </div>
            <img src={img3} className="w-[70%] max-h-72" />
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center relative">
          <img
            src={img2}
            className="w-full h-full absolute top-0 right-0 drop-shadow-2xl shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};
