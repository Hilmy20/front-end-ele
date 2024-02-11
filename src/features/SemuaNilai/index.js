import React from "react";

const SemuaNilai = () => {
  const boxData = [...Array(5).keys()]; // Membuat array dari 0 hingga 4

  return (
    <div className="flex space-x-4">
      {boxData.map((index) => (
        <div key={index} className="w-1/5 p-4 border border-gray-300">
          <h2 className="text-lg font-semibold mb-2">Box {index + 1}</h2>
          <p className="text-gray-700">Isi Box {index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default SemuaNilai;
