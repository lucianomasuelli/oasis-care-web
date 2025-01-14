import { card } from "@nextui-org/theme";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ServiceCard(props: {
  title: string;
  children: React.ReactNode;
  icon?: any;
  color: string;
  textColor?: string;
}) {
  const [textOverflow, setTextOverflow] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setTextOverflow(
        descriptionRef.current.scrollHeight > cardRef.current?.clientHeight!
      );
    }
  }, [props.children]);

  return (
    <div
      style={{ backgroundColor: props.color }}
      className="group flex flex-col md:w-auto w-72 md:min-h-64 sm:h-96 h-[30rem] p-5 z-30 border border-primaryGreen-500 rounded-2xl items-center overflow-visible sm:mt-14 mt-20 shadow-2xl relative duration-200 md:max-h-fit"
    >
      <Image
        src={props.icon}
        alt="trapezoid"
        width={199}
        height={199}
        className="-mr-[22px] w-24 -mt-16"
      />
      
      <div className="md:w-[80%] w-3/4 max-h-full overflow-hidden relative flex flex-col h-full" ref={cardRef}>
        <h2
          style={{ color: props.textColor }}
          className="font-bold text-center sm:text-2xl text-xl"
        >
          {props.title}
        </h2>
        <div
          style={{ color: props.textColor }}
          ref={descriptionRef}
          className="mt-5 sm:text-justify text-left sm:text-xl text-lg h-full self-center overflow-y-scroll sm:overflow-y-auto"
        >
          {props.children}
        </div>
        {textOverflow && (
          <div 
            style={{ backgroundImage: `linear-gradient(to top, ${props.color}, transparent)` }} 
            className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t pointer-events-none group-hover:invisible md:invisible visible"
          ></div>
        )}
      </div>
    </div>
  );
}
