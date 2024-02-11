import React from "react";

const MyTable = () => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Kolom 1</th>
            <th className="py-2 px-4 border-b">Kolom 2</th>
            <th className="py-2 px-4 border-b">Kolom 3</th>
            <th className="py-2 px-4 border-b">Kolom 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Data 1</td>
            <td className="py-2 px-4 border-b">Data 2</td>
            <td className="py-2 px-4 border-b">Data 3</td>
            <td className="py-2 px-4 border-b">Data 4</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Data A</td>
            <td className="py-2 px-4 border-b">Data B</td>
            <td className="py-2 px-4 border-b">Data C</td>
            <td className="py-2 px-4 border-b">Data D</td>
          </tr>
          {/* Tambahkan baris lain sesuai kebutuhan Anda */}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
