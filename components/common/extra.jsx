import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const extra = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="object-contain"
      />
      <Button className="border-green-500 border-4 rounded-full text-white mr-4">
        Request More Pet
      </Button>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      <div className="flex justify-start w-full md:w-1/2">
        <Image
          src="/dog.png"
          alt="dog"
          width={560}
          height={560}
          className="max-w-full h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 mr-8 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col w-full">
            <Label
              htmlFor="Name"
              className="font-bold text-white text-3xl mb-2"
            >
              Name
            </Label>
            <Input
              type="text"
              id="Name"
              placeholder="Name"
              className="border-green-500 border-4 rounded-2xl p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <Label
              htmlFor="PhoneNumber"
              className="font-bold text-white text-3xl mb-2"
            >
              Phone Number
            </Label>
            <Input
              type="text"
              id="PhoneNumber"
              placeholder="Phone Number"
              className="border-green-500 border-4 rounded-2xl p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col w-full">
            <Label
              htmlFor="Address"
              className="font-bold text-white text-3xl mb-2"
            >
              Address
            </Label>
            <Input
              type="text"
              id="Address"
              placeholder="Address"
              className="border-green-500 border-4 rounded-2xl p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <Label
              htmlFor="Breed"
              className="font-bold text-white text-3xl mb-2"
            >
              Breed
            </Label>
            <Input
              type="text"
              id="Breed"
              placeholder="Breed"
              className="border-green-500 border-4 rounded-2xl p-2"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default extra
