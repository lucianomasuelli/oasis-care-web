import Image from "next/image";
import Header from "./components/header";
import Inicio from "./components/inicio";

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <div className="bg-cover bg-center h-screen bg-[url('/backgroundImage.jpg')] rounded-b-[75px] backdrop-filter backdrop-brightness-[130%] backdrop-contrast-[90%]">
        <div className="h-screen backdrop-filter backdrop-brightness-[70%] backdrop-contrast-[110%] justify-center align-middle items-center ">
          <Header />
          <Inicio />
        </div>
      </div>
    </main>
  );
}
