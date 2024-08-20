import Image from "next/image";
import { fustat, grotesk, ltInstitute } from "../fonts/fonts";

export default function Inicio() {
  return (
    <div className="flex flex-col self-center justify-center align-middle mt-20 overflow-hidden">
      <Image
        src={"/logo2.png"}
        alt="logo"
        width={4000}
        height={880}
        className="w-[60%] self-center"
      />
      <div className={grotesk.className}>
        <p className="w-[40%] text-gray-200 lg:text-3xl md:text-2xl sm:text-xl font-[400] ml-[15%] mt-28 ">
          Fusionando la naturaleza con el arte, creando espacios que inspiran,
          relajan y revitalizan a quienes los disfrutan.
        </p>
      </div>
    </div>
  );
}
