export default function ProjectsInfo(props : {
    project: {
        id: number;
        title: string;
        description: string;
        images: { id: number; src: string; }[];
        services?: { id: number; name: string; }[];
    };
}) {
  return (
    <div >
      <p className="tracking-[0.2em] opacity-80">Cliente</p>
      <h1 className="text-4xl mb-6">{props.project.title}</h1>
      <p className="tracking-[0.2em] opacity-80 ">Trabajo</p>
      <p className="mb-6 text-xl">
        {props.project.description}
      </p>
      <p className="tracking-[0.2em] opacity-80 ">Servicios</p>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 gap-1 w-fit">
        {props.project.services?.map((service, index) => (
          <p
            className={ ` ${service.name === "Mantenimiento" ? "text-mantenimiento-600 bg-mantenimiento-500 border-mantenimiento-600" : service.name === "Diseño" ? "text-diseño-600 bg-diseño-500 border-diseño-600" : service.name === "Riego" ? "text-riego-600 bg-riego-500 border-riego-600" : service.name === "Movimiento de suelos" ? "text-movimiento-600 bg-movimiento-500 border-movimiento-600" : ""} text-sm p-2 rounded-full text-center align-middle border-1  sm:w-40 w-auto max-w-32`}
            key={service.id}
          >
            {service.name}
          </p>
        ))}
      </div>
    </div>
  );
}
