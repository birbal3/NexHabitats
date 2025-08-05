import Image from "next/image";
import logo from "../public/image/image1.png";
import Navigation from "./Navigation";
import { TbBorderRadius } from "react-icons/tb";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-[9999] bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
          <div className="w-full bg-black text-white text-center py-2 text-sm font-medium z-[10000]">
            10% Off On Your First Room Design — Limited Time Offer! Grab today to have the code applied.
            </div>

            <div className="container flex items-center justify-between py-1 ">

                <Image src={logo} alt="logo" className="w-40 h-21 rounded-2xl" />

                <Navigation />
            </div>
        </div>
    );
}