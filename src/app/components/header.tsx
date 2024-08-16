import Image from "next/image";

export default function Header() {
  const liStyle =
    "border-[6px] border-transparent hover:border-[6px] hover:border-white py-2 px-6 ";
  return (
    <header className="flex flex-row items-center justify-center z-50 mr-4 ">
      <div className="flex">
        <Image
          src="/logo1.svg"
          alt="logo"
          width={150}
          height={150}
          className="mr-20"
          priority={true}
        />
      </div>

      <ul className="flex flex-row items-center justify-center lg:gap-10  font-medium text-white lg:text-lg sm:text-md ">
        <li className={liStyle}>
          <a href="">Inicio</a>
        </li>
        <li className={liStyle}>
          <a href="">Nosotros</a>
        </li>
        <li className={liStyle}>
          <a href="">Servicios</a>
        </li>
        <li className={liStyle}>
          <a href="">Proyectos</a>
        </li>
        <li className={liStyle}>
          <a href="">Contacto</a>
        </li>
      </ul>
    </header>
  );
}
