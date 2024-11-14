
import AreYouBreeder from '@/components/myaccountscomponents/AreYouBreeder'
import Myinfo from '@/components/myaccountscomponents/Myinfo'
import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import PolicyFeedbackEditProfile from '@/components/mypetcomponents/PolicyFeedbackEditProfile'
import GroomerBoxes from '@/components/groomercomponents/GroomerBoxes'
import React from 'react'

function page() {
    return (
        <div>
            <SecondNavbar />
            <Myinfo />
            <AreYouBreeder />
            <GroomerBoxes />
            <PolicyFeedbackEditProfile />

        </div>
    )
}

export default page
