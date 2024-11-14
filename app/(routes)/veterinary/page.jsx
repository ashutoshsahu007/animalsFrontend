
import AreYouBreeder from '@/components/myaccountscomponents/AreYouBreeder'
import Myinfo from '@/components/myaccountscomponents/Myinfo'
import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import PolicyFeedbackEditProfile from '@/components/mypetcomponents/PolicyFeedbackEditProfile'
import VaterinaryBoxes from '@/components/Veterinarycomponents/VaterinaryBoxes'
import React from 'react'

function page() {
    return (
        <div>
            <SecondNavbar />
            <Myinfo />
            <AreYouBreeder />
            <VaterinaryBoxes />
            <PolicyFeedbackEditProfile />

        </div>
    )
}

export default page
