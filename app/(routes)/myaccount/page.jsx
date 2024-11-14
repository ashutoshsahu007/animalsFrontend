'use client'

import AreYouBreeder from "@/components/myaccountscomponents/AreYouBreeder"
import Footer from "@/components/myaccountscomponents/Footer"
import Myinfo from "@/components/myaccountscomponents/Myinfo"
import MyinfoBox from "@/components/myaccountscomponents/MyinfoBox"
import SecondNavbar from "@/components/myaccountscomponents/SecondNavbar";
import Link from "next/link"

function page() {
    return (
        <div>

            <SecondNavbar />

            <Myinfo />
            <AreYouBreeder />
            <MyinfoBox />


            {/* join us */}

            <div className="w-full mt-10 mb-5">

                <div className="w-[90%] m-auto">

                    <p className="font-bold md:text-3xl mb-5">JOIN US</p>

                    {/* join Boxes */}

                    <div className="md:flex gap-5 flex-wrap items-center justify-between w-full ">

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer mb-5 md:w-[32%]"><Link href="joinasabreeder">join as a Breeder</Link></p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer mb-5 md:w-[32%]"><Link href="joinasaDogWalker">join as a Dog Walker</Link></p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer mb-5 md:w-[32%]"><Link href="joinasasitter">join as a sitter</Link></p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer mb-5 md:w-[32%]"><Link href="joinasaDogGroomer">join as a Dog Groomer</Link></p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer mb-5 md:w-[32%]"><Link href="joinasaDogTrainer">join as a Dog Trainer</Link></p>

                        <p className="bg-black text-[#15FF00] uppercase font-bold md:text-xl py-3 px-9 rounded-xl text-center shadow-lg cursor-pointer mb-5 md:w-[32%]"><Link href="joinasaVeterinarian">join as a Veterinarian</Link></p>


                    </div>


                </div>
            </div>

            <Footer />

        </div>
    )
}

export default page
