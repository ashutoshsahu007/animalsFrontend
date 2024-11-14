'use client'
import Image from "next/image"
import React from 'react'

function TrainerBoxes() {
    return (
        <div className="w-full mb-5 ">

            <div className="sm:flex w-[90%] m-auto md:justify-between justify-between sm:justify-around mt-4 gap-5 flex-wrap">

                {/* boxs */}

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/TrainerImages/Trininginformation.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Trining information</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/TrainerImages/yourBooking.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">your Booking</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/TrainerImages/Yourincome.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Your income</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/TrainerImages/Reminder.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Reminder</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/TrainerImages/yourBadges.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">your Badges</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/TrainerImages/CustomerReviews.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Customer Reviews</p>
                </div>



            </div>



        </div>
    )
}

export default TrainerBoxes
