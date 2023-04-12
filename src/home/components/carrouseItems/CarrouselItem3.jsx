import isoSpectra from "../../../assets/logos/isologospectra.png";
import img1 from "../../../assets/img/img1.png";
import graphTop from "../../../assets/icons/grahp-top.svg";
import money from "../../../assets/icons/money.png";
import store from "../../../assets/icons/store.svg";

export const CarrouselItem3 = () => {
  return (
    <div className="w-full h-full bg-neutral-800 flex flex-col items-center justify-center overflow-hidden relative">
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
          <p className="text-white">comerciales y marketing</p>
        </div>
        <div className="w-[32%] border-r border-solid border-white py-4 px-3 flex flex-col items-center">
          <img src={money} className="w-14 mb-2" />
          <h3 className="text-2xl font-bold text-white">Costos</h3>
          <p className="text-white">30% y 40% en auditoría</p>
        </div>
        <div className="w-[32%] py-4 px-3 flex flex-col items-center">
          <img src={store} className="w-16" />
          <h3 className="text-2xl font-bold text-white">PDV</h3>
          <p className="text-white">300K Colombia, 2.3M Latam</p>
        </div>
      </div>
    </div>
  );
};
