import { grotesk } from "../fonts/fonts";

export default function SectionTitle(props: { title: string, position?: string, whiteTxt?: boolean }) {
  return (
    <div className={`${props.position} ${grotesk.className}  flex flex-col relative`}>
      <div className="flex flex-col  pt-5 relative items-center max-w-max ">
        <h1 className={`${props.whiteTxt ? "text-white" : "text-[#585845] "} 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl max-[375px]:text-2xl  font-[500] tracking-[0.2em] z-30 `}>
          {props.title}
        </h1>
        <hr className={` ${props.whiteTxt ? "border-[#E5EAC3]" : "border-primaryGreen-500"} border-2  divide-solid xl:w-32 w-20 mt-2`}></hr>
      </div>
    </div>
  );
}
