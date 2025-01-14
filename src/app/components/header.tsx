"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const liStyle =
    "hover:border-[6px] border-[6px] border-transparent  hover:border-white py-2 px-6";

  const liStyleMobile =
    "border-[6px] border-transparent hover:border-[6px] focus:border-[6px] hover:border-white py-2 px-6 m-2 flex flex-col";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-row w-full sm:h-auto h-auto items-center sm:justify-center justify-between z-50 mr-4 overflow-hidden ">
      <div className="flex">
        <a href="#inicio">
         <Image
          src="/logo1.svg"
          alt="logo"
          width={150}
          height={150}
          className="sm:mr-10 sm:ml-0 ml-0 h-auto sm:transform-none transform scale-50 sm:w-[8rem] "
          priority={true}
        /> 
        </a>
        
      </div>

      <ul className="sm:flex flex-row items-center justify-center lg:gap-10  font-medium text-white lg:text-lg sm:text-md hidden ">
        <li className={liStyle}>
          <a href="#nosotros" onClick={(e) => handleClick(e, "nosotros")}>Nosotros</a>
        </li>
        <li className={liStyle}>
          <a href="#servicios" onClick={(e) => handleClick(e, "servicios")}>Servicios</a>
        </li>
        <li className={liStyle}>
          <a href="#proyectos" onClick={(e) => handleClick(e, "proyectos")}>Proyectos</a>
        </li>
        <li className={liStyle}>
          <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>Contacto</a>
        </li>
      </ul>

      {/*Mobile menu*/}
      <button className=" group sm:hidden " onClick={() => setOpen(!open)}>
        {/* Hamburguer */}
        <div
          className={`${
            open ? "hidden" : "block"
          }  px-10 py-8 space-y-1 relative`}
        >
          <div className="w-6 h-1  bg-white"></div>
          <div className="w-6 h-1  bg-white"></div>
          <div className="w-6 h-1  bg-white"></div>
        </div>

        {/* Close */}
        <div
          className={`${
            open ? "block " : "hidden"
          } px-10 py-8 relative  ml-auto justify-center `}
          onClick={() => setOpen(false)}
        >
          <div className="w-6 h-1 rotate-45 static bg-white"></div>
          <div className="w-6 h-1 -mt-1 -rotate-45 static bg-white"></div>
        </div>

        {/* menu */}
        <div className="flex  align-middle justify-center">
          <ul
            className={`${
              open ? "top-0 " : "-top-[100vh] "
            } duration-200 flex flex-col w-[90%] self-center items-center justify-center font-medium text-white bg-primaryGreen-500/95 backdrop-blur-sm absolute py-5 right-5 rounded-3xl sm:hidden mt-24 shadow-2xl z-50 `}
          >
            <li className={liStyleMobile}>
              <a href="#nosotros" onClick={(e) => handleClick(e, "nosotros")}>Nosotros</a>
            </li>
            <li className={liStyleMobile}>
              <a href="#servicios" onClick={(e) => handleClick(e, "servicios")}>Servicios</a>
            </li>
            <li className={liStyleMobile}>
              <a href="#proyectos" onClick={(e) => handleClick(e, "proyectos")}>Proyectos</a>
            </li>
            <li className={liStyleMobile}>
              <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>Contacto</a>
            </li>
          </ul>
        </div>
      </button>
    </header>
  );
}
