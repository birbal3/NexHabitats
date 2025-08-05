import Link from "next/link";
import { TbArrowUpRight, TbPhoneCall } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="bg-zinc-100">
            <div className="container items-center text-center border-b-2 lg:justify-between lg:flex py-14">
                <div className="py-4">
                    <h1 className="text-3xl font-medium lg:text-6xl">Lets Get in touch </h1>
                </div>
               <Link
  href="/contact"
  className="items-center hidden px-5 py-2 font-medium text-white bg-black border border-white rounded-full shadow lg:inline-flex hover:bg-gray-800"
>
     <TbPhoneCall className="w-5 h-5 mr-2" />
  CONTACT US 
</Link>

            </div>
        </div>
    )
}