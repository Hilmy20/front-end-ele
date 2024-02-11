import React, { useState } from "react";

const Absensi = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        <button
          onClick={() => handleButtonClick("Option 1")}
          className={`bg-blue-500 text-white px-4 py-2 rounded focus:outline-none ${
            selectedOption === "Option 1" ? "bg-blue-700" : ""
          }`}
        >
          Option 1
        </button>

        <button
          onClick={() => handleButtonClick("Option 2")}
          className={`bg-green-500 text-white px-4 py-2 rounded focus:outline-none ${
            selectedOption === "Option 2" ? "bg-green-700" : ""
          }`}
        >
          Option 2
        </button>

        <button
          onClick={() => handleButtonClick("Option 3")}
          className={`bg-yellow-500 text-white px-4 py-2 rounded focus:outline-none ${
            selectedOption === "Option 3" ? "bg-yellow-700" : ""
          }`}
        >
          Option 3
        </button>
      </div>

      <div className="mt-4">
        {selectedOption && (
          <p className="text-lg font-semibold">
            Anda memilih:{" "}
            <span className="text-blue-500">{selectedOption}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Absensi;
