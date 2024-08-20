import { grotesk } from "../fonts/fonts";
import Pattern from "./bgPattern";

export default function Nosotros() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className={grotesk.className}>
        <h1 className="text-black lg:text-5xl md:text-4xl text-3xl font-light tracking-widest pt-40 ml-32 z-30 relative">
          NOSOTROS
        </h1>
      </div>
      <div className="flex flex-row justify-between ">
        <Pattern className="flex flex-row  justify-start -ml-36 mt-52 size-[30%] rotate-180 filter brightness-[70%] max-w-[350px] " />
        <Pattern className="flex flex-row justify-end -mt-52 w-[60%]" />
      </div>
    </div>
  );
}
