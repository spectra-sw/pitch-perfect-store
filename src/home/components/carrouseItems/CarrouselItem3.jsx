import isoSpectra from "../../../assets/logos/isologospectra.png";
import img1 from "../../../assets/img/img1.png";
import graphTop from "../../../assets/icons/grahp-top.svg";
import money from "../../../assets/icons/money.png";
import store from "../../../assets/icons/store.svg";

export const CarrouselItem3 = () => {
  return (
    <>
      {/* Mobile */}
      <div className="bg-[url(/src/assets/bg-image/bg-3.jpg)] bg-no-repeat bg-cover w-full h-full px-6 bg-neutral-800 flex-col items-center justify-center overflow-hidden relative flex lg:hidden">
        <img src={isoSpectra} className="w-[30%] absolute -top-5 -right-6" />
        <div className="flex flex-col justify-center mb-6 text-center" style={{ textShadow: "3px 4px 4px rgba(0, 0, 0, 1)" }}>
          <h2 className="text-5xl font-bold text-white">
            <span className="text-blue-500">7/10 </span>
            decisiones de compra
          </h2>
        </div>
        
        <div className="shadow-2xl w-4/5 bg-gradient-to-r to-sky-500 from-indigo-500 flex flex-col justify-center items-center flex-wrap rounded-xl text-center">
          <div className="w-full border-b border-solid border-white py-2 px-2 flex flex-col items-center">
            <img src={graphTop} className="w-10" />
            <h3 className="text-xl font-bold text-white">Estrategías</h3>
            <p className="text-white">comerciales y marketing</p>
          </div>
          <div className="w-full border-b border-solid border-white py-2 px-2 flex flex-col items-center">
            <img src={money} className="w-8 mb-1" />
            <h3 className="text-xl font-bold text-white">Costos</h3>
            <p className="text-white">30% y 40% en auditoría</p>
          </div>
          <div className="w-full py-2 px-2 flex flex-col items-center">
            <img src={store} className="w-10" />
            <h3 className="text-xl font-bold text-white">PDV</h3>
            <p className="text-white">300K Colombia, 2.3M Latam</p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="w-full h-full bg-neutral-800 flex-col items-center justify-center overflow-hidden relative hidden lg:flex">
        <img src={isoSpectra} className="w-[15%] absolute -top-8 -right-10" />
        <div className="w-[88%] flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-white pb-3 pl-6">
            <span className="text-blue-500">7/10 </span>
            decisiones de compra
          </h2>
          <img src={img1} className="w-[100%] h-[60%]" />
        </div>
        <div className="shadow-2xl w-2/3 bg-gradient-to-r to-sky-500 from-indigo-500 flex justify-center items-center flex-wrap py-3 absolute bottom-10 rounded-xl text-center">
          <div className="w-[32%] border-r border-solid border-white py-4 px-3 flex flex-col items-center">
            <img src={graphTop} className="w-16" />
            <h3 className="text-2xl font-bold text-white">Estrategías</h3>
            <p className="text-white text-lg">comerciales y marketing</p>
          </div>
          <div className="w-[32%] border-r border-solid border-white py-4 px-3 flex flex-col items-center">
            <img src={money} className="w-14 mb-2" />
            <h3 className="text-2xl font-bold text-white">Costos</h3>
            <p className="text-white text-lg">30% y 40% en auditoría</p>
          </div>
          <div className="w-[32%] py-4 px-3 flex flex-col items-center">
            <img src={store} className="w-16" />
            <h3 className="text-2xl font-bold text-white">PDV</h3>
            <p className="text-white text-lg">300K Colombia, 2.3M Latam</p>
          </div>
        </div>
      </div>
    </>
  );
};
