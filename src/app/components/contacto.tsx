import SectionTitle from "./sectionTitle";
import { grotesk } from "../fonts/fonts";
import { useState } from "react";
import Pattern from "./bgPattern";
import Image from "next/image";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

export default function Contacto() {
  const services = [
    { key: "Diseño de jardines y espacios verdes", value: "Diseño de jardines y espacios verdes" },
    { key: "Sistemas de riego", value: "Sistemas de riego" },
    { key: "Mantenimiento de jardines", value: "Mantenimiento de jardines" },
    { key: "Movimiento de suelos", value: "Movimiento de suelos" },
  ];

  const [service, setService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const whatsappNumber = "5492616839870"; // Reemplazar con el número de WhatsApp deseado
    const whatsappMessage = `Hola! Mi nombre es ${name}. %0AEstoy interesado/a en el servicio de ${service}. %0A${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappLink, "_blank");
    console.log(whatsappLink)
  };

  const labelStyle = "flex flex-col text-white items-center my-2";

  const inputStyle =
    "w-[80%] max-w-[1000px] bg-[#646853] border-2 border-white p-2";

  return (
    <div
      className={`${grotesk.className} relative 2xl:px-80 xl:px-60 lg:px-40 md:px-40 sm:px-20 px-0 h-[90vh] bg-[#39392A] border-[#646853] overflow-hidden align-middle z-10`}
      id="contacto"
    >
      <div className="relative p-10 z-10">
        <SectionTitle title="CONTACTO" position="items-end" whiteTxt />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col relative z-10 ">
        <label className={labelStyle}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputStyle}
          />
        </label>
        <div className="flex flex-col items-center my-2 text-color-white">
          <Select
            label="Servicio"
            variant="underlined"
            name="service"
            color="primary"
            value={formData.service}
            required
            className="w-[80%] "
            radius="none"
            onChange={(e) => {
              setService(e.target.value);
              setFormData({ ...formData, service: e.target.value });
              console.log(e.target.value);
            }}
            classNames={{
              base: "text-white",
              listboxWrapper:
                " text-white bg-[#646853] border-2 border-white p-2",
              mainWrapper: "text-white bg-[#646853] border-2 border-white ",
              description: "text-white",
            }}
          >
            {services.map((service) => (
              <SelectItem key={service.key} value={service.key}>
                {service.value}
              </SelectItem>
            ))}
          </Select>
        </div>

        <label className={labelStyle}>
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputStyle} pb-20`}
          />
        </label>
        <button
          type="submit"
          className="text-white xl:text-2xl font-medium border-4 p-2 xl:w-60 xl:h-20 w-40  self-center mt-10 backdrop-blur-md hover:-translate-y-1 hover:shadow-2xl hover:border-[#E5EAC3] xl:active:w-56 active:w-36 active:backdrop-blur-none  duration-200 "
        >
          Enviar
        </button>
      </form>
      <div className=" absolute sm:w-[40%] sm:left-0  -mt-[60vh]  overflow-hidden">
        <Image
          src="/tramas2.png"
          alt="tramas"
          width={834}
          height={1388}
          className="object-fill rotate-180  "
        />
      </div>
    </div>
  );
}
