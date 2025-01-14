import SectionTitle from "../sectionTitle";
import WorkPatternL from "./workPatternL";
import WorkPatternR from "./workPatternR";
import { grotesk } from "@/app/fonts/fonts";
import { useEffect, useState } from "react";

export default function Workflow() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAnimationClass = (index: number, direction: string) => {
    const baseClass = "transition-transform duration-700 ease-out";
    const translateClass = direction === 'left' ? '-translate-x-full' : 'translate-x-full';
    const activeClass = direction === 'left' ? 'translate-x-0' : 'translate-x-0';
    const isVisible = scrollPosition > (index * 300) - 200; // Adjust this threshold as needed
    return `${baseClass} ${isVisible ? activeClass : translateClass}`;
  };

  return (
    <div className={`${grotesk.className} z-10 relative mt-10 overflow-x-hidden`}>
      <div className="min-[1700px]:mx-80 xl:mx-60 lg:mx-40 min-[900px]:mx-20 md:mx-0 mx-0">
        <SectionTitle title="FLUJO DE TRABAJO" />
      </div>

      <div className="mt-10">
        <div className={getAnimationClass(1, 'left')}>
          <WorkPatternL
            color="#74A865"
            number="01"
            title="Consulta Inicial"
            text="Para iniciar el proyecto de paisajismo, nos comunicamos con vos para saber los objetivos, necesidades y expectativas sobre tu jardín."
            image="/elem1.png"
            alt="consulta"
          />
        </div>
        <div className={getAnimationClass(2, 'right')}>
          <WorkPatternR
            color="#A8C6A3"
            number="02"
            title="Propuesta y Diseño"
            text="Realizamos diferentes diseños del proyecto, para que puedas visualizar tu futuro jardín y así concluir con el concepto deseado."
            image="/elem2.png"
            alt="propuestas"
          />
        </div>
        <div className={getAnimationClass(3, 'left')}>
          <WorkPatternL
            color="#355931"
            number="03"
            title="Implementación"
            text="Planificar el proyecto, incluyendo compra de materiales y programación de la mano de obra."
            image="/elem3.png"
            alt="impl"
          />
        </div>
        <div className={getAnimationClass(4, 'right')}>
          <WorkPatternR
            color="#74A865"
            number="04"
            title="Revisión final y Mantenimiento"
            text="Te explicamos los requisitos de riego y fertilización para le óptimo crecimiento de tu jardín. También ofrecemos servicio de mantenimiento del mismo."
            image="/elem4.png"
            alt="revision"
          />
        </div>
      </div>
    </div>
  );
}
