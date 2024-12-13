import SectionTitle from "./sectionTitle";
import { grotesk } from "../fonts/fonts";
import { useState } from "react";
import Pattern from "./bgPattern";
import Image from "next/image";

export default function Contacto() {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("El mensaje fue enviado exitosamente.");
    } else {
      alert("Hubo un problema al enviar el mensaje.");
    }
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
        <label className={labelStyle}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputStyle}
          />
        </label>
        <label className={labelStyle}>
          <input
            type="text"
            name="service"
            placeholder="Servicio"
            value={formData.service}
            onChange={handleChange}
            required
            className={inputStyle}
          />
        </label>
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
