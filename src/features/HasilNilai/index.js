import React from "react";

const HasilNilai = () => {
  const tableData = [...Array(10).keys()]; // Membuat array dari 0 hingga 9

  return (
    <div className="flex space-x-4 overflow-x-auto">
      {tableData.map((index) => (
        <div key={index} className="w-1/5 p-4 border border-gray-300">
          <h2 className="text-lg font-semibold mb-2">Tabel {index + 1}</h2>
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

export default HasilNilai;
