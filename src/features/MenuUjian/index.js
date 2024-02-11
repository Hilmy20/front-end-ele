// JadwalPage.js

import React from "react";

const MenuUjian = () => {
  // Data jadwal, bisa diganti sesuai kebutuhan
  const jadwalData = [
    { hari: "Senin", mataPelajaran: "Matematika", jam: "08:00 - 09:30" },
    { hari: "Selasa", mataPelajaran: "Bahasa Indonesia", jam: "10:00 - 11:30" },
    // Tambahkan data jadwal lainnya sesuai kebutuhan
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Jadwal Pelajaran</h1>

      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">Hari</th>
            <th className="py-2 px-4 border border-gray-300">Mata Pelajaran</th>
            <th className="py-2 px-4 border border-gray-300">Jam</th>
          </tr>
        </thead>
        <tbody>
          {jadwalData.map((jadwal, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border border-gray-300">
                {jadwal.hari}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {jadwal.mataPelajaran}
              </td>
              <td className="py-2 px-4 border border-gray-300">{jadwal.jam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuUjian;
