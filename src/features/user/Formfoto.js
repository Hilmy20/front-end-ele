import React, { useState } from "react";

const FormFoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Proses pengiriman foto atau implementasikan logika sesuai kebutuhan.

    // Contoh: Kirim file ke server
    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      // Lakukan pengiriman formData ke server atau implementasikan logika penyimpanan foto.
      console.log("FormData:", formData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-600"
          >
            Pilih Foto
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mt-4">
          <button type="submit" className="btn mt-2 w-full btn-primary  ">
            Unggah Foto
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormFoto;
