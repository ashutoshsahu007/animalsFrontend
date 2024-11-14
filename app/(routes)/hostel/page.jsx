import React from "react";
import { FaPhone } from "react-icons/fa";

const Hostel = () => {
  return (
    <div className="bg-white ">
      <div className="bg-black py-4 w-full">
        <div className=" mx-2">
          <h1 className="text-lg font-bold text-white">
            The Best Care That Your Pet Deserves
          </h1>
          <div className="mt-2 grid grid-cols-1 lg:grid-cols-4 gap-2 ">
            <select className="border p-2  rounded-lg ">
              <option value="" className="text-green-500">
                Select Pet Type
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
            <select className="border p-2  rounded-lg ">
              <option value="" className="text-green-500">
                Select State
              </option>
              <option value="california">California</option>
              <option value="texas">Texas</option>
              <option value="florida">Florida</option>
              <option value="new-york">New York</option>
            </select>

            <select className="border p-2 rounded-lg">
              <option value="" className="text-green-500">
                Select City
              </option>
              <option value="los-angeles">Los Angeles</option>
              <option value="houston">Houston</option>
              <option value="miami">Miami</option>
              <option value="new-york-city">New York City</option>
            </select>

            <button className="bg-green-500 text-white p-2 rounded">
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 mx-1">
          <p className="text-green-600">Home / Pet Stays In India</p>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center mt-4 p-2">
        <div>
          <p className="font-bold text-3xl">
            Are You Looking For Dog Hostel Near You
          </p>
          <p>
            <FaPhone className="inline-block text-green-400 mr-2" />
            Call us:
            <span className="text-green-400 ml-2">918252167751</span>
          </p>
        </div>
        <button className="bg-green-500 text-white p-2 rounded">
          Join as Sitter
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-4">
        <h2 className=" font-bold p-2 text-3xl">
          The Best Care That Your Pet Deserves
        </h2>

        {/* Dog Hostel Packages */}
        <div className="mt-4 p-2">
          <h3 className="font-bold text-xl">
            Dog Hostel Packages{" "}
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              Indian
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="border p-4 text-center bg-black text-white rounded-lg relative">
              <img
                src="/hostel1.png"
                alt="Package 1"
                className="mx-auto rounded-md"
              />
              {/* <h4 className="font-bold mt-4 text-lg">Animals Lover Home Services</h4>
          <p className="text-sm mt-2">Pet Friendly Home</p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="bg-green-500 px-2 py-1 text-xs rounded-full">Hygienic</span>
            <span className="bg-green-500 px-2 py-1 text-xs rounded-full">Safe</span>
            <span className="bg-green-500 px-2 py-1 text-xs rounded-full">Compassionate</span>
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-green-500 text-white p-2 rounded-lg w-full mr-2">
              Book Now
            </button>
            <button className="bg-green-500 text-white p-2 rounded-lg w-full">
              Whatsapp
            </button>
          </div> */}
            </div>

            <div className="border p-4 text-center bg-black text-white rounded-lg relative">
              <img
                src="hostel2.png"
                alt="Package 2"
                className="mx-auto rounded-md"
              />
              {/* <h4 className="font-bold mt-4 text-lg">Animals Lover Boarding Services</h4>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="bg-green-500 px-2 py-1 text-xs rounded-full">Dog Boarding</span>
            <span className="bg-green-500 px-2 py-1 text-xs rounded-full">Home Visits</span>
            <span className="bg-green-500 px-2 py-1 text-xs rounded-full">Doggy Day Care</span>
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-green-500 text-white p-2 rounded-lg w-full mr-2">
              Book Now
            </button>
            <button className="bg-green-500 text-white p-2 rounded-lg w-full">
              Whatsapp
            </button>
          </div> */}
            </div>

            <div className="border p-4 text-center bg-black text-white rounded-lg relative">
              <img
                src="/hostel3.png"
                alt="Package 3"
                className="mx-auto rounded-md"
              />
              {/* <h4 className="font-bold mt-4 text-lg">Apply as a Pet Sitter</h4>
          <p className="text-sm mt-2">Join Indiaapos;s finest network of pet sitters!</p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="bg-green-500 px-2 py-1 text-xs rounded-full">Earn through your Love for Pets</span>
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-green-500 text-white p-2 rounded-lg w-full mr-2">
              Book Now
            </button>
            <button className="bg-green-500 text-white p-2 rounded-lg w-full">
              Whatsapp
            </button>
          </div> */}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 p-2">
          <h3 className="font-bold text-2xl">
            Need Pet Boarding Services? Animals Lovers Here To Take Care Of Your
            Pet!
          </h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="text"
              placeholder="Contact No"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="text"
              placeholder="Dogs"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="text"
              placeholder="Breed"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="text"
              placeholder="City"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="text"
              placeholder="Pet Age"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="text"
              placeholder="Pet's Gender"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="date"
              placeholder="Check-In"
            />
            <input
              className="border-green-500 border p-2 sm:p-4 rounded-lg"
              type="date"
              placeholder="Check-Out"
            />
            <textarea
              className="border-green-500 border p-2 sm:p-4 rounded-lg col-span-1 sm:col-span-2"
              placeholder="Tell Us About Your Pet Behaviour"
              rows={4}
            ></textarea>

            <div className="col-span-1 sm:col-span-2 flex items-center space-x-4 p-2">
              <span className="font-bold">Are You A Pet Parent</span>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="petParent"
                  value="yes"
                  className="form-radio"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="petParent"
                  value="no"
                  className="form-radio"
                />
                <span>No</span>
              </label>
            </div>
          </form>

          <div className="mt-8 p-2">
            <h3 className="font-bold text-2xl text-green-600">
              Book Dog Hostel & Pet Boarding In India At Best Prices
            </h3>
            <p className="text-gray-700 mt-2 text-justify ">
              Book a Dog Hostel and Dog Boarding in India at Best Prices on Mr n
              Mrs Pet, Whether You live in Rajasthan, Delhi, Punjab, Uttar
              Pradesh, Gujarat, Maharastra, Telangana, Book a Dog Boarding
              Service near you.When you have to go away or work long hours,
              don’t worry about leaving your pet alone at home. There are a
              variety of dog hostel packages that are just right for your pet
              because your furr baby deserves the best. Book your dog hostel
              online today and be worry-free; We provide a home-based dog hostel
              in India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
