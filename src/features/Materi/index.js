import React from "react";

const Materi = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Admin Materi</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        {/* Konten Materi */}
        <div className="bg-white p-6 rounded shadow-md mb-8">
          {/* Tambahkan konten materi disini */}
          <h2 className="text-xl font-semibold mb-4">Daftar Materi</h2>
          {/* ... */}
        </div>

        {/* Form Materi */}
        <div className="bg-white p-6 rounded shadow-md">
          {/* Tambahkan form materi disini */}
          <h2 className="text-xl font-semibold mb-4">Tambah Materi</h2>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default Materi;
