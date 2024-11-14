import React from 'react'

function Addyourgroominginformation() {
    return (
        <div>
            <h1 className="capitalize text-2xl font-bold text-[#0C7203]" >add yor grooming information</h1>
            <p className='capitalize text-[#000000cf] ' >please fill this information . it will us to know about you.</p>

            <div className='mt-5'>

                {/* form box */}

                <div className='flex flex-col md:flex-row justify-between'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="GroomerName">Groomer Name</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="GroomerName" id="GroomerName" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="EmploymentStatus">Employment Status</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="EmploymentStatus" id="EmploymentStatus" />
                    </div>



                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Languagespoken">Language spoken </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Languagespoken" id="Languagespoken" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="ServiceiProvide">Service i Provide</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="ServiceiProvide" id="ServiceiProvide" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="PetsIAccept">Pets I Accept</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="PetsIAccept" id="PetsIAccept" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="AcceptpetSize">Accept pet Size</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="AcceptpetSize" id="AcceptpetSize" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Experience">Experience</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Experience" id="Experience" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="IsSmoker">Is Smoker</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="IsSmoker" id="IsSmoker" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="HaveOwnVehicle">Have Own Vehicle </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="HaveOwnVehicle" id="HaveOwnVehicle" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="PickDrop">Pick & Drop</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="PickDrop" id="PickDrop" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="GroomingPlace">Grooming Place </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="GroomingPlace" id="GroomingPlace" />
                    </div>



                </div>



                <div className='flex gap-5 mt-10'>
                    <button className='bg-[#0C7203] font-bold text-white px-7 py-3 rounded-sm cursor-pointer '>save & Next</button>

                </div>


            </div>


        </div>
    )
}

export default Addyourgroominginformation
