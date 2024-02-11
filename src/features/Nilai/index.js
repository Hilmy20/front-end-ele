// TabelComponent.js

import React from "react";

const TabelComponent = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Tabel</h1>

      {[...Array(10)].map((_, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tabel {index + 1}</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-300">Kolom 1</th>
                <th className="py-2 px-4 border border-gray-300">Kolom 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border border-gray-300">Data 1</td>
                <td className="py-2 px-4 border border-gray-300">Data 2</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">Data A</td>
                <td className="py-2 px-4 border border-gray-300">Data B</td>
              </tr>
              {/* Tambahkan baris lain sesuai kebutuhan Anda */}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TabelComponent;
