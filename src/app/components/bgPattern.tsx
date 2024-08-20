import Image from "next/image";

export default function Pattern(props: {className: string}) {
    //Create a variable to store the width of the image as a string for tailwind
    //const imgProp = "w-[" + props.width.toString() + "%] + h-[" + props.height.toString() + "%]";
    return (
        <div className={props.className}>
            <Image src='/tramas1.png' alt='tramas' width={834} height={1388}
            className="object-contain"  />
        </div>
    )
}