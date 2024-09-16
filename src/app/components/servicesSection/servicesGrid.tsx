import ServiceCard from "./serviceCard";

export default function ServicesGrid() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-0 gap-4 justify-center justify-items-center ">
            <ServiceCard
                title="Sistema de Riego"
                description="oicdjodsicjsoi de cnciosd cjml sdcoj cisdjmclsdk csdlc lkcmsdlkcm"
                icon={"/riego.svg"}
            />
            <ServiceCard
                title="Diseño de jardines y especios verdes"
                description="oicdjodsicjsoi"
                icon={"/jardines.svg"}
            />
            <ServiceCard
                title="Mantenimiento de jardines"
                description="oicdjodsicjsoi"
                icon={"/flor.svg"}
            />
            <ServiceCard
                title="Nivelación del terreno"
                description="oicdjodsicjsoi"
                icon={"/terreno.svg"}
            />
            <ServiceCard
                title="Xeropaisajismo"
                description="oicdjodsicjsoi"
                icon={"/xero.svg"}
            />
        </div>
    );
}