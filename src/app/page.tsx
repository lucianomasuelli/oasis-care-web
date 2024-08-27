'use client'

import Image from "next/image";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Nosotros from "./components/nosotros";
import { useState } from "react";

export default function Home() {
  const [open , setOpen] = useState(false);
  return (
    <main className=" bg-background">
      <div className={` bg-cover bg-center h-screen bg-[url('/backgroundImage.jpg')] rounded-b-[75px]  z-50`}>
        <div className={`${open ? ' backdrop-blur-sm' : ''} duration-1000 h-screen   justify-center align-middle items-center`}>
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
