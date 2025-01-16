import Image from "next/image";
import { grotesk } from "@/app/fonts/fonts";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`${grotesk.className} bg-[#313129] text-white p-10 overflow-hidden`}>
      <div className="container mx-20 flex flex-wrap justify-center gap-60">


        {/* Sección de contacto */}
        <div className="w-auto md:w-1/4 mb-6">
          <h3 className="font-bold mb-4">Contactanos</h3>
          <p className="font-normal">
            Email:{" "}
            <a href="mailto:oasiscaremdz@gmail.com" className="hover:underline">
              oasiscaremdz@gmail.com
            </a>
          </p>
          <p>Teléfono: +54 9 261 683 9870</p>
        </div>

        {/* <!-- Sección de redes sociales --> */}
        <div className=" w-min md:w-1/4 mb-6 ">
          <h3 className="font-bold mb-4">Seguinos</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/oasiscare_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
              <FaInstagram className="size-8" />
            </a>
          
          </div>
        </div>

        
      </div>
      {/* <!-- Copyright --> */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>© 2025 Oasis Care. Todos los derechos reservados.</p>
          {/* <a href="/terms" className="text-gray-400 hover:underline">
            Términos y condiciones
          </a>{" "}
          | 
          <a href="/privacy" className="text-gray-400 hover:underline">
            Política de privacidad
          </a> */}
        </div>
    </footer>
  );
}
