'use client'
import Image from "next/image"
import React from 'react'

function Walkerboxw() {
    return (
        <div className="w-full mb-5 ">

            <div className="sm:flex w-[90%] m-auto md:justify-between justify-between sm:justify-around mt-4 gap-5 flex-wrap">

                {/* boxs */}

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/walkerimages/walkerinformation.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">walker information</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/walkerimages/yourBooking.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">your Booking</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/walkerimages/InquiryReceive.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Inquiry Receive</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/walkerimages/Payment.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Payment </p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/walkerimages/Reminder.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Reminder </p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/walkerimages/YourBadges.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Your Badges </p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/walkerimages/CustomersReviews.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <p className="font-bold md:text-2xl capitalize">Customers Reviews </p>
                </div>



            </div>



        </div>
    )
}

export default Walkerboxw
