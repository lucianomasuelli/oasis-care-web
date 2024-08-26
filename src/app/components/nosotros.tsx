import Image from "next/image";
import { grotesk } from "../fonts/fonts";
import Pattern from "./bgPattern";

export default function Nosotros() {
  return (
    <div className="h-screen overflow-y-visible">
      <div
        className={`${grotesk.className} min-[1700px]:mx-60 xl:mx-40 lg:mx-40 md:mx-28 sm:mx-20 mx-10`}
      >
        <div className="flex flex-col max-w-max pt-40 relative items-center">
          <h1 className="text-black 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-light tracking-[0.2em] z-30 ">
            NOSOTROS
          </h1>
          <hr className="border-2 border-primaryGreen-500 divide-solid xl:w-32 w-20 mt-2"></hr>
        </div>

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
            className="object-contain 2xl:w-[500px] xl:w-[400px] w-72 absolute z-20 sm:border-8 border-4 border-background mr-20 -mt-14 right-0 hidden sm:block"
          />
        </div>
        <Image
          src="/wpp3.jpeg"
          alt="wpp3"
          width={4030}
          height={2725}
          className="object-contain 2xl:w-[600px] xl:w-[500px]   w-96 relative z-20 mt-10 sm:border-8 border-4 border-background hidden sm:block"
        />

        {/*Mobile image*/}
        <Image
            src="/wpp5.jpeg"
            alt="wpp2"
            width={3024}
            height={4032}
            className="object-contain 2xl:w-[500px] xl:w-[400px] sm:w-72 sm:absolute z-20 sm:border-8 border-4 border-background sm:mr-20 sm:-mt-14 my-5 sm:right-0 sm:hidden relative"
          />
      </div>
      <div className="flex flex-row justify-between sm:-mt-[600px] -mt-[600px] ">
        <Pattern className="flex flex-row  justify-start sm:-ml-20 -ml-24  sm:mt-52 mt-40 sm:w-[30%] w-[45%] max-w-[500px] rotate-180 filter brightness-[70%]  absolute left-0 sm:opacity-100 opacity-90" />
        <Pattern className="flex flex-row justify-end sm:-mt-52 -mt-80 pl-20 sm:w-[60%] w-[80%] absolute right-0 sm:opacity-80 opacity-30 " />
      </div>
    </div>
  );
}
