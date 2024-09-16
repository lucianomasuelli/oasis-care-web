export default function SectionTitle(props: { title: string, position?: string }) {
  return (
    <div className={`${props.position} flex flex-col relative`}>
      <div className="flex flex-col  pt-5 relative items-center max-w-max ">
        <h1 className="text-black 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-light tracking-[0.2em] z-30 ">
          {props.title}
        </h1>
        <hr className="border-2 border-primaryGreen-500 divide-solid xl:w-32 w-20 mt-2"></hr>
      </div>
    </div>
  );
}
