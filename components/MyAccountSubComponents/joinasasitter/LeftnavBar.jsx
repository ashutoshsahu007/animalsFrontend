import React from 'react'
import Image from 'next/image'

function LeftnavBar() {
    return (
        <div className="border-2 border-gray-2000 py-4 px-3 hidden md:block " >

            <ul className="flex flex-col gap-5 text-left " >

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasasitterImages/Kemnalinformation.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">Kemnal information</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasasitterImages/addyoupet.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">

                        add your pet</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasasitterImages/yourpetList.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        your pet List</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasasitterImages/yourenquiry.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        your enquiry</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasasitterImages/payment.png"
                        width={200}
                        height={200}
                        alt="image"
                    />
                    <a className='text-sm capitalize font-bold ml-2' href="#">
                        payment</a>
                </li>

                <li className='flex items-center '>
                    <Image className="w-10" src="/joinasasitterImages/customersReviews.png"
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
