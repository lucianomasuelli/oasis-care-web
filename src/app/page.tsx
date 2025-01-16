"use client";

import Image from "next/image";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Nosotros from "./components/nosotros";
import { useState, useEffect } from "react";
import Servicios from "./components/servicesSection/servicios";
import Contacto from "./components/contacto";
import Proyectos from "./components/projectsSection/proyectos";
import { Pattern2, Pattern3 } from "./components/bgPattern";
import Pattern from "./components/bgPattern";
import Footer from "./components/footer";
import Workflow from "./components/workflowSection/workflow";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if(typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
  
        // Detectar si se está haciendo scroll hacia arriba o hacia abajo
        if (currentScrollPos > prevScrollPos) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
  
        // Cambia el estado de `scrolled` dependiendo de la posición de scroll
        if (currentScrollPos > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
  
        // Actualiza la posición previa del scroll
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    
  }, [prevScrollPos]);

  return (
    <main
      className="bg-gradient-to-br from-background-500 from-60% via-40% to-background-600"
      id="inicio"
    >
      {/* Header con comportamiento dinámico en el fondo y visibilidad */}
      <div
        id="header"
        className={`w-screen justify-center align-middle z-50 top-0 flex fixed ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <div
          className={`top-0 z-50 ${
            scrolled
              ? "sticky bg-primaryGreen-500/80 backdrop-blur-sm shadow-lg max-w-[1000px] 2xl:w-[80%] md:w-[90%] sm:w-[90%] sm:h-20 h-16 align-middle flex justify-center mt-5 rounded-full"
              : "absolute bg-transparent  justify-center align-middle w-screen"
          } transition duration-300`}
        >
          <Header open={open} setOpen={setOpen} />
        </div>
      </div>

      <div className="bg-cover bg-center h-screen bg-[url('/backgroundImage.jpg')] rounded-b-[75px] relative z-10">
        <div
          className={`${
            open ? "backdrop-blur-sm" : ""
          } duration-1000 h-screen flex justify-center items-center`}
        >
          <div className={`${open ? "blur-sm" : "blur-none"}`}>
            <Inicio />
          </div>
        </div>
      </div>

      <div className={`${open ? "blur-sm " : "blur-none"} relative`}>
        <Workflow />
        <Servicios />
        <Proyectos />
        <Nosotros />
        <Contacto />
        <Footer />

        {/* Backgground Patterns */}
        <div className=" absolute top-0 left-0 w-full h-full pointer-events-none  ">
          <Pattern2 className="flex flex-row top-[35%]  justify-start sm:-ml-20 -ml-24 2xl:mt-48 sm:mt-60 mt-40 sm:w-[25%] w-[45%] max-w-[500px] rotate-180 filter brightness-[120%] absolute left-0 opacity-100 saturate-100 z-0  " />

          <Pattern className="flex flex-row top-[25%] justify-end sm:-mt-[40vh] -mt-72 pl-20 sm:w-[45%] sm:min-w-[600px] w-[80%] absolute right-0 min-[880px]:opacity-30 sm:opacity-30 opacity-30 z-0" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-x-hidden">
          <Pattern3 className="absolute top-[62%] left-0 sm:left-20 w-[30%] sm:w-[400px] filter saturate-150 brightness-[100%] opacity-20 z-0" />
          {/* <Pattern3 className="absolute top-[70%] left-[50%] sm:left-[40vw] w-[150px] filter saturate-100 brightness-[60%] rotate-90 opacity-10 z-0" /> */}
          <Pattern2 className="absolute top-[50%] left-[70%] sm:left-[70vw] w-[1000px] filter saturate-100 brightness-[120%] rotate-0 opacity-80 z-0" />
          <Pattern className="flex flex-row top-[80%] justify-end sm:-mt-[40vh] -mt-72 pl-20 sm:w-[45%] sm:min-w-[600px] w-[80%] absolute left-0 min-[880px]:opacity-30 sm:opacity-30 opacity-30 z-0 rotate-180" />
        </div>
      </div>
    </main>
  );
}
