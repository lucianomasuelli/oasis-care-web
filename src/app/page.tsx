'use client'

import Image from "next/image";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Nosotros from "./components/nosotros";
import { useState } from "react";

export default function Home() {
  const [open , setOpen] = useState(false);
  return (
    <main className=" bg-background ">
      <div className={` bg-cover bg-center h-screen bg-[url('/backgroundImage.jpg')] rounded-b-[75px] backdrop-filter backdrop-brightness-[130%] backdrop-contrast-[90%]`}>
        <div className={`${open ? ' backdrop-blur-sm' : ''} h-screen backdrop-filter backdrop-brightness-[70%] backdrop-contrast-[110%]  justify-center align-middle items-center`}>
          <Header open={open} setOpen={setOpen} />
          <div className={`${open ? 'blur-sm' : 'blur-none'}`}>
            <Inicio />
          </div>
          
        </div>
      </div>
      <Nosotros />
    </main>
  );
}
