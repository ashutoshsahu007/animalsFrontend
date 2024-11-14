import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const Services = () => {
  return (
    <div className="py-5">
      <h5 className="text-2xl font-bold mb-6 text-center">Dedicated 24x7 Support</h5>

      <div className="bg-black w-full flex md:flex-row justify-between mt-8">
        {/* Image Section */}
        <div className="flex relative  md:justify-start w-full md:w-1/2 mt-5">
          <img
            src="/Rectangle.png"
            className="lg:w-[300px] h-auto w-full"
            alt="Icon of the Admin"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-4 py-6 md:py-0">
          <h5 className="text-center font-bold text-1xl lg:text-3xl text-white ">
            Connect your customer
          </h5>
          <h5 className="text-center font-bold text-1xl lg:text-3xl text-white mb-4">
            with our services
          </h5>
          <div className="text-center">
            <Button className="px-4 py-2 border-2 tetx-bold bg-white text-black hover:text-white hover:bg-[#15ff00] rounded-lg">
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

