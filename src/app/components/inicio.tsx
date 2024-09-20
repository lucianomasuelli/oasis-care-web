import Image from "next/image";
import { fustat, grotesk, ltInstitute } from "../fonts/fonts";

export default function Inicio() {
  return (
    <div
      className={`${grotesk.className} flex flex-col self-center justify-center align-middle sm:mt-20 mt-0 mx-10 overflow-hidden `}
    >
      <Image
        src={"/logo2.png"}
        alt="logo"
        width={4000}
        height={880}
        className="w-[60%] min-w-[600px] self-center sm:block hidden"
      />
      <Image
        src={"/logoMobile.png"}
        alt="logo"
        width={4000}
        height={880}
        className="h-[60%] self-center sm:hidden"
      />
      <p className=" md:w-[50%] sm:w-[40%] w-full text-white opacity-80 xl:text-3xl lg:text-2xl md:text-xl sm:text-xl font-[400] sm:ml-[15%] p-4 sm:mt-10 mt-10 sm:text-left text-justify ">
        Fusionando la naturaleza con el arte, creando espacios que inspiran,
        relajan y revitalizan a quienes los disfrutan.
      </p>
      <button className="text-white xl:text-2xl font-medium border-4 p-2 xl:w-60 xl:h-20 w-40  self-center sm:mt-20 mt-10 backdrop-blur-md hover:-translate-y-1 hover:shadow-2xl hover:border-[#E5EAC3] xl:active:w-56 active:w-36 active:backdrop-blur-none  duration-200 ">Contactanos</button>
    </div>
  );
}
