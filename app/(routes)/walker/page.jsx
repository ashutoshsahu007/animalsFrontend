
import AreYouBreeder from '@/components/myaccountscomponents/AreYouBreeder'
import Myinfo from '@/components/myaccountscomponents/Myinfo'
import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import PolicyFeedbackEditProfile from '@/components/mypetcomponents/PolicyFeedbackEditProfile'
import Walkerboxs from '@/components/walkercomponents/Walkerboxs'
import React from 'react'

function page() {
    return (
        <div>
            <SecondNavbar />
            <Myinfo />
            <AreYouBreeder />
            <Walkerboxs />
            <PolicyFeedbackEditProfile />

        </div>
    )
}

export default page
