import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import LeftnavBar from '@/components/MyAccountSubComponents/joinasaDogTrainer/LeftnavBar'
import Pettrainerinfromation from '@/components/MyAccountSubComponents/joinasaDogTrainer/Pettrainerinfromation'
import React from 'react'


function page() {
    return (
        <div className='mb-10'>

            <SecondNavbar />

            {/* Navbar and form */}


            <div className="flex px-2 gap-4 mb-9" >

                <LeftnavBar className="w-[20%] z-10" />

                <div className="md:w-[80%] w-full  md:px-6 px-2">

                    <Pettrainerinfromation />

                </div>

            </div>



        </div>
    )
}

export default page
