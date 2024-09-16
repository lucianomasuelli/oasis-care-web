import { grotesk } from "../../fonts/fonts";
import Pattern from "../bgPattern";
import ServicesCarousel from "../carousel/carousel";
import SectionTitle from "../sectionTitle";
import ServicesGrid from "./servicesGrid";

export default function Servicios() {
  return (
    <>
      <div
        className={`${grotesk.className} h-screen pt-24 mt-20 mb-40 min-[1700px]:mx-60 xl:mx-40 lg:mx-40 min-[900px]:mx-20 md:mx-0 mx-0`} id="servicios"
      >
        <div className="mx-10 mb-10">
          <SectionTitle title="SERVICIOS" position="items-end" />
        </div>

        <div className="hidden min-[900px]:block">
          <ServicesGrid />
        </div>

        <div className="block min-[900px]:hidden">
          <ServicesCarousel />
        </div>
        
      </div>

      {/* Background pattern */}
      <div className="-mt-[100vh]">
        <Pattern className="flex flex-row overflow-hidden sm:-ml-20 -ml-20  2xl:mt-36 sm:mt-60  sm:w-[25%] w-[100%] rotate-[180deg] filter saturate-200 brightness-[80%] absolute opacity-50 z-0" />
      </div>
    </>
  );
}
