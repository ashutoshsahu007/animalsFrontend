import Image from 'next/image'
import React from 'react'

function LeftNavBar() {
    return (

        <div className="border-2 border-gray-2000 py-4 px-3 hidden md:block " >

            <ul className="flex flex-col gap-5 text-left " >

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaBreederImages/Kemnalinformation.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">Kemnal information</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-8" src="/joinasaBreederImages/addyourpet.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        add your pet</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-8" src="/joinasaBreederImages/yourPetsList.svg"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        your pet List</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaBreederImages/yourenquiry.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        your enquiry</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaBreederImages/payment.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        payment</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaBreederImages/mating.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        mating</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaBreederImages/adoption.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        adoption</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaBreederImages/customersReviews.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        customers Reviews</a>
                </li>

            </ul>
        </div>
    )
}

export default LeftNavBar
