"use client";
import React, { useState } from "react";
import { apiConnector } from "@/lib/apiConnector";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    owner_name: "",
    city: "",
    phone_no: "",
    pet_name: "",
    species: "",
    otherSpecies: "",
    age: "",
    gender: "",
    date_of_birth: "",
    breed: "",
    primary_breed: "",
    weight: "",
    height: "",
    size: "",
    disease: "",
    vaccinated: "",
    date_of_visit: "",
    unique_symbol: "",
    p_pin: "",
    good_with_kids: "",
    parvo_infected: "",
    activity_level: "",
    potty_trained: "",
    kci_certified: "",
    micro_chip: "",
    health_checkup: "",
    health_certificate: "",
    pet_acquisition: "",
  });


  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
    }
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const onSubmit = async () => {
    try {
      const formDataToSend = new FormData();

      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      const response = await apiConnector(
        "POST",
        "/petsInfo/pets",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response);
      alert("Form Submitted");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      <div className="w-full max-w-lg">
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`h-5 w-5 rounded-full ${step >= s ? "bg-[#15FF00]" : "bg-gray-700"
                }`}
            />
          ))}
        </div>

        {/* Step 1 */}

        {step === 1 && (
          <div className="border-2 border-none  rounded-3xl p-4 text-white">
            <h2 className=" text-sm md:text-xl font-bold mb-4">
              Owner Information
            </h2>

            <div className="mb-4 flex justify-center items-center">
              <label className="cursor-pointer flex flex-col justify-center items-center">
                <Image
                  className="cursor-pointer md:w-full w-[200px] h-[100px] "
                  src="/AddpetImages/addimage.svg"
                  alt="add image"
                  width={200}
                  height={200}
                />

                <span className="text-yellow-400 mt-5 font-bold">
                  Add Your Pet
                </span>

                {/* Hidden input field */}
                <input
                  id="image-upload"
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="font-bold">Full Name</label>
              <input
                type="text"
                name="owner_name"
                value={formData.owner_name}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold">Phone Number</label>
              <input
                type="text"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold">Pin Code</label>
              <input
                type="text"
                name="p_pin"
                value={formData.p_pin}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <button
              onClick={handleNext}
              className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
            >
              <ArrowRight className="font-bold" />
            </button>
          </div>
        )}

        {/* Step 2 */}

        {step === 2 && (
          <div className="border-2 border-none  rounded-3xl p-4 text-white">
            <h2 className=" text-sm md:text-xl font-bold mb-4">
              What Type Of Pet Do You Have?
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div
                onClick={() => setFormData({ ...formData, species: "Dog" })}
                className={`p-4 bg-white rounded-3xl border-2 ${formData.species === "Dog"
                  ? "border-green-500"
                  : "border-gray-700"
                  } flex flex-col items-center cursor-pointer`}
              >
                <img
                  src="/AddpetImages/dogimage.png"
                  alt="Dog"
                  className="h-16 mb-2"
                />
                <span className=" text-sm md:text-xl font-bold uppercase text-black ">
                  Dog
                </span>
              </div>

              <div
                onClick={() => setFormData({ ...formData, species: "Cat" })}
                className={`p-4 bg-white rounded-3xl border-2 ${formData.species === "Cat"
                  ? "border-green-500"
                  : "border-gray-700"
                  } flex flex-col items-center cursor-pointer`}
              >
                <img
                  src="/AddpetImages/cat.png"
                  alt="Cat"
                  className="h-16 mb-2"
                />
                <span className=" text-sm md:text-xl font-bold uppercase text-black ">
                  Cat
                </span>
              </div>
            </div>

            <h2 className=" text-sm md:text-xl font-bold mb-4">
              What Type Of Pet Do You Have?
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div
                onClick={() => setFormData({ ...formData, otherSpecies: "Dog" })}
                className={`p-4 bg-white rounded-3xl border-2 ${formData.otherSpecies === "Dog"
                  ? "border-green-500"
                  : "border-gray-700"
                  } flex flex-col items-center cursor-pointer`}
              >
                <img
                  src="/AddpetImages/friend.svg"
                  alt="Dog"
                  className="h-16 mb-2"
                />
                <span className=" text-sm md:text-xl font-bold uppercase text-black ">
                  FRINDELY{" "}
                </span>
              </div>

              <div
                onClick={() => setFormData({ ...formData, otherSpecies: "Cat" })}
                className={`p-4 bg-white rounded-3xl border-2 ${formData.otherSpecies === "Cat"
                  ? "border-green-500"
                  : "border-gray-700"
                  } flex flex-col items-center cursor-pointer`}
              >
                <img
                  src="/AddpetImages/aggra.svg"
                  alt="Cat"
                  className="h-16 mb-2"
                />
                <span className=" text-sm md:text-xl font-bold uppercase text-black ">
                  aggressive{" "}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-white  text-sm md:text-xl font-bold uppercase ">
                Breed
              </label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>

            <div className="w-full flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowLeft className="" />
              </button>

              <button
                onClick={handleNext}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowRight className="" />
              </button>

            </div>
          </div>
        )}

        {/* step 3 */}

        {step === 3 && (
          <div className="border-2 border-none  rounded-3xl p-4 text-white">
            <h2 className=" text-sm md:text-xl font-bold mb-4">
              Pet Information
            </h2>

            <div className="mb-4">
              <label>Name Of Your Pet </label>
              <input
                type="text"
                name="pet_name"
                value={formData.pet_name}
                placeholder="Your Pet Name"
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>

            <div className="mb-4">
              <label>Age</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>

            <div className="mb-4">
              <label>Gender</label>
              <div className="flex space-x-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                    className="hidden"
                  />
                  <div
                    onClick={() =>
                      handleChange({
                        target: { name: "gender", value: "Male" },
                      })
                    }
                    className={`cursor-pointer md:w-[150px] md:h-[120px] w-[150px] h-[110px] flex flex-col justify-center gap-1 items-center bg-white border-2 rounded ${formData.gender === "Male"
                      ? "border-blue-500"
                      : "border-gray-300"
                      }`}
                  >
                    <Image
                      src="/AddpetImages/male.svg"
                      alt="Male"
                      width={50}
                      height={50}
                    />
                    <p className="font-bold text-black">Male</p>
                  </div>
                </label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                    className="hidden"
                  />

                  <div
                    onClick={() =>
                      handleChange({
                        target: { name: "gender", value: "Female" },
                      })
                    }
                    className={`cursor-pointer md:w-[150px] md:h-[120px] w-[150px] h-[110px] flex flex-col justify-center gap-1 items-center bg-white border-2 rounded ${formData.gender === "Female"
                      ? "border-blue-500"
                      : "border-gray-300"
                      }`}
                  >
                    <Image
                      src="/AddpetImages/female.svg"
                      alt="Female"
                      width={50}
                      height={50}
                    />

                    <p className="font-bold text-black">Female</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label>Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>

            <div className="mb-4">
              <div className="flex space-x-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="price_type"
                    value="fixed"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    onClick={() =>
                      handleChange({
                        target: { name: "price_type", value: "fixed" },
                      })
                    }
                    className={`cursor-pointer flex items-center space-x-2 ${formData.price_type === "fixed"
                      ? "text-white"
                      : "text-white"
                      }`}
                  >
                    <span
                      className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${formData.price_type === "fixed"
                        ? "border-none bg-[#15FF00]"
                        : "border-gray-300"
                        }`}
                    >
                      {formData.price_type === "fixed" && (
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                      )}
                    </span>
                    <span>Fixed Amount</span>
                  </div>
                </label>

                <label>
                  <input
                    type="radio"
                    name="price_type"
                    value="negotiable"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    onClick={() =>
                      handleChange({
                        target: { name: "price_type", value: "negotiable" },
                      })
                    }
                    className={`cursor-pointer flex items-center space-x-2 ${formData.price_type === "negotiable"
                      ? "text-white"
                      : "text-white"
                      }`}
                  >
                    <span
                      className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${formData.price_type === "negotiable"
                        ? "border-none bg-[#15FF00]"
                        : "border-gray-300"
                        }`}
                    >
                      {formData.price_type === "negotiable" && (
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                      )}
                    </span>
                    <span>Negotiable Amount</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Price Range Buttons */}
            <div className="mb-4">
              <div className="flex sm:space-x-4 sm:mt-2 flex-wrap gap-5 items-center justify-center ">
                <label>
                  <input
                    type="radio"
                    name="price_range"
                    value="1000-2000"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    onClick={() =>
                      handleChange({
                        target: { name: "price_range", value: "1000-2000" },
                      })
                    }
                    className={`cursor-pointer text-yellow-400 w-[150px] h-[60px] flex justify-center items-center border-2 rounded-3xl ${formData.price_range === "1000-2000"
                      ? "border-green-500 text-black "
                      : "border-gray-300"
                      }`}
                  >
                    1000 - 2000
                  </div>
                </label>

                <label>
                  <input
                    type="radio"
                    name="price_range"
                    value="2000-4000"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    onClick={() =>
                      handleChange({
                        target: { name: "price_range", value: "2000-4000" },
                      })
                    }
                    className={`cursor-pointer text-yellow-400 w-[150px] h-[60px] flex justify-center items-center border-2 rounded-3xl ${formData.price_range === "2000-4000"
                      ? "border-green-500 text-black "
                      : "border-gray-300"
                      }`}
                  >
                    2000 - 4000
                  </div>
                </label>

                <label>
                  <input
                    type="radio"
                    name="price_range"
                    value="4000-8000"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    onClick={() =>
                      handleChange({
                        target: { name: "price_range", value: "4000-8000" },
                      })
                    }
                    className={`cursor-pointer text-yellow-400 w-[150px] h-[60px] flex justify-center items-center border-2 rounded-3xl ${formData.price_range === "4000-8000"
                      ? "border-green-500 text-black"
                      : "border-gray-300"
                      }`}
                  >
                    4000 - 20k
                  </div>
                </label>
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowLeft className="" />
              </button>
              <button
                onClick={handleNext}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowRight className="" />
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="border-2 border-none rounded-3xl p-4 text-white">
            <h2 className=" text-sm md:text-2xl font-bold mb-4">Additional Information</h2>

            {/* New fields based on the uploaded screenshots */}
            <div className="mb-4">
              <label className="text-white font-bold text-2xl">Behavior</label>
              <div className="flex flex-col space-y-4 mt-2">
                {/* Good with Kids */}
                <div>
                  <label>Good With Kids?</label>
                  <div className="flex space-x-4">
                    <label className="text-white">
                      <input
                        type="radio"
                        name="good_with_kids"
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.good_with_kids === "Yes"}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="good_with_kids"
                        value="No"
                        onChange={handleChange}
                        checked={formData.good_with_kids === "No"}
                        className="mr-2"
                      />
                      No
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="good_with_kids"
                        value="Dont Know"
                        onChange={handleChange}
                        checked={formData.good_with_kids === "Dont Know"}
                        className="mr-2"
                      />
                      Don&apos;t Know
                    </label>
                  </div>
                </div>

                {/* Parvo Infected */}
                <div>
                  <label>Parvo Infected</label>
                  <div className="flex space-x-4">
                    <label className="text-white">
                      <input
                        type="radio"
                        name="parvo_infected"
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.parvo_infected === "Yes"}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="parvo_infected"
                        value="No"
                        onChange={handleChange}
                        checked={formData.parvo_infected === "No"}
                        className="mr-2"
                      />
                      No
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="parvo_infected"
                        value="Dont Know"
                        onChange={handleChange}
                        checked={formData.parvo_infected === "Dont Know"}
                        className="mr-2"
                      />
                      Don&apos;t Know
                    </label>
                  </div>
                </div>

                {/* Activity Level */}
                <div>
                  <label>Activity Level</label>
                  <div className="flex space-x-4">
                    <label className="text-white">
                      <input
                        type="radio"
                        name="activity_level"
                        value="High"
                        onChange={handleChange}
                        checked={formData.activity_level === "High"}
                        className="mr-2"
                      />
                      High
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="activity_level"
                        value="Low"
                        onChange={handleChange}
                        checked={formData.activity_level === "Low"}
                        className="mr-2"
                      />
                      Low
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="activity_level"
                        value="Dont Know"
                        onChange={handleChange}
                        checked={formData.activity_level === "Dont Know"}
                        className="mr-2"
                      />
                      Don&apos;t Know
                    </label>
                  </div>
                </div>

                {/* Potty Trained */}
                <div>
                  <label>Potty Trained?</label>
                  <div className="flex space-x-4">
                    <label className="text-white">
                      <input
                        type="radio"
                        name="potty_trained"
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.potty_trained === "Yes"}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="potty_trained"
                        value="No"
                        onChange={handleChange}
                        checked={formData.potty_trained === "No"}
                        className="mr-2"
                      />
                      No
                    </label>
                    <label className="text-white">
                      <input
                        type="radio"
                        name="potty_trained"
                        value="Dont Know"
                        onChange={handleChange}
                        checked={formData.potty_trained === "Dont Know"}
                        className="mr-2"
                      />
                      Don&apos;t Know
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Breed Section */}
            <div className="mb-4">
              <label>What is the Breed of the Dog?</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Purebred"
                    onChange={handleChange}
                    checked={formData.breed === "Purebred"}
                    className="mr-2"
                  />
                  Purebred
                </label>
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Crossbred"
                    onChange={handleChange}
                    checked={formData.breed === "Crossbred"}
                    className="mr-2"
                  />
                  Crossbred (Mixed Breed)
                </label>
              </div>

              <div className="mt-4">
                <label>Primary Breed</label>
                <select
                  name="primary_breed"
                  value={formData.primary_breed}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded mt-2"
                >
                  <option value="">Select Primary Breed</option>
                  {/* Add more breed options as needed */}
                  <option value="Breed1">Breed1</option>
                  <option value="Breed2">Breed2</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}

            <div className="w-full flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowLeft className="" />
              </button>
              <button
                onClick={handleNext}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowRight className="" />
              </button>
            </div>
          </div>

        )}
        {step === 5 && (
          <div className="border-2 border-none rounded-3xl p-4 text-white">
            <h2 className=" text-sm md:text-xl font-bold mb-4">Additional Information</h2>

            {/* Additional Information */}
            <div className="mb-4">
              <label>KCI Certified</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="radio"
                    name="kci_certified"
                    value="Yes"
                    onChange={handleChange}
                    checked={formData.kci_certified === "Yes"}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="kci_certified"
                    value="No"
                    onChange={handleChange}
                    checked={formData.kci_certified === "No"}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label>Micro Chip</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="radio"
                    name="micro_chip"
                    value="Yes"
                    onChange={handleChange}
                    checked={formData.micro_chip === "Yes"}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="micro_chip"
                    value="No"
                    onChange={handleChange}
                    checked={formData.micro_chip === "No"}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label>Vaccinated</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="radio"
                    name="vaccinated"
                    value="Yes"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Yes"}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="vaccinated"
                    value="No"
                    onChange={handleChange}
                    checked={formData.vaccinated === "No"}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label>Health Check Up</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="radio"
                    name="health_checkup"
                    value="Yes"
                    onChange={handleChange}
                    checked={formData.health_checkup === "Yes"}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="health_checkup"
                    value="No"
                    onChange={handleChange}
                    checked={formData.health_checkup === "No"}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label>Health Certificate</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="radio"
                    name="health_certificate"
                    value="Yes"
                    onChange={handleChange}
                    checked={formData.health_certificate === "Yes"}
                    className="mr-2"

                  />
                  Yes
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="health_certificate"
                    value="No"
                    onChange={handleChange}
                    checked={formData.health_certificate === "No"}
                    className="mr-2"

                  />
                  No
                </label>
              </div>
            </div>

            {/* Last Section */}
            <div className="mb-4">
              <label>Where did you acquire the pet?</label>
              <select
                name="pet_acquisition"
                value={formData.pet_acquisition}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              >
                <option value="">Select</option>
                <option value="Breeder">Breeder</option>
                <option value="Pet Shop">Pet Shop</option>
                <option value="Shelter">Shelter</option>
                <option value="Street">Street</option>
                <option value="Don’t Know">Don’t Know</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowLeft className="" />
              </button>
              <button
                onClick={handleNext}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowRight className="" />
              </button>
            </div>
          </div>

        )}

        {step === 6 && (
          <div className="border-2 border-none  rounded-3xl p-4 text-white">
            <h2 className=" text-sm md:text-xl font-bold mb-4">
              Medical Details
            </h2>
            <div className="mb-4">
              <label className="font-bold">Weight (*kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold">Height (*cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold">Size</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white ">
                  <input
                    type="radio"
                    name="size"
                    value="Small"
                    onChange={handleChange}
                    checked={formData.size === "Small"}
                    className="mr-2"
                  />
                  Small
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="size"
                    value="Medium"
                    onChange={handleChange}
                    checked={formData.size === "Medium"}
                    className="mr-2"
                  />
                  Medium
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="size"
                    value="Large"
                    onChange={handleChange}
                    checked={formData.size === "Large"}
                    className="mr-2"
                  />
                  Large
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="font-bold">Disease</label>
              <input
                type="text"
                name="disease"
                value={formData.disease}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">

              <label className="font-bold">Coat Length</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="radio"
                    name="coat_lenth"
                    value="Short"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Short"}
                    className="mr-2"
                  />
                  Short
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="coat_lenth"
                    value="Medium"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Medium"}
                    className="mr-2"
                  />
                  Medium
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="coat_lenth"
                    value="Long"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Long"}
                    className="mr-2"
                  />
                  Long
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="font-bold">Coat Density</label>
              <div className="flex space-x-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="coat_density"
                    value="Sparse"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Sparse"}
                    className="mr-2"
                  />
                  Short
                </label>
                <label>
                  <input
                    type="radio"
                    name="coat_density"
                    value="Normal"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Normal"}
                    className="mr-2"
                  />
                  Normal
                </label>
                <label>
                  <input
                    type="radio"
                    name="coat_density"
                    value="Dense"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Dense"}
                    className="mr-2"
                  />
                  Dense
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="font-bold">Eye Color Possibilities
              </label>
              <div className="flex space-x-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="eye_color"
                    value="Sparse"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Sparse"}
                    className="mr-2"
                  />
                  Blue Eye
                </label>
                <label>
                  <input
                    type="radio"
                    name="coat_density"
                    value="BlueEye"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Normal"}
                    className="mr-2"
                  />
                  Odd Eye
                </label>
                <label>
                  <input
                    type="radio"
                    name="coat_density"
                    value="OddEye"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Dense"}
                    className="mr-2"
                  />
                  Blue Eye
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="font-bold">Nose Color Possibilities
              </label>
              <div className="flex space-x-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="nose_color"
                    value="BlackNose"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Sparse"}
                    className="mr-2"
                  />
                  Black Nose
                </label>
                <label>
                  <input
                    type="radio"
                    name="coat_density"
                    value="PinkNose"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Normal"}
                    className="mr-2"
                  />
                  Pink Nose
                </label>

              </div>
            </div>


            <div className="mb-4">
              <label className="font-bold">Maintenance</label>
              <div className="flex space-x-4 mt-2">
                <label className="text-white">
                  <input
                    type="radio"
                    name="maintenance"
                    value="Low"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Low"}
                    className="mr-2"
                  />
                  Low
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="maintenance"
                    value="Medium"
                    onChange={handleChange}
                    checked={formData.vaccinated === "Medium"}
                    className="mr-2"
                  />
                  Medium
                </label>
                <label className="text-white">
                  <input
                    type="radio"
                    name="maintenance"
                    value="High"
                    onChange={handleChange}
                    checked={formData.vaccinated === "High"}
                    className="mr-2"
                  />
                  High
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="font-bold">Date of Last Visit</label>
              <input
                type="date"
                name="date_of_visit"
                value={formData.date_of_visit}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold">Unique Symbol/Mark</label>
              <input
                type="text"
                name="unique_symbol"
                value={formData.unique_symbol}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded mt-2"
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowLeft className="" />
              </button>
              <button
                onClick={onSubmit}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                Submit
              </button>
            </div>
          </div>
        )}



        {step === 7 && (
          <div className="border-2 border-none  rounded-3xl p-4 text-white">
            <h2 className="text-xl font-bold mb-4 text-white">All the Field Under review</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-white">Review your details:</h3>

              <p className="text-gray-300">
                <strong >Owner Name:</strong>{" "}
                <span className="text-white px-2"> {formData.owner_name}</span>
              </p>
              <p className="text-gray-300">
                <strong>City:</strong>{" "}
                <span className="text-white px-2"> {formData.city}</span>
              </p>
              <p className="text-gray-300">
                <strong>Phone Number:</strong>{" "}
                <span className="text-white px-2"> {formData.phone_no}</span>
              </p>
              <p className="text-gray-300">
                <strong>Pet Name:</strong>{" "}
                <span className="text-white px-2"> {formData.pet_name}</span>
              </p>
              <p className="text-gray-300">
                <strong>Species:</strong>{" "}
                <span className="text-white px-2"> {formData.species}</span>
              </p>
              <p className="text-gray-300">
                <strong>Breed:</strong>{" "}
                <span className="text-white px-2"> {formData.breed}</span>
              </p>
              <p className="text-gray-300">
                <strong>Age:</strong>{" "}
                <span className="text-white px-2"> {formData.age}</span>
              </p>
              <p className="text-gray-300">
                <strong>Gender:</strong>{" "}
                <span className="text-white px-2"> {formData.gender}</span>
              </p>
              <p className="text-gray-300">
                <strong>Date of Birth:</strong>{" "}
                <span className="text-white px-2">
                  {" "}
                  {formData.date_of_birth}
                </span>
              </p>
              <p className="text-gray-300">
                <strong>Weight:</strong>{" "}
                <span className="text-white px-2"> {formData.weight}</span>
              </p>
              <p className="text-gray-300">
                <strong>Height:</strong>{" "}
                <span className="text-white px-2"> {formData.height}</span>
              </p>
              <p className="text-gray-300">
                <strong>Size:</strong>{" "}
                <span className="text-white px-2"> {formData.size}</span>
              </p>
              <p className="text-gray-300">
                <strong>Disease:</strong>{" "}
                <span className="text-white px-2"> {formData.disease}</span>
              </p>
              <p className="text-gray-300">
                <strong>Vaccinated:</strong>{" "}
                <span className="text-white px-2"> {formData.vaccinated}</span>
              </p>
              <p className="text-gray-300">
                <strong>Date of Last Visit:</strong>{" "}
                <span className="text-white px-2">
                  {" "}
                  {formData.date_of_visit}
                </span>
              </p>
              <p className="text-gray-300">
                <strong>Unique Symbol:</strong>{" "}
                <span className="text-white px-2">
                  {" "}
                  {formData.unique_symbol}
                </span>
              </p>
              {/* Display images */}
              <div className="mt-4">
                <h4 className="font-semibold">Uploaded Images:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Uploaded ${index + 1}`}
                      className="w-full h-auto rounded-3xl"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="text-white font-bold  border-2 hover:border-[#15FF00]  hover:text-white  px-6 py-3 rounded-full float-right"
              >
                <ArrowLeft className="" />
              </button>

            </div>
          </div>

        )}


      </div>
    </div >
  );
};

export default MultiStepForm;
