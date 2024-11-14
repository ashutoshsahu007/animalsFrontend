import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import Addyourgroominginformation from '@/components/MyAccountSubComponents/joinasaDogGroomer/Addyourgroominginformation'
import LeftnavBar from '@/components/MyAccountSubComponents/joinasaDogGroomer/LeftnavBar'
import React from 'react'

function page() {
    return (
        <div className='mb-10'>

            <SecondNavbar />

            {/* Navbar and form */}

            <div className="flex px-2 gap-4 mb-9" >


                <LeftnavBar className="w-[20%] z-10" />

                <div className="md:w-[80%] w-full  md:px-6 px-2">

                    <Addyourgroominginformation />

                </div>

            </div>



        </div>
    )
}

export default page
