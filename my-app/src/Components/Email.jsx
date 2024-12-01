import React from 'react';

const Email = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:py-28 md:px-20 lg:pl-40">
      {/* Title Section */}
      <p className="font-serif text-2xl md:text-3xl text-center md:text-left">
        Want Adventures news and updates?
      </p>
      <p className="font-serif text-2xl md:text-3xl text-orange-800 text-center md:text-left">
        Sign up for our <span className="italic font-semibold">emails.</span>
      </p>

      {/* Input and Button */}
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-2 pt-6 justify-center md:justify-start">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          className="bg-orange-800 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Email;
