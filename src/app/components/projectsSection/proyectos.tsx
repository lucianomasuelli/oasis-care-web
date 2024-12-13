import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { projects } from "@/app/data/projects";
import React from "react";
import SectionTitle from "../sectionTitle";
import Image from "next/image";
import { grotesk, fustat } from "@/app/fonts/fonts";

const Proyectos = () => {
  return (
    <div className={`${grotesk.className} sm:mt-20 mt:0 relative min-[1700px]:mx-80 xl:mx-60 lg:mx-40 min-[900px]:mx-20 md:mx-0 mx-10 z-10`} id="proyectos">
      <SectionTitle title="PROYECTOS" />

    <div className="my-10 ">
      <Accordion showDivider={false} defaultExpandedKeys={["1"]}>
        {projects.map((project) => (
          <AccordionItem
            key={project.id}
            aria-label={project.title}
            title={project.title}
            classNames={
              {
                base:"sm:my-4 my-2 ",
                title: `${fustat.className} text-[#E5EAC3] sm:text-2xl text-xl `,
                heading: " bg-gradient-to-r from-[#2D2D2D] to-[#646853] border-[#E5EAC3] border-2 rounded-xl sm:p-4 py-2 px-4 h-[10vh]   ",
                content: "bg-[#ECECDD] border-[#646853] border-2 rounded-xl p-4",
              }
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>{project.description}</p>
              </div>
              <div className={`grid grid-cols-2 md:grid-cols-3 gap-4  justify-stretch `}>
                {project.images.map((image, index) => (
                  <Image
                    src={image.src}
                    alt="chozos"
                    key={image.id}
                    width={1000}
                    height={400}
                    className={`${image.id === 1 ? "col-span-3 h-[200px] " : "h-[200px]"} ${image.id === 4 ? "sm:block hidden" : ""} w-full object-cover rounded-xl hover:scale-150 hover:-translate-y-20 duration-300`}
                  />
                ))}
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
      
    </div>
  );
};

export default Proyectos;
