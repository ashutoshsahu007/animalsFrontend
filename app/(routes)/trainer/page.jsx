
import AreYouBreeder from '@/components/myaccountscomponents/AreYouBreeder'
import Myinfo from '@/components/myaccountscomponents/Myinfo'
import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import PolicyFeedbackEditProfile from '@/components/mypetcomponents/PolicyFeedbackEditProfile'
import TrainerBoxes from '@/components/TrainerComponents/TrainerBoxes'
import React from 'react'

function page() {
    return (
        <div>
            <SecondNavbar />
            <Myinfo />
            <AreYouBreeder />
            <TrainerBoxes />
            <PolicyFeedbackEditProfile />

        </div>
    )
}

export default page
