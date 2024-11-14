import React from 'react';

const LookingFor = () => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-bold">Looking For</h2>
      <ul className="list-none mb-0">
        <li className="flex items-center mb-2">
          <input type="radio" id="for-buying" name="looking-for" />
          <label htmlFor="for-buying" className="ml-2">For Buying</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-mating" name="looking-for" />
          <label htmlFor="for-mating" className="ml-2">For Mating</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-adoption" name="looking-for" />
          <label htmlFor="for-adoption" className="ml-2">For Adoption</label>
        </li>
      </ul>
      <h2 className="text-lg font-bold">Pet Category</h2>
      <ul className="list-none mb-0">
        <li className="flex items-center mb-2">
          <input type="radio" id="for-buying" name="looking-for" />
          <label htmlFor="for-buying" className="ml-2">Dogs</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-mating" name="looking-for" />
          <label htmlFor="for-mating" className="ml-2">Cats</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-adoption" name="looking-for" />
          <label htmlFor="for-adoption" className="ml-2">Small Pets</label>
        </li>
      </ul>
      <h2 className="text-lg font-bold">Sort By</h2>
      <ul className="list-none mb-0">
        <li className="flex items-center mb-2">
          <input type="radio" id="for-buying" name="looking-for" />
          <label htmlFor="for-buying" className="ml-2">Price Low to High</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-mating" name="looking-for" />
          <label htmlFor="for-mating" className="ml-2">Price Low to High</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-adoption" name="looking-for" />
          <label htmlFor="for-adoption" className="ml-2">Age low to High</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-adoption" name="looking-for" />
          <label htmlFor="for-adoption" className="ml-2">Age High to low</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-adoption" name="looking-for" />
          <label htmlFor="for-adoption" className="ml-2">What&apos;s New </label>
        </li>
      </ul>
      <h2 className="text-lg font-bold">Looking For</h2>
      <ul className="list-none mb-0">
        <li className="flex items-center mb-2">
          <input type="radio" id="for-buying" name="looking-for" />
          <label htmlFor="for-buying" className="ml-2">For Buying</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-mating" name="looking-for" />
          <label htmlFor="for-mating" className="ml-2">For Mating</label>
        </li>
        <li className="flex items-center mb-2">
          <input type="radio" id="for-adoption" name="looking-for" />
          <label htmlFor="for-adoption" className="ml-2">For Adoption</label>
        </li>
      </ul>
    </div>
  );
};

export default LookingFor;