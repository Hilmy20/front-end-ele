// TableComponent.js

import React from "react";

const DaftarSoal = () => {
  return (
    <div className="container mx-auto mt-8">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="w-1/3 py-2 px-4 border border-gray-300">Kolom 1</th>
            <th className="w-1/3 py-2 px-4 border border-gray-300">Kolom 2</th>
            <th className="w-1/3 py-2 px-4 border border-gray-300">Kolom 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-gray-300">Data 1</td>
            <td className="py-2 px-4 border border-gray-300">Data 2</td>
            <td className="py-2 px-4 border border-gray-300">Data 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">Data A</td>
            <td className="py-2 px-4 border border-gray-300">Data B</td>
            <td className="py-2 px-4 border border-gray-300">Data C</td>
          </tr>
          {/* Tambahkan baris lain sesuai kebutuhan Anda */}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarSoal;
