import logoHibu from "../../../assets/logos/logohibu1.png";
import img6 from "../../../assets/img/img6.jpeg";
import snacks from "../../../assets/icons/snacks.svg";
import cookies from "../../../assets/icons/cookies.svg";
import iceCream from "../../../assets/icons/ice-sream.svg";
import beer from "../../../assets/icons/beer.svg";
import milk from "../../../assets/icons/milk.svg";
import clean from "../../../assets/icons/clean.svg";

export const CarrouselItem5 = () => {
  return (
    <div className="w-full h-full bg-neutral-800 flex flex-wrap overflow-hidden">
      <div className="w-2/3 h-full flex flex-col items-center relative px-20">
        <div className="w-full absolute bottom-4 left-0 flex flex-col items-center">
          <img src={logoHibu} className="w-[24%]" />
        </div>
        {/* <img src={logoHibu} className="w-[50%]" /> */}
        <h2 className="text-6xl font-bold text-blue-500 w-full text-center mt-6">
          Validaciones
        </h2>
        <div className="flex flex-wrap justify-around w-full mt-8">
          <img src={snacks} className="w-28" />
          <img src={cookies} className="w-28" />
          <img src={iceCream} className="w-28" />
        </div>
        <div className="flex flex-wrap justify-around w-full mt-8">
          <img src={beer} className="w-28" />
          <img src={milk} className="w-28" />
          <img src={clean} className="w-28" />
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center relative">
        <img
          src={img6}
          className="w-full h-full absolute top-0 right-0 drop-shadow-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};
