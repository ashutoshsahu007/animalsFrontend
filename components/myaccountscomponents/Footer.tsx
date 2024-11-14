'use client'
import React from "react"
import Image from "next/image"

function Footer() {
    return (
        <div className="mt-10">


            {/* footer */}
            <div className="w-full bg-black text-white p-5">

                {/* logo  */}
                <div>
                    <Image src="/images/animalsloverlogo.svg"
                        width={350}
                        height={350}
                        alt="logo" />
                </div>

                {/* contents */}

                {/* footers contents */}
                <div className="sm:flex justify-between  w-[90%] m-auto">

                    {/* contact us */}
                    <div >

                        <p className="font-bold text-2xl ">Contact us</p>

                        <div className="mt-3 flex flex-col gap-1">
                            <p className="flex items-center gap-2 font-bold">
                                <span><Image src="/images/email.svg"
                                    width={20}
                                    height={20}
                                    alt="location" />
                                </span>
                                hello@animalslover.co
                            </p>

                            <p className="flex items-center gap-2 font-bold">
                                <span><Image src="/images/call.svg"
                                    width={20}
                                    height={20}
                                    alt="location" />
                                </span>

                                <span>+91</span> 8252167751
                            </p>

                            <p className="flex items-center gap-2 font-bold">
                                <span><Image src="/images/location.svg"
                                    width={20}
                                    height={20}
                                    alt="location" />
                                </span>

                                Block A,5th Floor, Mourya Lok,Patna

                            </p>
                        </div>

                    </div>


                    {/* Our  services */}
                    <div>

                        <p className="font-bold text-2xl ">Our  Services</p>

                        <div className="flex flex-col gap-1 mt-3">
                            <p className="flex items-center gap-2 font-bold">
                                Book a Services
                            </p>

                            <p className="flex items-center gap-2 font-bold">
                                Dog Training
                            </p>

                            <p className="flex items-center gap-2 font-bold">
                                Dog Grooming
                            </p>

                            <p className="flex items-center gap-2 font-bold">
                                Dog Walking
                            </p>

                            <p className="flex items-center gap-2 font-bold">
                                Dog Hostel
                            </p>


                        </div>

                    </div>

                    {/* Join AnimalsLover */}

                    <div>
                        <p className="font-bold text-2xl "> Join Animalslover
                        </p>

                        <div>
                            <form action="#" className="w-full flex flex-col gap-4 mt-3">

                                <input className="py-1 px-3 text-black md:text-lg rounded-md " type="text" name="name" placeholder="Name" />

                                <input className="py-1 px-3 text-black md:text-lg rounded-md " type="email" name="email" placeholder="Email" />

                                <button className="bg-red-700 hover:bg-red-600 font-bold py-2 px-3 rounded-md">Subscribe Now</button>
                            </form>


                        </div>
                    </div>



                </div>

                {/* social media */}

            </div>

            <div className="w-full bg-[#0C7203] text-white">

                <div className="flex justify-end items-center w-[90%] m-auto gap-5 py-3">
                    <Image className=" cursor-pointer " src="/pngimages/youtube.png" width={50} height={50} alt="logo" />
                    <Image className=" cursor-pointer " src="/pngimages/instagram.png" width={50} height={50} alt="logo" />
                    <Image className=" cursor-pointer " src="/pngimages/linkedin.png" width={50} height={50} alt="logo" />
                </div>

            </div>

        </div>
    )
}

export default Footer
