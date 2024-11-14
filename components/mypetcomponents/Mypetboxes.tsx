'use client'
import Image from "next/image"
import React from "react"

function mypetboxes() {
    return (
        <div className="w-full mb-5 ">

            <div className="sm:flex w-[90%] m-auto md:justify-between justify-between sm:justify-around mt-4 gap-5 flex-wrap">

                {/* boxs */}

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/Kennelinformation.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Kennel information</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/AddYourpet.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Add Your pet </p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/yourpetlist.svg"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">your pet list </p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/yourBooking.svg"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">your Booking </p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/inquiryRecive.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">inquiry Recive</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/Payment.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Payment</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/Matting.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Matting</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/Adoption.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Adoption</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/mypetimages/CoustomerReviews.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Coustomer Reviews</p>
                </div>


            </div>



        </div>
    )
}

export default mypetboxes
