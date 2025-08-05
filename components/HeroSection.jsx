import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] lg:h-[650px] xl:h-[750px]">
      {/* Full-width Image */}
      <Image
        src="/image/bg.jpg"
        fill
        alt="Interior Design"
        className="object-cover"
        priority
      />
 <div className="absolute inset-0 bg-black/50"></div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
        <div className="container px-6 text-center lg:text-left">
          <p className="tracking-widest text-white drop-shadow-lg">
            OFFER FOR THE BEST INTERIOR
          </p>
          <h1 className="py-4 text-3xl font-extrabold leading-tight text-white xl:text-6xl lg:text-4xl drop-shadow-lg">
           Turning houses into  
            <br />
            homes with style
          </h1>
          <p className="pb-6 text-white/90 xl:pb-10 drop-shadow-md">
            Transforming your vision into stunning spaces. <br /> We provide
            the best interior design for your Home. <br />
            Make every moment beautiful with the best interior design.
          </p>
         <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 border border-white hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
  Get Started <TbArrowUpRight className="w-5 h-5 ml-2" />
</button>

        </div>
      </div>
    </div>
  );
}
