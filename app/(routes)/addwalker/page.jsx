import React from 'react';
import SecondNavbar from '@/components/myaccountscomponents/SecondNavbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Walker = () => {
  return (
    <div>
      {/* Header */}
      <SecondNavbar />

      {/* Main Content */}
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">Local, Trusted Dog Walkers Near You</h1>
        <p className="text-xl mb-6">⭐️⭐️⭐️⭐️⭐️ Book A 5-Star Pet Caregiver Near You</p>

        {/* Search Section */}
        <div className="bg-gray-100 p-8 rounded-3xl shadow-lg mb-10">
          <form className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Caregiver Selection */}
            <div className="col-span-1">
              <label className="block mb-2 font-bold">Find A Caregiver For</label>
              <div className="flex space-x-2">
                <Button type="button" className="flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-4 hover:bg-[#15ff00] hover:text-white transition-all duration-300">
                  <Image src="/Group (1).png" alt="Dog" width={20} height={20} />
                  <p className="font-bold text-black">Dog</p>
                </Button>
                <Button type="button" className="flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-4 hover:bg-[#15ff00] hover:text-white transition-all duration-300">
                  <Image src="/Group 54.png" alt="Cat" width={20} height={20} />
                  <p className="font-bold text-black">Cat</p>
                </Button>
              </div>
            </div>

            {/* Location Input */}
            <div className="col-span-1">
              <label className="block mb-2 font-bold">What Is Your Location</label>
              <input
                type="text"
                placeholder="Start Typing Your Address Or Zip Code"
                className="w-full p-4 border rounded-lg shadow-md"
              />
            </div>

            {/* Date Input */}
            <div className="col-span-1">
              <label className="block mb-2 font-bold">Dates</label>
              <input
                type="date"
                className="w-full p-4 border rounded-lg shadow-md"
              />
            </div>

            {/* Pet Size and Age */}
            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 gap-6 mt-6">
              <div>
                <label className="block mb-2 font-bold">How Big Is Your Pet?</label>
                <div className="grid  grid-cols-1 lg:grid-cols-4 gap-2">
                  <button type="button" className="p-4 border rounded-lg bg-white shadow-md">Small<br />5-20lbs</button>
                  <button type="button" className="p-4 border rounded-lg bg-white shadow-md">Medium<br />21-50lbs</button>
                  <button type="button" className="p-4 border rounded-lg bg-white shadow-md">Large<br />51-90lbs</button>
                  <button type="button" className="p-4 border rounded-lg bg-white shadow-md">XL<br />100lbs+</button>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-bold">How Old Is Your Pet?</label>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <button type="button" className="p-4 border rounded-lg bg-white shadow-md">Puppy<br />0-1 Years</button>
                  <button type="button" className="p-4 border rounded-lg bg-white shadow-md">Adult<br />2-6 Years</button>
                  <button type="button" className="p-4 border rounded-lg bg-white shadow-md">Senior<br />7 Years+</button>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className=" mt-8">
              <button type="submit" className="w-full p-4 bg-green-600 text-white rounded-lg shadow-md">
                Find A Local Pet Caregiver
              </button>
            </div>
          </form>
        </div>

        <h2 className="text-2xl font-bold mb-4 ">Dog Walks With Local Experts You Can Trust</h2>
        <p className='text-lg text-center text-justify'>All Wag! Pet Caregivers have had extensive background checks, so you don’t have to worry about a thing
        Search from hundreds of Pet Boarders local to yo</p>

        <h2 className="text-3xl font-bold my-4 text-center">Trusted local dog walkers</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-justify">
            Stuck At Work? Dog Walkers On Wag! Are Available To Stop By As Many Times As You Need
            To Give Your Pup A Potty Break And Exercise. Every Walker Has Passed An Enhanced Background Check,
            All Services Are Insured, And Support Is Available 7 Days A Week.
          </p>
        </div>

        {/* Walker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img src="/aa.png" alt="Dog Walker" className="w-full h-96 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">Dog Walker Name</h3>
                <p className="text-sm">Description or location</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Walker;
