import Image from "next/image";
import { grotesk } from "@/app/fonts/fonts";

export default function Footer() {
  return (
    <footer className={`${grotesk.className} bg-[#313129] text-white p-10`}>
      <div className="container mx-auto flex flex-wrap justify-between">


        {/* Sección de contacto */}
        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold mb-4">Contáctanos</h3>
          <p className="font-normal">
            Email:{" "}
            <a href="mailto:contacto@empresa.com" className="hover:underline">
              contacto@empresa.com
            </a>
          </p>
          <p>Teléfono: +54 9 261 123 4567</p>
        </div>

        {/* <!-- Sección de redes sociales --> */}
        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank">
              {/* <Image src="#" alt="Facebook" /> */}
            </a>
            <a href="https://instagram.com" target="_blank">
              {/* <Image src="#" alt="Instagram" /> */}
            </a>
            <a href="https://twitter.com" target="_blank">
              {/* <Image src="#" alt="Twitter" /> */}
            </a>
          </div>
        </div>

        
      </div>
      {/* <!-- Copyright --> */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>© 2024 Oasis Care. Todos los derechos reservados.</p>
          <a href="/terms" className="text-gray-400 hover:underline">
            Términos y condiciones
          </a>{" "}
          |
          <a href="/privacy" className="text-gray-400 hover:underline">
            Política de privacidad
          </a>
        </div>
    </footer>
  );
}
