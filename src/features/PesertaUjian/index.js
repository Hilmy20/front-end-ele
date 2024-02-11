import React from "react";

const PesertaUjian = () => {
  const columnCount = 13;
  const rowCount = 3; // Sesuaikan jumlah baris yang Anda inginkan

  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {[...Array(columnCount)].map((_, i) => (
              <th key={i + 1} className="py-2 px-4 border-b">
                Kolom {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(rowCount)].map((_, j) => (
            <tr key={j + 1}>
              {[...Array(columnCount)].map((_, i) => (
                <td key={i + 1} className="py-2 px-4 border-b">
                  {j === 0
                    ? `Data ${i + 1}`
                    : `Data ${String.fromCharCode(64 + j)}`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PesertaUjian;
