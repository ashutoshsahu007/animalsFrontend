import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import OurPromises from '@/components/MyAccountSubComponents/joinasaBreeder/OurPromises'
import AddYourPersonalInformation from '@/components/MyAccountSubComponents/joinasasitter/AddYourPersonalInformation'
import LeftnavBar from '@/components/MyAccountSubComponents/joinasasitter/LeftnavBar'
import React from 'react'


function page() {
    return (
        <div className='mb-10'>

            <SecondNavbar />

            {/* Navbar and form */}


            <div className="flex px-2 gap-4 mb-9" >

                <LeftnavBar className="w-[20%] z-10" />

                <div className="md:w-[80%] w-full  md:px-6 px-2">

                    <AddYourPersonalInformation />

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
