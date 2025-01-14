import Image from "next/image";

export default function WorkPatternL(props: {
  color: string;
  number: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="w-[100vw] sm:w-[80vw] sm:h-[35vh] h-[35vh] overflow-hidden rounded-r-[200px] -mt-5 relative">
      <svg width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill={props.color}></rect>
      </svg>
      <div className="absolute inset-0 flex flex-col items-left justify-center ml-[20%] w-[68%] ">
        <div className="flex align-middle items-center">
          <Image src={props.image} alt={props.alt} width={50} height={50} className=" size-10 sm:size-auto" />
          <h1 className="text-white font-bold sm:text-3xl text-2xl">{props.number}</h1>
        </div>
        
        <h3 className="text-white font-bold sm:text-2xl text-xl">{props.title}</h3>
        <p className="text-white font-normal sm:text-xl text-lg">{props.text}</p>
      </div>
    </div>
  );
}
