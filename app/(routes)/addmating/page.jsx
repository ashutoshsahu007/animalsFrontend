import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SecondNavbar from "@/components/myaccountscomponents/SecondNavbar";

const Mating = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <SecondNavbar />

      {/* Main Content */}
      <main className="flex justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            Local, Trusted Dog Mating Near You
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2 font-bold">
                  Find A Caregiver For
                </label>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    className="flex items-center justify-center gap-3 bg-white border-2 border-green-500 w-full rounded-[5px] hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <Image
                      src="/Group (1).png"
                      alt="Dog"
                      width={20}
                      height={20}
                    />
                    <p className="font-bold text-black">Dog</p>
                  </Button>

                  <Button
                    type="button"
                    className="flex items-center justify-center gap-3 bg-white border-2 border-green-500 w-full rounded-[5px] hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <Image
                      src="/Group 54.png"
                      alt="Cat"
                      width={20}
                      height={20}
                    />
                    <p className="font-bold text-black">Cat</p>
                  </Button>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-bold">
                  What Is Your Location
                </label>
                <input
                  type="text"
                  placeholder="Start Typing Your Address Or Zip Code"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-2 font-bold">Dates</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-bold">
                  How Big Is Your Pet?
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  <button
                    type="button"
                    className="p-4 border rounded-lg bg-white shadow-md w-full"
                  >
                    Small
                    <br />
                    5-20lbs
                  </button>
                  <button
                    type="button"
                    className="p-4 border rounded-lg bg-white shadow-md w-full"
                  >
                    Medium
                    <br />
                    21-50lbs
                  </button>
                  <button
                    type="button"
                    className="p-4 border rounded-lg bg-white shadow-md w-full"
                  >
                    Large
                    <br />
                    51-90lbs
                  </button>
                  <button
                    type="button"
                    className="p-4 border rounded-lg bg-white shadow-md w-full"
                  >
                    XL
                    <br />
                    100lbs+
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-bold">Select Your Breed</label>
                <select className="w-full p-7 border border-gray-300 rounded-lg">
                  <option>Select Breed</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full p-4 bg-green-600 text-white rounded-lg shadow-md"
              >
                Find A Local Pet Caregiver
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Mating;
