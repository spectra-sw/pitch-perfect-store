import logoHibu from "../../../assets/logos/logohibu1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import img5 from "../../../assets/img/img5.png";

export const CarrouselItem4 = () => {
  return (
    <div className="w-full h-full bg-neutral-800 flex flex-wrap overflow-hidden">
      <div className="w-2/3 h-full flex flex-col items-center relative px-20">
        <div className="w-full absolute bottom-4 left-0 flex flex-col items-center">
          <img src={logoHibu} className="w-[24%]" />
        </div>
        {/* <img src={logoHibu} className="w-[50%]" /> */}
        <h2 className="text-6xl font-bold text-blue-500 w-full text-center mt-6">
          Solución
        </h2>
        <div className="flex flex-wrap justify-between w-full mt-8">
          <div className="w-[24%] relative">
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
  );
};
