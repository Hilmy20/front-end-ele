// TugasPage.js

import React, { useState, useEffect } from "react";

const TugasPage = () => {
  // State untuk menyimpan daftar tugas
  const [tugasList, setTugasList] = useState([]);

  // Mengambil daftar tugas dari API (Contoh penggunaan useEffect)
  useEffect(() => {
    // Implementasi untuk mengambil data tugas dari API
    // Axios atau fetch dapat digunakan di sini
    // Misalnya:
    // fetch('https://api.example.com/tugas')
    //   .then(response => response.json())
    //   .then(data => setTugasList(data));
  }, []); // Dependencies di sini bisa diubah sesuai kebutuhan

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Admin Tugas</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        {/* Daftar Tugas */}
        <div className="bg-white p-6 rounded shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Daftar Tugas</h2>
          <ul>
            {tugasList.map((tugas) => (
              <li key={tugas.id} className="mb-2">
                {/* Tampilkan informasi tugas */}
                <p className="text-sm font-medium">{tugas.nama}</p>
                {/* ...Tambahkan informasi lainnya sesuai kebutuhan */}
              </li>
            ))}
          </ul>
        </div>

        {/* Form Tugas */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Tambah Tugas</h2>
          {/* Tambahkan form untuk menambah tugas */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default TugasPage;
