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
            title="Diseño de jardines y especios verdes"
            icon={"/jardines.svg"}
            color="#B9CCAD"
            textColor="#445A47"
          >
            <div className="flex flex-col h-[80%] align-middle justify-between mt-2">
              <p>
                <strong>Proyectos personalizados: </strong>
                Diseño funcional y estético adaptado a las necesidades
                específicas de cada cliente, garantizando originalidad y
                personalización.
              </p>
              <p>
                <strong>Evaluación y asesoramiento:</strong> Análisis detallado
                del terreno y selección adecuada de las especies vegetales más
                idóneas para el entorno.
              </p>
              <p>
                <strong>Sostenibilidad:</strong> Aplicación de técnicas
                xeropaisajísticas para reducir el consumo de agua y promover la
                sostenibilidad ambiental.
              </p>
            </div>
          </ServiceCard>
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Sistema de Riego"
            icon={"/riego.svg"}
            color="#C1C69C"
            textColor="#646853"
          >
            <div className="flex flex-col h-[80%] align-middle justify-between mt-2">
              <p>
                <strong>Diseño e instalación:</strong> Creación de sistemas de
                riego personalizados y eficientes, optimizados para las
                características del jardín.
              </p>
              <p>
                <strong>Automatización inteligente:</strong> Configuración de
                sistemas automatizados para la eficiencia hídrica y la
                programación de riegos según condiciones climáticas.
              </p>
              <p>
                <strong>Mantenimiento y calibración:</strong> Servicios de
                ajuste y revisión periódica para garantizar un riego preciso y
                sostenible.
              </p>
            </div>
          </ServiceCard>
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Mantenimiento"
            icon={"/flor.svg"}
            color="#445A47"
            textColor="#B9CCAD"
          >
            <div className="flex flex-col h-[80%] align-middle justify-between mt-2">
              <p>
                <strong>Podas y limpiezas:</strong> Mantenimiento estético y
                sanitario de jardines, eliminando ramas secas y residuos
                vegetales.
              </p>
              <p>
                <strong>Desmalezado:</strong> Eliminación de hierbas invasoras
                para preservar la salud de las plantas y la estética del espacio
                verde.
              </p>
              <p>
                <strong>Puestas a punto:</strong> Renovación y optimización de
                zonas específicas para mantener la vitalidad y la apariencia
                impecable del jardín.
              </p>
            </div>
          </ServiceCard>
        </div>
        <div className="embla__slide">
          <ServiceCard
            title="Movimiento de suelos"
            icon={"/terreno.svg"}
            color="#646853"
            textColor="#E5EAC3"
          >
            <div className="flex flex-col h-[80%] align-middle justify-between mt-2">
              <p>
                <strong>Nivelación:</strong> Ajuste de la topografía del terreno
                para asegurar una base uniforme y preparada para la vegetación o
                la construcción.
              </p>
              <p>
                <strong>Preparación del terreno:</strong> Acondicionamiento del
                suelo para hacerlo apto para la siembra de vegetación o la
                ejecución de proyectos de construcción.
              </p>
              <p>
                <strong>Compactación del suelo:</strong> Proceso de
                consolidación del terreno para mejorar la estabilidad y la
                resistencia de la base.
              </p>
            </div>
          </ServiceCard>
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
