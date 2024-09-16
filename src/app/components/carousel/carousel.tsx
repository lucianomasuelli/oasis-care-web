import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import ServiceCard from "../servicesSection/serviceCard";
import { DotButton, useDotButton } from "./dotButton";

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide">
          <ServiceCard
            title="Sistema de Riego"
            description="oicdjodsicjsoi de cnciosd cjml sdcoj cisdjmclsdk csdlc lkcmsdlkcm"
            icon={"/riego.svg"}
          />
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Diseño de jardines y especios verdes"
            description="oicdjodsicjsoi"
            icon={"/jardines.svg"}
          />
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Mantenimiento de jardines"
            description="oicdjodsicjsoi"
            icon={"/flor.svg"}
          />
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Nivelación del terreno"
            description="oicdjodsicjsoi"
            icon={"/terreno.svg"}
          />
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Xeropaisajismo"
            description="oicdjodsicjsoi"
            icon={"/xero.svg"}
          />
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
