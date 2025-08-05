"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            color:"#555879"
        },
        {
            id: "02",
            catagory: "KITCHING SETUP",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            color:"#98A1BC"
        },
        {
            id: "03",
            catagory: "DROWING SETUP",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            color:"#DED3C4"
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            title: "Clean Family Room",
            image: "/image/living.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            color:"#F4EBD3"
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                    </div>

                   <div
                    className="relative inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-700 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:opacity-100 before:z-0 z-0"
                    style={{
                        backgroundColor: item.color, 
                    }}
                    >

                    <p className="tracking-wider -rotate-90 z-0">{item.catagory}</p>
                    <span className="z-0">{item.id}</span>
                    </div>


                </div>
            ))}
        </div>
    )
}