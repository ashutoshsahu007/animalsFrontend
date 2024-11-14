"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";

const Product = () => {
  const [mainImage, setMainImage] = useState("/image 16.png");

  const thumbnails = [
    "/R4.png",
    "/image 6.png",
    "/image 5.png",
    "/image 16.png",
  ];

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  const items = [
    {
      icon: "/OutlineP3.png",
      text: "NO PUPPY MILLS",
      description: "ONLY VETTED BREEDS",
    },
    {
      icon: "/GroupP4.png",
      text: "HEALTHY PUPS",
      description: "10+ YEAR HEALTH COMMITMENT",
    },
    {
      icon: "/GroupP5.png",
      text: "EASY DELIVERY",
      description: "OUR PRIVATE TRAVEL NETWORK",
    },
    {
      icon: "/Vector.png",
      text: "TRUSTED",
      description: "22,000+ HAPPY PUPPIES PLACED",
    },
  ];

  const [values, setValues] = useState({
    coatLength: 50,
    coatDensity: 75,
    activityLevel: 80,
    maintenance: 65,
  });

  const handleSliderChange = (e, key) => {
    setValues({ ...values, [key]: e.target.value });
  };

  const sliders = [
    {
      label: "Coat Color Possibilities",
      key: "coatLength",
      value: values.coatLength,
      images: ["/coatcolor.svg", "/coatcolor.svg", "/coatcolor.svg"],
      labels: ["Short", "Medium", "Long"],
    },
    {
      label: "Coat Length",
      key: "coatDensity",
      value: values.coatDensity,
      images: ["/GroupL1.png", "/GroupD.png", "/GroupL2.png"],
      labels: ["Sparse", "Normal", "Dense"],
    },
    {
      label: "Coat Density",
      key: "coatDensity",
      value: values.coatDensity,
      images: ["/GroupL1.png", "/GroupD.png", "/GroupL2.png"],
      labels: ["Sparse", "Normal", "Dense"],
    },
    {
      label: "Activity Level",
      key: "activityLevel",
      value: values.activityLevel,
      images: ["/GroupP4.png", "/GroupP6.png", "/GroupP7.png"],
      labels: ["Low", "Medium", "High"],
    },
    // {
    //   label: "Maintenance",
    //   key: "maintenance",
    //   value: values.maintenance,
    //   images: ["/maintenence.svg"],
    //   labels: "",
    // },
  ];

  return (
    <div className="bg-black text-white">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
        {/* Left Column - Image Section */}
        <div className="flex-1 relative">
          {/* Main Image with KCI Badge */}
          <div className="relative">
            <img
              src={mainImage}
              alt="Husky Siberian"
              className="w-full rounded-lg"
            />
            {/* KCI Certified Badge */}
            <div className="absolute top-0 left-0 bg-[#55b227] text-white px-2 py-1 rounded-br-lg">
              KCI Certified
            </div>
            {/* Heart Button */}
            <button
              type="button"
              className="md:hidden absolute bottom-2 right-2 text-[#55b227] border border-[#55b227] hover:bg-[#55b227] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-[#55b227] dark:text-[#55b227] dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-[#55b227]"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="sr-only">Heart Icon</span>
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2 mt-2 justify-center md:justify-start">
            {thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 rounded cursor-pointer hover:opacity-75 transition-opacity"
                onClick={() => handleThumbnailClick(src)}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Details Section */}
        <div className="flex-1 space-y-4">
          {/* Title and Action Buttons */}
          <div className="flex gap-4 items-center ">
            <h1 className="md:text-3xl text-2xl font-bold">HUSKY SIBERIAN</h1>
            <div className="flex space-x-4">
              <button className="text-[#55b227] hover:text-[#55b227] rounded-xl py-2 px-5 border-green-300 border ">
                share
              </button>

              <button
                type="button"
                className="hidden md:block text-[#55b227] border border-[#55b227] hover:bg-[#55b227] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="sr-only">Heart Icon</span>
              </button>


              {/* Share Button */}
            </div>
          </div>

          {/* Puppy Details */}
          <p className="text-[#55b227] text-lg">
            11 people are interested in this puppy
          </p>
          <p className="text-xl">Male, 13 weeks</p>
          <p className="text-lg text-yellow-400">4.5 ★★★★☆</p>
          <p className="text-2xl font-bold">₹ 45000</p>
          <p className="text-lg">DATE OF BIRTH: January 20, 2024</p>

          {/* Vaccinated and KCI Certified Info */}
          <div className="flex text-center gap-2">
            <img
              src="/GroupP.png"
              alt="Vaccinated Pet"
              width={25}
              height={25}
            />
            <p className="text-sm mt-3">Vaccinated Pet</p>
          </div>

          <div className="flex text-center gap-2">
            <img
              src="/GroupP2.png"
              alt="KCI Certified"
              width={25}
              height={25}
            />
            <p className="text-sm mt-3">KCI Certified</p>
          </div>

          {/* Male and Female Information */}
          <div className="flex gap-4 mt-4">
            <div className="bg-white text-black p-4 rounded-lg flex flex-col md:flex-row items-center justify-evenly  w-full">

              <div className="flex flex-col items-center">
                <img src="/Group (3).png" alt="Male" width={60} height={60} />
                <p className="text-sm font-bold">Male</p>
              </div>

              <div className="text-left">
                <p className="text-sm font-bold">Height - 2.7 cm</p>
                <p className="text-sm font-bold">Weight - 23 Kg</p>
              </div>

            </div>

            <div className="bg-white text-black p-4 rounded-lg flex flex-col md:flex-row items-center justify-evenly w-full">
              <div className="flex flex-col items-center">
                <img
                  src="/femenine 2.png"
                  alt="Female"
                  width={40}
                  height={40}
                />
                <p className="text-sm font-bold">Female</p>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Height - 2.4 cm</p>
                <p className="text-sm font-bold">Weight - 23 Kg</p>
              </div>
            </div>
          </div>

          {/* Booking and Video Call Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-yellow-400 font-bold hover:bg-green-700 text-black px-4 py-2 rounded w-full">
              Book Now
            </button>
            <button className="bg-yellow-400 font-bold hover:bg-green-700 text-black px-4 py-2 rounded w-full">
              Request Video Call
            </button>
          </div>
        </div>
      </div>

      {/* all icons section */}
      <div className="bg-black text-white py-10 px-4">

        {/* call */}
        <div className="flex items-center mb-4">

          <Image className=" "
            src="/call.svg"
            alt="img"
            width={100}
            height={100}

          />

          <div className="">
            <p className=" md:text-3xl  font-bold">SPECIFIC QUESTION ABOUT HUSKY</p>
            <div className="flex ">
              {/* <FaPhone className="mr-2 my-2" /> */}

              <p className="text-xl font-bold text-yellow-400">
                918252167751
              </p>
            </div>
          </div>

        </div>


        {/* why Animal lover */}
        <h2 className="text-2xl md:text-3xl font-bold  mb-8 p-2">WHY ANIMALS LOVER</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center lg:ml-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mx-2"
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={80}
                height={80}
                className="mb-4 "
              />
              <p className="text-lg font-semibold">{item.text}</p>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 px-4">
        <h2 className="font-bold text-2xl md:text-3xl mx-3">Eye Color Possibilities</h2>

        <div className="flex items-center md:w-[70%] justify-between m-auto gap-8 mt-5">

          <div className="flex flex-col items-center">
            <Image
              src="/Groupeye.png"
              alt="Blue Eye"
              width={100}
              height={100}
            />
            <p className="font-semibold mt-2">Blue Eye</p>
            <input type="radio" name="eyeColor" value="blue" className="mt-2" />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/Groupeye.png"
              alt="Blue Eye"
              width={100}
              height={100}
            />
            <p className="font-semibold mt-2">Blue Eye</p>
            <input type="radio" name="eyeColor" value="blue" className="mt-2" />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/Groupeye.png"
              alt="Blue Eye"
              width={100}
              height={100}
            />
            <p className="font-semibold mt-2">Blue Eye</p>
            <input type="radio" name="eyeColor" value="blue" className="mt-2" />
          </div>

        </div>
      </div>

      <div className="py-4 px-4">
        <h2 className="font-bold text-2xl md:text-3xl mx-3">Nose Color Possibilities</h2>
        <div className="flex items-center md:w-[70%] justify-between m-auto gap-8 mt-5">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/GroupNose.png"
              alt="Blue Eye"
              width={100}
              height={100}
            />
            <p className="font-semibold text-sm mt-2">Blue Nose</p>
            <input type="radio" name="eyeColor" value="blue" className="mt-2" />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/GroupNose.png"
              alt="Blue Eye"
              width={100}
              height={100}
            />
            <p className="font-semibold text-sm mt-2">Blue Nose</p>
            <input type="radio" name="eyeColor" value="blue" className="mt-2" />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/GroupNose.png"
              alt="Blue Eye"
              width={100}
              height={100}
            />
            <p className="font-semibold text-sm mt-2">Blue Nose</p>
            <input type="radio" name="eyeColor" value="blue" className="mt-2" />
          </div>
        </div>
      </div>
      <div className=" py-10 px-4">
        <div className=" px-2 mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl mx-3">Coat Characteristics</h2>

          {sliders.map((slider, index) => (
            <div key={index} className="mb-8 px-2 w-[90%] m-auto">
              <label className="block mt-2 mb-2 md:text-xl font-bold">
                {slider.label}
              </label>
              <div className="flex justify-between items-end">
                {slider.images.map((imageSrc, i) => (
                  <div key={i} className="text-center">
                    <Image
                      src={imageSrc}
                      alt={slider.labels[i]}
                      width={100}
                      height={100}
                    />
                    <p className="">{slider.labels[i]}</p>
                  </div>
                ))}
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={slider.value}
                onChange={(e) => handleSliderChange(e, slider.key)}
                className="w-full mt-2"
              />
            </div>
          ))}

          {/* Maintenance */}
          <div className="mb-8 px-2 ">
            <label className="block mt-2 mb-2 md:text-3xl font-bold">
              Maintenance
            </label>
            <div className="flex justify-center items-center">
              <Image className="text-center w-[100%] md:w-[70%]"
                src="/maintenence.svg"
                alt="img"
                width={100}
                height={100}
              />
            </div>

            <input className="w-full text-center mt-2"
              type="range"
              min="0"
              max="100"
            // value={slider.value}

            />
          </div>



        </div>
      </div>
    </div>
  );
};

export default Product;




{/* <div className=" py-10 px-1">
<div className=" px-2 mx-auto">
  <h2 className="text-4xl font-bold mb-8">Coat Characteristics</h2>
  {sliders.map((slider, index) => (
    <div key={index} className="mb-8 px-2">
      <label className="block mt-2  text-3xl font-bold">
        {slider.label}
      </label>
      <div className="flex justify-between items-center">
        {slider.images.map((imageSrc, i) => (
          <div key={i} className="text-center">
            <Image
              src={imageSrc}
              alt={slider.labels[i]}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div className="w-4/6 text-center relative">
    <input
      type="range"
      min="0"
      max="100"
      value={slider.value}
      onChange={(e) => handleSliderChange(e, slider.key)}
      className="w-full h-2 bg-[#55b227] rounded-full appearance-none"
      style={{ backgroundImage: 'linear-gradient(to right, #00FF00, #00FF00)' }}
    />
    {/* Labels below the slider */}
//     <div className="flex justify-between mt-2 text-lg">
//       <span className="w-1/3 text-center">{slider.labels[0]}</span>
//       <span className="w-1/3 text-center">{slider.labels[1]}</span>
//       <span className="w-1/3 text-center">{slider.labels[2]}</span>
//     </div>
//   </div>
//     </div>
//   ))}
// </div>
// </div> */}