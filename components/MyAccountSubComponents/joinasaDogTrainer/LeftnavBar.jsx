import React from 'react'
import Image from 'next/image'

function LeftnavBar() {
    return (
        <div className="border-2 border-gray-2000 py-4 px-3 hidden md:block " >

            <ul className="flex flex-col gap-5 text-left " >

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaDogTrainerImages/Trininginformation.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#"> Trining information</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaDogTrainerImages/addyourpet.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">

                        add your pet</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaDogTrainerImages/yourpetList.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        your pet List</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaDogTrainerImages/yourenquiry.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        your enquiry</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaDogTrainerImages/payment.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        payment</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasaDogTrainerImages/customersReviews.png"
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

export default LeftnavBar
