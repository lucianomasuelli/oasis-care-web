import Image from "next/image";
import { fustat, grotesk, ltInstitute } from "../fonts/fonts";

export default function Inicio() {
  return (
    <div className="flex flex-col self-center justify-center align-middle sm:mt-20 mt-40 mx-10 overflow-hidden ">
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
      <div className={grotesk.className}>
        <p className="sm:w-[40%] w-full text-gray-200 lg:text-3xl md:text-2xl sm:text-xl font-[400] sm:ml-[15%] p-4 sm:mt-28 mt-10 sm:text-left text-justify ">
          Fusionando la naturaleza con el arte, creando espacios que inspiran,
          relajan y revitalizan a quienes los disfrutan.
        </p>
      </div>
    </div>
  );
}
