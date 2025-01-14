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
        YAxiuc oicmds cs lccsdcncjkdsn kjcsdnckjnkn kjcnsdkjn c cdsc
        sdclcnlscdlkcdlscc dcklsknckcnls lkccnlclsl csdl nlclclkccsd lckcl.
      </p>
      <p className="tracking-[0.2em] opacity-80 ">Servicios</p>
      <div className="grid grid-cols-2 gap-4">
        {props.project.services?.map((service, index) => (
          <p
            className=" text-sm text-mantenimiento-600 bg-mantenimiento-500 p-2 rounded-full text-center align-middle border-1 border-mantenimiento-600 w-40"
            key={service.id}
          >
            {service.name}
          </p>
        ))}
      </div>
    </div>
  );
}
