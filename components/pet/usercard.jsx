"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import React from 'react'

const UserCard = () => {
  return (
    // Card main Box
    <div className="px-5 py-10">
      {/* Cards Box */}
      <div className="md:w-[100%] w-[90%] m-auto flex flex-wrap justify-around gap-6">

        {/* Card 1 */}
        <div className="bg-black text-white shadow-xl flex mb-6 flex-row items-center cursor-pointer justify-center rounded-xl w-[381px] md:w-[45%] lg:w-[30%] h-[180px] md:h-[245px] overflow-hidden px-2">
          {/* Image div */}
          <div className="w-[50%] h-full relative">
            <Image
              src="/7xm.png"
              className="absolute bottom-[12px] w-[100%] h-auto scale-[1.7] md:scale-125"
              width={400}
              height={400}
              alt="image"
            />
          </div>
          {/* Text ContentBox */}
          <div className="w-[50%] flex flex-col items-center justify-center">
            <p className="font-bold text-[18px] md:text-[22px] lg:text-[25px] text-center">Explore Breed</p>
            <button className="px-3 py-1 md:px-4 md:py-2 md:font-bold bg-white border-2 text-black rounded-lg mt-3 text-[14px] md:text-[16px]">
              Click Here
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black text-white shadow-xl flex mb-6 flex-row items-center cursor-pointer justify-center rounded-xl w-full md:w-[45%] lg:w-[30%] h-[180px] md:h-[245px] overflow-hidden px-2">
          {/* Image div */}
          <div className="w-[50%] h-full relative">
            <Image
              src="/ladies.png"
              className="absolute bottom-[12px] w-[100%] h-auto scale-[1.7] ml-9 md:scale-125 md:ml-10"
              width={400}
              height={400}
              alt="image"
            />
          </div>
          {/* Text ContentBox */}
          <div className="w-[50%] flex flex-col items-center justify-center">
            <p className="font-bold text-[18px] md:text-[22px] lg:text-[25px] text-center">Confuse Pet</p>
            <button className="px-3 py-1 md:px-4 md:py-2 md:font-bold bg-white border-2 text-black rounded-lg mt-3 text-[14px] md:text-[16px]">
              Call Us
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default UserCard;
