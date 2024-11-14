"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Select from 'react-select';
import { useForm } from "react-hook-form";
import { apiConnector } from '@/lib/apiConnector';
import { useRouter } from "next/navigation";
import { BackgroundGradient } from "../custom/background-gradient";
import { BackgroundBeamsWithCollision } from "../custom/background-beams-with-collision";

const HeroSection = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [selectedCaregiver, setSelectedCaregiver] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [species, setSpecies] = useState(null);
  const [minAge, setMinAge] = useState(null);
  const [maxAge, setMaxAge] = useState(null);
  const router = useRouter();

  const handleCaregiverClick = (caregiver) => {
    setSelectedCaregiver(caregiver);
    setSpecies(caregiver);
  };

  const handleAgeClick = (age) => {
    setSelectedAge(age);
    const ageRange = age.split("-");
    setMinAge(ageRange[0]);
    setMaxAge(ageRange[1]);
  };

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    console.log("Species:", species);
    console.log("Min Age:", minAge);
    console.log("Max Age:", maxAge);

    const pinCodesArray = data.pinCodes
      ? data.pinCodes.split(',').map(pin => parseInt(pin.trim(), 10)).filter(pin => !isNaN(pin))
      : [];

    try {
      const response = await apiConnector('POST', '/petsInfo/getpets', {
        species,
        breed: data.breed,
        min_age: minAge,
        max_age: maxAge,
        p_pins: pinCodesArray,
      });
      console.log("Form submitted successfully:", response.data);
      router.replace("/buy-page");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const breedOptions = [
    { value: 'breed1', label: 'Breed 1' },
    { value: 'breed2', label: 'Breed 2' },
    { value: 'breed3', label: 'Breed 3' },
  ];

  return (
    <BackgroundBeamsWithCollision className="">
      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center w-full bg-black rounded-[5px] shadow-lg">
        <div className="flex flex-col w-full font-poppins bg-black md:p-8 p-3 rounded-[5px] shadow-lg">
          <h5 className="text-6xl font-bold bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r  from-green-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">Pets Bring Families</h5>
          <h5 className="text-6xl font-bold  bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r  from-green-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] mb-3 ">Closer.</h5>

          {/* Form Section */}
          <BackgroundGradient className="w-full md:w-10/12 lg:w-full bg-white p-6 md:p-4 rounded-[22px] shadow-lg mt-4">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* First Row Components */}
                  <div className="space-y-2">
                    <label className="font-bold text-xl font-poppins">Find a Caregiver</label>
                    <div className="flex gap-2">
                      <Button
                        className={`flex items-center justify-center gap-3 bg-white border-2 ${selectedCaregiver === "dog"
                          ? "border-t-8 border-[#0C7203] bg-white text-black"
                          : "border-[#0C7203] border-[1px] text-black"
                          } w-full rounded-[5px] hover:border-t-8 hover:border-[#0C7203] hover:text-black hover:bg-white transition-all duration-300`}
                        onClick={() => handleCaregiverClick("dog")}
                      >
                        <Image src="/Group (1).png" alt="Dog" width={20} height={20} />
                        <p className="font-bold"> Dog</p>
                      </Button>

                      <Button
                        type="button"
                        className={`flex items-center justify-center gap-3 bg-white border-2 ${selectedCaregiver === "cat"
                          ? "border-t-8 border-[#0C7203] bg-white text-black"
                          : "border-[#0C7203] border-[1px] text-black"
                          } w-full rounded-[5px] hover:border-t-8 hover:border-[#0C7203] hover:text-black hover:bg-white transition-all duration-300`}
                        onClick={() => handleCaregiverClick("cat")}
                      >
                        <Image src="/Group 54.png" alt="Cat" width={20} height={20} />
                        <p className="font-bold"> Cat</p>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-xl font-poppins">Select Breed</label>
                    <Select
                      options={breedOptions}
                      onChange={option => setValue('breed', option.value)}
                      className={`w-full lg:w-auto border-[1px] border-[#0C7203] text-black bg-white rounded-[5px] transition-all duration-300`}
                      placeholder="Select Breed"
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          backgroundColor: 'white',
                          borderColor: 'green',
                          color: 'black',
                          '&:hover': {
                            backgroundColor: 'white',
                            color: 'black',
                          },
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor: state.isFocused ? 'green' : 'white',
                          color: state.isFocused ? 'black' : 'black',
                          '&:active': {
                            backgroundColor: 'green',
                            color: 'white',
                          },
                        }),
                      }}
                    />
                    {errors.breed && <p className="text-red-500">{errors.breed.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-1xl font-poppins">What is your location</label>
                    <Input
                      placeholder="Enter your location"
                      {...register("location")}
                      className="w-full rounded-[5px] border-[#0C7203] "
                    />
                    {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                  </div>
                </div>

                {/* Second Row Components */}
                <div className="flex md:flex-row flex-col gap-2 items-center justify-center">

                  <div className="space-y-2 w-full">
                    <label className="font-bold text-xl font-poppins">Pet Age</label>
                    <div className="flex w-full">
                      <Button
                        type="button"
                        className={`flex-1 w-[50px] rounded-none bg-white border-2 ${selectedAge === "30-40"
                          ? "border-t-8 border-[#0C7203] bg-white text-black"
                          : "border-[#0C7203] border-[1px] text-black"
                          } rounded-l-lg hover:border-t-8 hover:border-[#0C7203] hover:text-black hover:bg-white transition-all duration-300`}
                        onClick={() => handleAgeClick("30-40")}
                      >
                        30-40 days
                      </Button>
                      <Button
                        type="button"
                        className={`flex-1 w-[50px] rounded-none bg-white border-2 ${selectedAge === "40-50"
                          ? "border-t-8 border-[#0C7203] bg-white text-black"
                          : "border-[#0C7203] border-[1px] text-black"
                          } hover:border-t-8 hover:border-[#0C7203] hover:text-black hover:bg-white transition-all duration-300`}
                        onClick={() => handleAgeClick("40-50")}
                      >
                        40-50 days
                      </Button>
                      <Button
                        type="button"
                        className={`flex-1 w-[50px] rounded-none bg-white border-2 ${selectedAge === "50-60"
                          ? "border-t-8 border-[#0C7203] bg-white text-black"
                          : "border-[#0C7203] border-[1px] text-black"
                          } rounded-r-lg hover:border-t-8 hover:border-[#0C7203] hover:text-black hover:bg-white transition-all duration-300`}
                        onClick={() => handleAgeClick("50-60")}
                      >
                        50-60 days
                      </Button>
                    </div>



                  </div>

                  <div className="flex justify-center w-full col-span-full mt-[43px] ">
                    <Button
                      type="submit"
                      className="w-full font-bold md:px-[100px] lg:w-auto bg-black text-white rounded-lg hover:bg-[#0C7203] transition-all duration-300"
                    >
                      Find Your Favourite Pet
                    </Button>
                  </div>



                </div>
              </form>
            </div>
          </BackgroundGradient>
        </div>
        <div className="hidden lg:flex lg:relative justify-center md:justify-end w-full md:w-1/2 mt-9">
          <Image src="/dog2.png" alt="dog" width={560} height={560} />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
