import Image from "next/image";
import { grotesk } from "../fonts/fonts";
import Pattern from "./bgPattern";
import SectionTitle from "./sectionTitle";

export default function Nosotros() {
  return (
    <div className="h-screen overflow-y-visible sm:mt-20 mt-10 sm:mb-20 " id="nosotros">
      <div
        className={`${grotesk.className} min-[1700px]:mx-80 xl:mx-60 lg:mx-40 md:mx-28 sm:mx-20 mx-10`}
      >
        <SectionTitle title="NOSOTROS" />

        <div className="flex flex-row align-top ">
          <p className=" xl:w-[40vw] lg:w-[40vw] md:w-80 sm:w-60 w-full xl:mt-10 mt-6 z-20 relative text-gray-700 xl:leading-8 xl:text-xl md:text-lg md:text-left text-justify ">
            En el corazón de Mendoza, donde las montañas se encuentran con los
            viñedos y la naturaleza despliega su majestuosidad, un grupo de
            apasionados por el paisajismo y el diseño visualizó un sueño: crear
            espacios verdes que no solo embellecieran el entorno, sino que
            también ofrecieran un refugio para el alma. Así nació Oasis Care el
            11 de octubre de 2023, con la misión de convertir cualquier espacio
            en un oasis de tranquilidad y belleza.
          </p>
          <Image
            src="/wpp1.jpeg"
            alt="wpp2"
            width={3024}
            height={4032}
            className="object-contain 2xl:w-[400px] xl:w-[300px] lg:w-[300px] w-72 absolute z-20 sm:border-8 border-4 border-background-500 min-[1700px]:mr-80 xl:mr-60 lg:mr-40 md:mr-28 sm:mr-20 mr-10 -mt-[60px] right-0 hidden sm:block rounded-tr-[50px] "
          />
        </div>
        <Image
          src="/wpp3.jpeg"
          alt="wpp3"
          width={4030}
          height={2725}
          className="object-cover 2xl:w-[600px] 2xl:h-[300px] xl:w-[600px] lg:w-[525px] md:w-[500px] sm:w-[300px] self-center justify-center w-80 relative z-20 mt-10 sm:border-8 border-4 border-background-500 hidden sm:block rounded-bl-[50px] "
        />

        {/*Mobile image*/}
        <Image
            src="/wpp1.JPG"
            alt="wpp2"
            width={3024}
            height={4032}
            className="object-contain  z-20 border-4 border-background-500 my-5 sm:hidden relative rounded-tr-[50px] rounded-bl-[50px] "
          />
      </div>
      
    </div>
  );
}
