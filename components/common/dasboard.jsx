"use client";
import React from "react";
import { BookPet } from "../pet/bookpet";
import { PetDietcian } from "../pet/petdignestion";
import { PetFood } from "../pet/petfood";
import { MatingService } from "../pet/matingservices";
import { ListPet } from "../pet/listpet";
import UserCard from "../pet/usercard";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <div
        className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 w-11/12 sm:mx-20 mx-auto sm:gap-8 gap-3"
        style={{ margin: "auto" }}
      >
        <BookPet />
        <PetDietcian />
        <PetFood />
        <MatingService />
        <div className="lg:col-span-1 md:col-span-2 col-span-2 flex items-center justify-center">
          <ListPet />
        </div>
      </div>

      <UserCard />


      <div className="text-center font-bold text-2xl">Why Animalslover?</div>
      <div className="text-center my-5 font-semibold px-2 ">
        Looking for a furry companion? Know why Animalslover is the perfect
        option for you.
      </div>

      <div className="grid md:grid-cols-2  w-full  mx-auto lg:max-w-[900px] md:max-w-[400px] lg:mx-auto md:space-y-4 lg:space-y-2 py-4 px-3
       ">
        <div className=" relative aspect-auto ThisIsForSmallDeviceImage hidden md:block  ">
          <Image className="w-[78%] h-[93%]"
            src="/Group 427319636.png"
            alt="dog"
            fill
          />
        </div>

        <div className="w-full  lg:mx-auto text-center mt-0 ">

          <div className="mb-4 w-full ">

            {/* Mobile view image */}
            <Image className="md:hidden block m-auto mb-3 "
              src="/whyAnimalslover/01.svg"
              alt="dog"
              width={100}
              height={100}
            />

            <h5 className=" text-2xl md:text-xl font-bold mb-1">Vaccinated Pet</h5>
            <p className="text-gray-600 p-2  ">
              Whether you are looking for daily walks planning a trip stuck at
              work or just want your best friend to have some company — we
              offer any day anytime care.
            </p>
          </div>


          <div className="mb-4">

            {/* Mobile view image */}
            <Image className="md:hidden block m-auto mb-3"
              src="/whyAnimalslover/02.svg"
              alt="dog"
              width={100}
              height={100}
            />

            <h5 className=" text-2xl md:text-xl font-bold mb-1">Healthy Pet Food</h5>
            <p className="text-gray-600 p-2 ">
              Whether you are looking for daily walks planning a trip stuck at
              work or just want your best friend to have some company — we
              offer any day anytime care.
            </p>
          </div>

          <div className="mb-4">

            {/* Mobile view image */}
            <Image className="md:hidden block m-auto mb-3"
              src="/whyAnimalslover/03.svg"
              alt="dog"
              width={100}
              height={100}
            />

            <h5 className=" text-2xl md:text-xl font-bold mb-1">Free Pet Dietitian</h5>
            <p className="text-gray-600 p-2 ">
              Whether you are looking for daily walks planning a trip stuck at
              work or just want your best friend to have some company — we
              offer any day anytime care.
            </p>
          </div>

          <div className="mb-4">

            {/* Mobile view image */}
            <Image className="md:hidden block m-auto mb-3"
              src="/whyAnimalslover/04.svg"
              alt="dog"
              width={100}
              height={100}
            />

            <h5 className=" text-2xl md:text-xl font-bold mb-1">Pure Breed</h5>
            <p className="text-gray-600 p-2 ">
              Whether you are looking for daily walks planning a trip stuck at
              work or just want your best friend to have some company — we
              offer any day anytime care.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
