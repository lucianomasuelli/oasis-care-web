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
    <div className="w-[100vw] sm:w-[80vw] h-[35vh] overflow-hidden rounded-r-[200px] -mt-5 relative">
      <svg width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill={props.color}></rect>
      </svg>
      <div className="absolute inset-0 flex flex-col items-left justify-center ml-[40%] w-[40%] ">
        <div className="flex align-middle items-center">
          <Image src={props.image} alt={props.alt} width={50} height={50} />
          <h1 className="text-white font-bold text-3xl">{props.number}</h1>
        </div>
        
        <h3 className="text-white font-bold text-2xl">{props.title}</h3>
        <p className="text-white font-normal text-xl">{props.text}</p>
      </div>
    </div>
  );
}
