import LeftNavBar from '@/components/MyAccountSubComponents/joinasaBreeder/LeftNavBar'
import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import Addyourbreedinginformation from '@/components/MyAccountSubComponents/joinasaBreeder/Addyourbreedinginformation'
import React from 'react'
import OurPromises from '@/components/MyAccountSubComponents/joinasaBreeder/OurPromises'

function page() {
    return (
        <div className='mb-10'>

            <SecondNavbar />

            {/* Navbar and form */}

            <div className="flex px-2 gap-4 mb-9" >

                <LeftNavBar className="w-[20%] z-10" />

                <div className="md:w-[80%] w-full  md:px-6 px-2">

                    <Addyourbreedinginformation />

                </div>

            </div>

            <div className='flex flex-col gap-5 px-5'>
                <OurPromises />
                <OurPromises />
            </div>

        </div>
    )
}

export default page


