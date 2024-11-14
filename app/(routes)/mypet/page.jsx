import AreYouBreeder from '@/components/myaccountscomponents/AreYouBreeder'

import Myinfo from '@/components/myaccountscomponents/Myinfo'
import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar'
import Mypetboxes from '@/components/mypetcomponents/Mypetboxes'
import PolicyFeedbackEditProfile from '@/components/mypetcomponents/PolicyFeedbackEditProfile'
import React from 'react'

function page() {
    return (
        <div>

            <SecondNavbar />
            <Myinfo />
            <AreYouBreeder />
            <Mypetboxes />
            <PolicyFeedbackEditProfile />
            

        </div>
    )
}

export default page
