"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/navbar";
import Image from "next/image";
import LookingFor from "./lookinfor";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BuyPage = () => {
  const router = useRouter();
  const pets = [
    {
      id: 1,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Pune, Maharashtra",
      birthday: "01-01-2023",
      vaccinated: 1,
      certified: true,
      review: 4.5,
      days: 38,
      gender: "male",
    },
    {
      id: 2,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Pune, Maharashtra",
      birthday: "01-01-2023",
      vaccinated: "vaccinated Pet",
      certified: true,
      review: 3,
      days: 38,
      gender: "male",
    },
    {
      id: 3,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Pune, Maharashtra",
      birthday: "01-01-2023",
      vaccinated: 1,
      certified: true,
      review: 4.5,
      days: 38,
      gender: "male",
    },
    {
      id: 4,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Mumbai, Maharashtra",
      birthday: "01-01-2023",
      vaccinated: "not vaccinated Pet",
      certified: true,
      review: 4.5,
      days: 38,
      gender: "Female",
    },
    {
      id: 5,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Mumbai, Maharashtra",
      birthday: "01-01-2023",
      vaccinated: "vaccinated Pet",
      certified: true,
      review: 4.5,
      days: 38,
      gender: "male",
    },
    {
      id: 6,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Mumbai, Maharashtra",
      birthday: "01-01-2023",
      vaccinated: "not vaccinated Pet",
      certified: true,
      review: 4.5,
      days: 38,
      gender: "Female",
    },
    {
      id: 7,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Mumbai, Maharashtra",
      birthday: "01-01-2023",
      vaccinated: "vaccinated Pet",
      certified: true,
      review: 4.5,
      days: 38,
      gender: "Female",
    },
    {
      id: 8,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Bangalore, Karnataka",
      birthday: "01-01-2023",
      vaccinated: "vaccinated Pet",
      certified: true,
      review: 4.5,
      days: 38,
      gender: "male",
    },
    {
      id: 9,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Bangalore, Karnataka",
      birthday: "01-01-2023",
      vaccinated: "vaccinated Pet",
      certified: true,
      review: 4.5,
      days: 38,
      gender: "Female",
    },
    {
      id: 10,
      breed: "Husky Siberian",
      price: "₹46000",
      description:
        "Price is negotiable. Cookie (he) vaccinated with all vaccinations.",
      image: "/image 16.png",
      location: "Bangalore, Karnataka",
      birthday: "01-01-2023",
      vaccinated: "vaccinated Pet",
      certified: true,
      review: 4,
      days: 38,
      gender: "male",
    },
  ];

  const [breed, setBreed] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [filteredPets, setFilteredPets] = useState(pets);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = () => {
    const filtered = pets.filter(
      (pet) =>
        (breed === "" || pet.breed.includes(breed)) &&
        (state === "" || pet.location.includes(state)) &&
        (city === "" || pet.location.includes(city))
    );
    setFilteredPets(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (pet) => {
    const query = new URLSearchParams(pet).toString();
    router.push(`/buy-page/${pet.id}?${query}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPets = filteredPets.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
    }
    for (let i = filledStars; i < totalStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div>
      <div className="justify-center items-center mt-5 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            <label className="font-bold text-xl"></label>
            <select
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full lg:w-[180px] rounded-lg border-green-500 border-4"
            >
              <option value="">Select Breed</option>
              <option value="Husky Siberian">Husky Siberian</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="German Shepherd">German Shepherd</option>
            </select>
          </div>
          <div>
            <label className="font-bold text-xl"></label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full lg:w-[180px] rounded-lg border-green-500 border-4"
            >
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Gujarat">Gujarat</option>
            </select>
          </div>
          <div>
            <label className="font-bold text-xl"></label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full lg:w-[180px] rounded-lg border-green-500 border-4"
            >
              <option value="">Select City</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <Button
            onClick={handleSearch}
            className="bg-green-400 mt-4 lg:mt-0 lg:col-span-1"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex mt-3 flex-col lg:flex-row lg:gap-2">
        <div className="w-full lg:w-64 bg-white shadow-md p-4 mb-4 lg:mb-0 hidden lg:block h-full">
          <LookingFor />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
          {filteredPets.length > 0 ? (
            paginatedPets.map((pet, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md w-full p-4"
              >
                <div className=" w-full h-[250px] flex-shrink-0 overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.breed}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex  gap-2 items-center justify-center">
                  <span className="text-2xl text-green-500">{pet.breed}</span>
                  <div className="flex items-center">{renderStars(pet.review)}</div>
                </div>

                <div className="grid grid-cols-2 items-center justify-center">
                  <p className="text-black mt-2 text-center gap-2">
                    {pet.days} days ago
                  </p>
                  <p className="text-black mt-2 flex justify-center items-center gap-2">
                    <Image src="/1.png" alt="a" width={16} height={16} />
                    {pet.location}
                  </p>
                  <p className="text-black mt-2 text-center">
                    {pet.vaccinated}
                  </p>
                  <p className="text-black mt-2 text-center">
                    {pet.gender}
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <Button className="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded m-1">
                    Call
                  </Button>
                  <Button className="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded m-1">
                    Whatsapp
                  </Button>
                  <Button className="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded m-1">
                    Details
                  </Button>
                 
                </div>
                <Button
                    onClick={() => handleViewDetails(pet)}
                    className="bg-green-500 text-white  rounded w-full"
                  >
                    Book Now
                  </Button>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-xl text-red-500 font-bold">
              No dogs available
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationPrevious>
          <PaginationContent>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index} active={index + 1 === currentPage}>
                <PaginationLink onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationNext>
        </Pagination>
      </div>
    </div>
  );
};

export default BuyPage;
