// components/ImageUpload.js

import { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="fileInput"
      />
      <label htmlFor="fileInput" className="flex flex-col items-center">
        {image ? (
          <img src={image} alt="Pet" className="h-40 w-auto object-cover rounded-lg" />
        ) : (
          <>
            <span className="text-lg text-gray-400">Click to Add Pet Photo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 w-10 text-gray-400 mt-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
