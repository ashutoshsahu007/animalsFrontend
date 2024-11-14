'use client'
import Image from "next/image"
import React from "react"
function MyinfoBox() {
    return (
        <div className="w-full mb-5 ">

            <div className="sm:flex w-[90%] m-auto md:justify-between justify-between sm:justify-around mt-4 gap-5 flex-wrap">

                {/* boxs */}

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/pngimages/man.png"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">Edit Profile</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/images/box.svg"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">Your Orders </p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/pngimages/newoffer.png"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">New Offers</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/pngimages/security.png"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">Login & Secuirty</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/pngimages/wallet.png"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">Your Payment</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/pngimages/location.png"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">Your Address</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/pngimages/star.png"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">Reviews By You</p>
                </div>

                <div className="bg-black text-white shadow-xl flex gap-5 flex-col items-center cursor-pointer justify-center py-8 px-5 mb-5 md:w-[31%] sm:w-[45%] rounded-xl">
                    <Image src="/pngimages/refer.png"
                        width={200}
                        height={200}
                        alt="Dog"
                    />
                    <p className="font-bold md:text-3xl">Reffer & Earn</p>
                </div>
            </div>



        </div>

    )
}

export default MyinfoBox
