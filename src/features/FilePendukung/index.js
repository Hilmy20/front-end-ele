// FilePendukungPage.js

import React, { useState } from "react";

const FilePendukung = () => {
  // Tambahkan state atau logika lainnya sesuai kebutuhan
  const [fileList, setFileList] = useState([]);

  // Tambahkan logika untuk mengunggah file di sini

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Halaman File Pendukung</h1>

      {/* Tambahkan bagian untuk menampilkan dan mengunggah file */}
      <div className="bg-white p-6 rounded shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Daftar File Pendukung</h2>
        {/* Tampilkan daftar file pendukung */}
        <ul>
          {fileList.map((file, index) => (
            <li
              key={index}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {file.name}
            </li>
          ))}
        </ul>
        {/* Tambahkan form untuk mengunggah file */}
        <form>
          <label className="block text-gray-700 text-sm font-bold mt-4">
            Unggah File Pendukung:
          </label>
          <input
            type="file"
            multiple
            className="w-full mt-2 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              // Implementasi logika pengunggahan file di sini
              const uploadedFiles = Array.from(e.target.files);
              setFileList((prevFiles) => [...prevFiles, ...uploadedFiles]);
            }}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
          >
            Unggah
          </button>
        </form>
      </div>

      {/* Tambahkan bagian lainnya sesuai kebutuhan */}
    </div>
  );
};

export default FilePendukung;
