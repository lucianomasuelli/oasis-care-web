import { projects } from "@/app/data/projects";
import React from "react";
import SectionTitle from "../sectionTitle";
import Image from "next/image";
import { grotesk, fustat } from "@/app/fonts/fonts";
import ProjectsInfo from "./projectsInfo";
import { Suspense } from "react";

const Proyectos = () => {
  // Detect if screen is mobile
  const isMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
  };

  return (
    <div
      className={`${grotesk.className} sm:mt-20 mt:0 relative min-[1700px]:mx-80 xl:mx-60 lg:mx-40 min-[900px]:mx-20 md:mx-0 mx-10 z-10 text-black `}
      id="proyectos"
    >
      <SectionTitle title="PROYECTOS" />

      <div className="my-10 ">
        {projects.map((project, key) =>
          project.id % 2 == 0 || isMobile() ? (
            <div key={key} className="flex sm:flex-row flex-col gap-4 mb-20">
              <div className="sm:w-[40%]">
                <ProjectsInfo project={project} />
              </div>
              <div
                className={`grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2 sm:justify-stretch `}
              >
                {project.images.map((image, index) => (
                  index !== 5 ? (
                    <Image
                      src={image.src}
                      alt="chozos"
                      key={image.id}
                      width={700}
                      height={500}
                      className={` ${
                        image.id === 5
                          ? "sm:block hidden col-start-1 col-end-3 w-[40vw] h-[25vw]"
                          : " sm:w-[20vw] sm:h-[15vw]  "
                      } h-80 object-cover duration-300 saturate-150 rounded-tr-[50px] rounded-bl-[50px]`}
                    />
                  ): (
                    <Image
                      src={image.src}
                      alt="chozos"
                      key={image.id}
                      width={1000}
                      height={1000}
                      className=" "
                    />
                  )
                ))}
              </div>
            </div>
          ) : (
            <div key={key} className="flex sm:flex-row flex-col gap-4 mb-20">
              <div
                className={`grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2 justify-stretch  `}
              >
                {project.images.map(
                  (image, index) => (
                    index !== 5 ? (
                      <Image
                        src={image.src}
                        alt="chozos"
                        key={image.id}
                        width={700}
                        height={500}
                        className={` ${
                          image.id === 5
                            ? "sm:block hidden col-start-1 col-end-3 w-[40vw] h-[25vw]"
                            : " sm:w-[20vw] sm:h-[15vw] "
                        } h-72 object-cover duration-300 saturate-150 rounded-tr-[50px] rounded-bl-[50px]`}
                      />
                    ): (
                      <Image
                        src={image.src}
                        alt="chozos"
                        key={image.id}
                        width={1000}
                        height={1000}
                        className=""
                      />
                    )
                    
                ))}
              </div>
              <div className="sm:w-[40%]">
                <ProjectsInfo project={project} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Proyectos;
