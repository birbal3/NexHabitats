import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">
  <p className="px-16 pb-4 italic">
    At NexHabitats Design, we specialize in crafting personalized interior designs that transform ordinary spaces into extraordinary homes. Our focus is on blending creativity, functionality, and style to create interiors that truly reflect our clients’ lifestyles and preferences. Trusted by many homeowners, we deliver high-quality, customized solutions that bring visions to life with precision and elegance. Whether it’s designing a new home or renovating an existing one, we ensure every detail is thoughtfully planned and executed. With a passion for innovation and a commitment to excellence, NexHabitats Design turns every space into a beautiful, functional, and welcoming environment.
  </p>
</div>

            </div>
        </div>
    );
}