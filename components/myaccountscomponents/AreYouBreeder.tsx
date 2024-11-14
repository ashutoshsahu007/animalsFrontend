'use client'

import Image from "next/image"
import React from "react"

function AreYouBreeder() {
    return (
        <div className=" w-full  ">

            <div className="flex  items-center  w-[90%] m-auto p-4 my-4">
                {/* icon */}
                <div className="w-[100px]">
                    <Image src="/images/usericons.svg" width={50} height={50} alt="Are you breeder" />
                </div>

                {/* text content */}
                <div className="md:ml-4 ml-5">
                    <p className="font-bold md:text-3xl text-xl mb-1">Are You A Breeder?</p>
                    <p className="text-sm">It takes only a few clicks to connect with  genuine  pet lover . <span className="text-[#0C7203] font-bold">Register Now!</span></p>
                </div>
            </div>
        </div>
    )
}

export default AreYouBreeder
