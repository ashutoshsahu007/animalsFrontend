"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const HuskyPage = () => {
  const router = useRouter();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { breed, price, description, image, location, birthday, vaccinated, certified, review } = router.query;
      setPet({
        breed,
        price,
        description,
        image,
        location,
        birthday,
        vaccinated: vaccinated === 'true',
        certified: certified === 'true',
        review,
      });
    }
  }, [router.isReady, router.query]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="text-xl font-bold">Animalslover</div>
        <div className="flex">
          <div className="text-sm font-semibold mr-4">Contact us: 123456789</div>
          <button className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <img src={pet.image} alt={pet.breed} className="w-full mb-4" />
          <div className="text-center text-xl mb-4">{pet.breed}</div>
          <div className="text-center mb-4">{pet.description}</div>
          <div className="text-center mb-4">Price: ₹ {pet.price}</div>
          <div className="text-center mb-4">Location: {pet.location}</div>
          <div className="text-center mb-4">Birthday: {pet.birthday}</div>
          <div className="text-center mb-4">{pet.vaccinated ? 'Vaccinated Pet' : 'Not Vaccinated'}</div>
          <div className="text-center mb-4">{pet.certified ? 'KCI Certified' : 'Not Certified'}</div>
          <div className="text-center mb-4">{pet.review} ★★★★★</div>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded">Book Now</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded">Request To Video Call</button>
          </div>
        </div>

        <div className="w-1/2 pl-8">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Specific Question About Husky</h2>
            <div className="text-center mb-4">918251267751</div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Why Animals Lover</h2>
            <div className="flex justify-around">
              <div>Reason 1</div>
              <div>Reason 2</div>
              <div>Reason 3</div>
              <div>Reason 4</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Eye Color Possibilities</h2>
            <div className="flex justify-around">
              <div>Blue</div>
              <div>Blue</div>
              <div>Blue</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Nose Color Possibilities</h2>
            <div className="flex justify-around">
              <div>Brown</div>
              <div>Brown</div>
              <div>Brown</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Coat Color Possibilities</h2>
            <div className="flex justify-around">
              <div>Color 1</div>
              <div>Color 2</div>
              <div>Color 3</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Coat Length</h2>
            <div className="flex justify-between">
              <div>Short</div>
              <div>Medium</div>
              <div>Long</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Coat Density</h2>
            <div className="flex justify-between">
              <div>Sparse</div>
              <div>Normal</div>
              <div>Dense</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Activity Level</h2>
            <div className="flex justify-between">
              <div>Low</div>
              <div>Medium</div>
              <div>High</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4">Maintenance</h2>
            <div className="flex justify-between">
              <div>Low</div>
              <div>Medium</div>
              <div>High</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuskyPage;
