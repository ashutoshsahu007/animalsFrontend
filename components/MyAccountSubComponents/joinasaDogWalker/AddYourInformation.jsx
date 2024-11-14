import React from 'react'

function AddYourInformation() {
    return (
        <div>
            <h1 className="capitalize text-2xl font-bold text-[#0C7203]" >add yor information</h1>
            <p className='capitalize text-[#000000cf] ' >please fill this information . it will us to know about you.</p>

            <div className='mt-5'>

                {/* form box */}

                <div className='flex flex-col md:flex-row justify-between'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="walkerName">walker Name</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="walkerName" id="walkerName" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Dateofbirth">Date of birth</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Dateofbirth" id="Dateofbirth" />
                    </div>



                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Employmentstatus">Employment status</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Employmentstatus" id="Employmentstatus" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="MaritalStatus">Marital Status</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="MaritalStatus" id="MaritalStatus" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="haveownvehicle">have own vehicle</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="haveownvehicle" id="haveownvehicle" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="havecemra">have Camera</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="havecemra" id="havecemra" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="isSomker">is Somker</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="isSomker" id="isSomker" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Languagespoken">Language spoken</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Languagespoken" id="Languagespoken" />
                    </div>

                </div>


                <div className='flex gap-5 mt-10'>
                    <button className='bg-[#0C7203] font-bold text-white px-7 py-3 rounded-sm cursor-pointer '>save & Next</button>

                </div>


            </div>


        </div>
    )
}

export default AddYourInformation
