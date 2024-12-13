import { grotesk } from "../../fonts/fonts";
import Pattern from "../bgPattern";
import { Pattern2, Pattern3 } from "../bgPattern";
import ServicesCarousel from "../carousel/carousel";
import SectionTitle from "../sectionTitle";
import ServicesGrid from "./servicesGrid";

export default function Servicios() {
  return (
    <div className="relative h-fit overflow-hidden sm:mt-0 mt-20 pb-20 z-10">
      <div
        className={`${grotesk.className} pt-10  min-[1700px]:mx-80 xl:mx-60 lg:mx-40 min-[900px]:mx-20 md:mx-0 mx-0`} id="servicios"
      >
        <div className="mx-10 mb-0">
          <SectionTitle title="SERVICIOS" position="items-end" />
        </div>

        <div className="hidden  min-[900px]:flex items-center justify-center align-middle ">
          <ServicesGrid />
        </div>

        <div className="block min-[900px]:hidden">
          <ServicesCarousel />
        </div>
        
      </div>

      {/* Background pattern */}
      
    </div>
  );
}
