"use client";

import Image from "next/image";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Nosotros from "./components/nosotros";
import { useState, useEffect } from "react";
import Servicios from "./components/servicesSection/servicios";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
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

      <Nosotros />
      <Servicios />
    </main>
  );
}
