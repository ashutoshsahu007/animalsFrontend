import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <p className="text-3xl font-bold mb-6 text-center">OUR SERVICES</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ">

        <div className="relative">
          <img
            src="/doggromming.jpeg"
            alt="Dog Grooming"
            className="w-full h-auto"
          />
          <h5 className="bg-green-500 text-white text-center p-2 absolute bottom-0 w-full">
            Dog Grooming
          </h5>
        </div>

        <div className="relative ">
          <img
            src="/R2.png"
            alt="Dog Hostel"
            className="w-full h-auto"
          />
          <h5 className="bg-green-500 text-white text-center p-2 absolute bottom-0 w-[98%] left-1">
            Dog Hostel
          </h5>
        </div>



        <div className="relative">
          <img src="/image 6.png"
            alt="Dog Grooming"
            className="w-full h-auto" />
          <h5 className="bg-green-500 text-white text-center p-2 absolute bottom-0 w-full">
            Dog Training
          </h5>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img src="/R3.png"
            alt="Dog Grooming"
            className="w-full h-auto" />
          <h5 className="bg-green-500 text-white text-center p-2 absolute bottom-0 w-full">
            Pet Adopation
          </h5>
        </div>
        <div className="relative">
          <img src="/R4.png"
            alt="Dog Grooming"
            className="w-full h-auto" />
          <h5 className="bg-green-500 text-white text-center p-2 absolute bottom-0 w-full">
            Mating Services
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
