import React from 'react'

function Pettrainerinfromation() {
    return (
        <div>
            <h1 className="capitalize text-2xl font-bold text-[#0C7203]" >pet trainer infromation</h1>
            <p className='capitalize text-[#000000cf] ' >please fill this information . it will us to know about you.</p>

            <div className='mt-5'>

                {/* form box */}

                <div className='flex flex-col md:flex-row justify-between'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="TrainerName">Trainer Name</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="TrainerName" id="TrainerName" />
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
                        <label className='text-black font-bold capitalize ' htmlFor="MartialStatus">Martial Status</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="MartialStatus" id="MartialStatus" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="HaveOwnVehicle">Have Own Vehicle </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="HaveOwnVehicle" id="HaveOwnVehicle" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Havecamera">Have camera</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Havecamera" id="Havecamera" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Issmoker">Is smoker</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Issmoker" id="Issmoker" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="LanguageSpoken">Language Spoken</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="LanguageSpoken" id="LanguageSpoken" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Experience">Experience </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Experience" id="Experience" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Iamverygoodin">I am very good in </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Iamverygoodin" id="Iamverygoodin" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Trainingican">Training ican </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Trainingican" id="Trainingican" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="IAcceptdogsize">I Accept dog size </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="IAcceptdogsize" id="IAcceptdogsize" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="prefferedagefrom">preffered age from </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="prefferedagefrom" id="prefferedagefrom" />
                    </div>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="Prefferedageto">Preffered age to  </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="Prefferedageto" id="Prefferedageto" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[45%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="trainingworkinghours">training working hours </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="trainingworkinghours" id="trainingworkinghours" />
                    </div>



                </div>



                <div className='flex gap-5 mt-10'>
                    <button className='bg-[#0C7203] font-bold text-white px-7 py-3 rounded-sm cursor-pointer '>save & Next</button>

                </div>


            </div>


        </div>
    )
}

export default Pettrainerinfromation
