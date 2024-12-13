import ServiceCard from "./serviceCard";


export default function ServicesGrid() {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-2 md:gap-4 gap-4 min-[900px]:justify-stretch max-w-[60rem] items-center align-middle self-center justify-center ">

            <ServiceCard
                title="Sistema de Riego"
                description=" <strong>Diseño e instalación:</strong> Sistemas personalizados y eficientes para cada jardín. </br>
                
                <strong>Mantenimiento y calibración:</strong> Revisiones y ajustes para un riego óptimo y sostenible."
                icon={"/riego.svg"}
            />
            <ServiceCard
                title="Diseño de jardines y especios verdes"
                description="<strong>Proyectos personalizados:</strong> 
                Diseño funcional y estético según tus necesidades. </br>
                <strong>Evaluación y asesoramiento:</strong> Análisis del terreno y selección de especies adecuadas. </br> 
                <strong> Sostenibilidad: </strong> Enfoque xeropaisajístico para reducir el consumo de agua."
                icon={"/jardines.svg"}
            />
            <ServiceCard
                title="Mantenimiento"
                description="<strong>Podas y limpiezas:</strong> Mantén tu espacio verde impecable. </br> 
                <strong>Desmalezado:</strong> Eliminamos hierbas invasoras. </br>
                <strong>Puestas a punto:</strong> Renovamos y optimizamos áreas específicas."
                icon={"/flor.svg"}
            />
            <ServiceCard
                title="Movimiento de suelos"
                description="<strong>Nivelación.</strong> </br>
                <strong>Preparación del terreno:</strong> Suelo listo para vegetación o construcción."
                icon={"/terreno.svg"}
            />
        </div>
    );
}