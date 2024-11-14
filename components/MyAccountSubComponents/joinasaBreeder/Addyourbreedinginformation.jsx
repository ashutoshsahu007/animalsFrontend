import React from 'react'

function Addyourbreedinginformation() {
    return (
        <div>
            <h1 className="capitalize text-2xl font-bold text-[#0C7203]" >add your breeding information</h1>
            <p className='capitalize text-[#000000cf] ' >please fill this information . it will us to know about you</p>

            <div className='mt-5'>

                {/* form box */}

                <div className='flex flex-col md:flex-row justify-between'>

                    <div className='md:w-[30%] mt-5'>
                        <label className='text-black font-bold capitalize ' htmlFor="AreYouaProfessionalBreeder">Are You a Professional Breeder</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="AreYouaProfessionalBreeder" id="AreYouaProfessionalBreeder" />
                    </div>

                    <div className='md:w-[30%] mt-5 '>
                        <label className='text-black font-bold capitalize ' htmlFor="DoyyouTakeyourdogtodogShow">Doy you Take your dog to dog Show</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="DoyyouTakeyourdogtodogShow" id="DoyyouTakeyourdogtodogShow" />
                    </div>

                    <div className='md:w-[30%] mt-5'>
                        <label className='text-black font-bold capitalize ' htmlFor="whatdidyoustartbreeding">what did you start breeding</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="DoyyouTakeyourdogtodogShow" id="whatdidyoustartbreeding" />
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between md:mt-10'>

                    <div className='md:w-[30%] mt-5'>
                        <label className='text-black font-bold capitalize ' htmlFor="youhavevetfor">You have vet for </label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="youhavevetfor" id="youhavevetfor" />
                    </div>

                    <div className='md:w-[30%] mt-5'>
                        <label className='text-black font-bold capitalize ' htmlFor="cancellationpolicy"> cancellation policy</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="cancellationpolicy" id="cancellationpolicy" />
                    </div>

                    <div className='md:w-[30%] mt-5'>
                        <label className='text-black font-bold capitalize ' htmlFor="ibreedinbreeds">i breed in (breeds)</label>
                        <br />
                        <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="ibreedinbreeds" id="ibreedinbreeds" />
                    </div>

                </div>

                <div className='w-[100%]  mt-5'>
                    <label className='text-black font-bold capitalize ' htmlFor="DescribeyourBreedingPractices">Describe your Breeding Practices( why You Love Breeding? why you a Good Breeder?)
                    </label>
                    <br />
                    <input className='bg-[#D9D9D9] px-2 py-2 mt-2 rounded-sm w-full' type="text" name="DescribeyourBreedingPractices" id="DescribeyourBreedingPractices" />
                </div>

                <div className='mt-5'>
                    <input className='cursor-pointer ' type="checkbox" name="iagreed" id="iagreed" />
                    <label className='font-bold ml-3' htmlFor="iagreed">I agreed with the terms & conditions of animals lover.
                    </label>
                </div>

                <div className='flex gap-5 justify-center md:justify-start md:mt-10 mt-5'>
                    <button className='bg-[#0C7203] font-bold text-white px-7 py-3 rounded-sm cursor-pointer '>Submit</button>
                    <button className='bg-[#0C7203] font-bold text-white px-7 py-3 rounded-sm cursor-pointer '>Cancel</button>
                </div>


            </div>


        </div>
    )
}

export default Addyourbreedinginformation
