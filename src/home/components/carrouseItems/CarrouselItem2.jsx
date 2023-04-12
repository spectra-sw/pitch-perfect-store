import isoSpectra from "../../../assets/logos/isologospectra.png";
import bg2 from "../../../assets/bg-image/bg-2.jpeg";

export const CarrouselItem2 = () => {
  return (
    <>
      {/* Mobile */}
      <div className="w-full h-full bg-neutral-800 flex-wrap overflow-hidden flex lg:hidden">
        <div className="w-full h-full flex items-center">
          <img src={isoSpectra} className="w-[30%] absolute -top-3 -right-4" />
          
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[96%] h-[92%] rounded-r-full p-2 pl-0 shadow-2xl">
            <img
              src={bg2}
              className="w-full h-full rounded-r-full shadow-2xl drop-shadow-2xl"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-12">
          <h2 className="text-5xl font-bold text-white" style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}>
            IA,
            <br /> <span className="text-blue-500">para el Consumo</span>
            <br /> Masivo
          </h2>

          </div>

        </div>
      </div>

      {/* Desktop */}
      <div className="w-full h-full bg-neutral-800 flex-wrap overflow-hidden hidden lg:flex">
        <div className="w-1/2 h-full flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-[80%] rounded-r-full p-2 pl-0 shadow-2xl">
            <img
              src={bg2}
              className="w-full h-full rounded-r-full shadow-2xl drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center relative pl-16">
          <img src={isoSpectra} className="w-[30%] absolute -top-8 -right-10" />
          <h2 className="text-6xl font-bold text-white">
            IA,
            <br /> <span className="text-blue-500">para el Consumo</span>
            <br /> Masivo
          </h2>
        </div>
      </div>
    </>
  );
};
