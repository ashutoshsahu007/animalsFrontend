import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import AddYourInformation from '@/components/MyAccountSubComponents/joinasaDogWalker/AddYourInformation'
import LeftNavBar from '@/components/MyAccountSubComponents/joinasaDogWalker/LeftNavBar'

import React from 'react'

function page() {
    return (
        <div className='mb-10'>

            <SecondNavbar />

            {/* Navbar and form */}


            <div className="flex px-2 gap-4 mb-9" >


                <LeftNavBar className="w-[20%] z-10" />

                <div className="md:w-[80%] w-full  md:px-6 px-2">

                    <AddYourInformation />

                </div>

            </div>



        </div>
    )
}

export default page
