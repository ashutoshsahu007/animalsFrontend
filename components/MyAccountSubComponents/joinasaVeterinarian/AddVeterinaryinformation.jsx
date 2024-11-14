import React from 'react'

function AddVeterinaryinformation() {
    return (
        <div>
            <h1 className="capitalize text-2xl font-bold text-[#0C7203]" >add Veterinary information</h1>
            <p className='capitalize text-[#000000cf] ' >please fill this information . it will us to know about you.</p>

            <div className='mt-5'>

                {/* form box */}

                <div className='flex flex-col md:flex-row justify-between'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="DrName">Dr. Name</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="DrName" id="DrName" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Education">Education</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Education" id="Education" />
                    </div>



                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="DoYouhaveclinic"> Do You have clinic</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="DoYouhaveclinic" id="DoYouhaveclinic" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Experience">Experience</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Experience" id="Experience" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Specialization">Specialization</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Specialization" id="Specialization" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="AmbulanceFacilityavilable">Ambulance Facility avilable</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="AmbulanceFacilityavilable" id="AmbulanceFacilityavilable" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Availableon">Available on</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Availableon" id="Availableon" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Timings">Timings</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Timings" id="Timings" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="HomeVisitingAvailable">Home Visiting Available</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="HomeVisitingAvailable" id="HomeVisitingAvailable" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="FreeCheckupforStreetAnimalsavailable">Free Checkup for Street Animals available  </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="FreeCheckupforStreetAnimalsavailable" id="FreeCheckupforStreetAnimalsavailable" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="ContactNo">Contact No</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="ContactNo" id="ContactNo" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Youaddress">You  address</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Youaddress" id="Youaddress" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="ConsultancyChargesonclinichouse">Consultancy Charges on clinic/ house</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="ConsultancyChargesonclinichouse" id="ConsultancyChargesonclinichouse" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="consultancychargesHomevisit">consultancy charges Home visit</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="consultancychargesHomevisit" id="consultancychargesHomevisit" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='w-[100%] '>
                        <label className='text-black font-bold capitalize ' htmlFor="Description">Description</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Description" id="Description" />
                    </div>


                </div>



                <div className='flex gap-5 mt-10'>
                    <button className='bg-[#0C7203] font-bold text-white px-7 py-3 rounded-sm cursor-pointer '>save & Next</button>

                </div>


            </div>


        </div>
    )
}

export default AddVeterinaryinformation
