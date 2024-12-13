import { card } from "@nextui-org/theme";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ServiceCard(props: {
  title: string;
  description: string;
  icon?: any;
}) {

  const [textOverflow, setTextOverflow] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setTextOverflow(descriptionRef.current.scrollHeight > cardRef.current?.clientHeight!);
    }
  }, [props.description]);

  return (
    <div className="group flex flex-col md:w-auto w-72 md:min-h-64 sm:h-52 h-[30rem] p-5 bg-[#F6F6F6] z-30 border border-primaryGreen-500 rounded-2xl items-center overflow-visible sm:mt-14 mt-20 shadow-2xl relative sm:hover:bg-gradient-to-r from-[#2D2D2D] to-[#646853] sm:hover:text-white md:hover:h-96 duration-200 md:max-h-fit   ">
      <Image
        src={"/Rectangle 10.png"}
        alt="trapezoid"
        width={199}
        height={199}
        className="-mr-[22px] w-24 -mt-16"
      ></Image>

      <Image
        src={props.icon}
        alt=""
        width={57}
        height={61}
        className="absolute z-40 w-12 max-h-12 -mt-12 ml-[10px]"
      ></Image>

      <div className="md:w-[80%] w-3/4 max-h-full overflow-hidden relative flex flex-col h-full  " ref={cardRef}>
        <h2 className="font-bold text-center text-lg">{props.title}</h2>
        <p
          ref={descriptionRef}
          className="pt-5 text-gray-600 sm:text-justify text-left sm:group-hover:text-white lg:text-base md:text-sm h-full self-center"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></p>
        {textOverflow && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#F6F6F6] to-transparent pointer-events-none group-hover:invisible invisible md:visible"></div>
        )}
      </div>
    </div>
  );
}
