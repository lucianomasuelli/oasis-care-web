import Image from "next/image";
import { grotesk } from "../fonts/fonts";
import Pattern from "./bgPattern";
import SectionTitle from "./sectionTitle";

export default function Nosotros() {
  return (
    <div className="h-screen overflow-y-visible mt-20 sm:mb-40 pt-24" id="nosotros">
      <div
        className={`${grotesk.className} min-[1700px]:mx-60 xl:mx-40 lg:mx-40 md:mx-28 sm:mx-20 mx-10`}
      >
        <SectionTitle title="NOSOTROS" />

        <div className="flex flex-row align-top ">
          <p className=" xl:w-[40rem] lg:w-96 md:w-80 sm:w-60 w-full xl:mt-10 mt-6 z-20 relative text-gray-700 xl:leading-8 xl:text-xl">
            En el corazón de Mendoza, donde las montañas se encuentran con los
            viñedos y la naturaleza despliega su majestuosidad, un grupo de
            apasionados por el paisajismo y el diseño visualizó un sueño: crear
            espacios verdes que no solo embellecieran el entorno, sino que
            también ofrecieran un refugio para el alma. Así nació Oasis Care el
            11 de octubre de 2023, con la misión de convertir cualquier espacio
            en un oasis de tranquilidad y belleza.
          </p>
          <Image
            src="/wpp5.jpeg"
            alt="wpp2"
            width={3024}
            height={4032}
            className="object-contain 2xl:w-[400px] xl:w-[300px] w-72 absolute z-20 sm:border-8 border-4 border-background-500 min-[880px]:mr-40 md:mr-20 sm:mr-10 -mt-[60px] right-0 hidden sm:block"
          />
        </div>
        <Image
          src="/wpp3.jpeg"
          alt="wpp3"
          width={4030}
          height={2725}
          className="object-contain 2xl:w-[700px] xl:w-[600px] lg:w-[525px] md:w-[500px] sm:w-[300px] self-center justify-center w-80 relative z-20 mt-10 sm:border-8 border-4 border-background-500 hidden sm:block "
        />

        {/*Mobile image*/}
        <Image
            src="/wpp5.jpeg"
            alt="wpp2"
            width={3024}
            height={4032}
            className="object-contain  z-20 border-4 border-background-500 my-5 sm:hidden relative"
          />
      </div>
      <div className="flex flex-row justify-between sm:-mt-[600px] -mt-[600px] ">
        <Pattern className="flex flex-row  justify-start sm:-ml-20 -ml-24 2xl:mt-36 sm:mt-60 mt-40 sm:w-[25%] w-[45%] max-w-[500px] rotate-180 filter brightness-[70%]  absolute left-0 opacity-90 z-0" />
        <Pattern className="flex flex-row justify-end sm:-mt-96 -mt-72 pl-20 sm:w-[50%] sm:min-w-[600px] w-[80%] absolute right-0 min-[880px]:opacity-70 sm:opacity-30 opacity-30 z-0" />
      </div>
    </div>
  );
}
