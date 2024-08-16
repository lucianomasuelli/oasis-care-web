import Image from "next/image";
import localFont from "next/font/local";
import { fustat } from "../fonts/fonts";

export default function Inicio() {
  return (
    <div className="flex flex-col self-center justify-center align-middle mt-10">
      <Image
        src={"/logo2.png"}
        alt="logo"
        width={4000}
        height={880}
        className="w-[70%] self-center"
      />
      <div className={fustat.className}>
        <p className="w-[40%] text-gray-200 lg:text-3xl md:text-2xl sm:text-xl font-light ml-[15%] mt-20">
          Fusionando la naturaleza con el arte, creando espacios que inspiran,
          relajan y revitalizan a quienes los disfrutan.
        </p>
      </div>
    </div>
  );
}
