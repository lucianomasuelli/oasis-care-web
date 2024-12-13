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
            description="<strong>Diseño e instalación:</strong> Sistemas personalizados y eficientes para cada jardín. </br>
                
                <strong>Mantenimiento y calibración:</strong> Revisiones y ajustes para un riego óptimo y sostenible."
            icon={"/riego.svg"}
          />
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Diseño de jardines y especios verdes"
            description="<strong>Proyectos personalizados:</strong> 
                Diseño funcional y estético según tus necesidades. </br>
                <strong>Evaluación y asesoramiento:</strong> Análisis del terreno y selección de especies adecuadas. </br> 
                <strong> Sostenibilidad: </strong> Enfoque xeropaisajístico para reducir el consumo de agua."
            icon={"/jardines.svg"}
          />
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Mantenimiento"
            description="<strong>Podas y limpiezas:</strong> Mantén tu espacio verde impecable. </br> 
                <strong>Desmalezado:</strong> Eliminamos hierbas invasoras. </br>
                <strong>Puestas a punto:</strong> Renovamos y optimizamos áreas específicas."
            icon={"/flor.svg"}
          />
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Movimiento de suelos"
            description="<strong>Nivelación.</strong> </br>
                <strong>Preparación del terreno:</strong> Suelo listo para vegetación o construcción."
            icon={"/terreno.svg"}
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
