import Image from "next/image";

export default function ServiceCard(props: {
  title: string;
  description: string;
  icon?: any;
}) {
  return (
    <div className="flex flex-col 2xl:w-[400px] 2xl:h-[300px] xl:w-[310px] xl:h-60 lg:w-60 lg:h-60 md:w-60 md:h-80 sm:w-56 sm:h-52 w-60 h-60 p-5 bg-[#F6F6F6] z-30 border border-primaryGreen-500 rounded-2xl items-center overflow-visible sm:mt-14 mt-32 shadow-2xl ">
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

      <div className="md:w-[80%] w-3/4">
        <h2 className="font-bold text-center">{props.title}</h2>
        <p className="pt-5 text-gray-600 text-center">{props.description}</p>
      </div>
    </div>
  );
}
