import React from 'react'

function policyFeedbackEditProfile() {
    return (
        <div className='w-full mb-7 mt-7'>

            {/* boxes */}
            <div className='w-[90%] m-auto sm:flex sm:justify-around items-center text-center sm:text-left'>

                {/* our policy */}
                <div>
                    <p className='uppercase text-2xl font-bold'>our policy</p>
                    <ul className='mt-3'>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">Policy for your listed pet</a></li>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">Breeder Terms</a></li>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">Breeder Return Policy</a></li>
                    </ul>
                </div>

                <div>
                    <p className='uppercase text-2xl font-bold'>your Feedback</p>
                    <ul className='mt-3'>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">Leave feedback</a></li>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">view your Reviews</a></li>

                    </ul>
                </div>

                <div>
                    <p className='uppercase text-2xl font-bold'>Edit Profile</p>
                    <ul className='mt-3'>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">Technical Support</a></li>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">Sell Support</a></li>
                        <li className='mb-1 uppercase'><a className='text-[#0C7203]' href="#">Customer Support</a></li>

                    </ul>
                </div>


            </div>

        </div>
    )
}

export default policyFeedbackEditProfile
