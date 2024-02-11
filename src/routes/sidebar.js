const routes = [
  {
    path: "/app/dashboard",
    name: "Dashboard",
  },
  {
    path: "/app/ImportMasterData", // url
    name: "Import Master Data", // name that appear in Sidebar
  },
  {
    path: "", //no url needed as this has submenu
    name: "Setting Data Master", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/DataMataPelajaran",
        name: "Data Mata Pelajaran",
      },
      {
        path: "/app/DataJenisUjian", //url
        name: "Data Jenis Ujian", // name that appear in Sidebar
      },
      {
        path: "/app/DataJurusan",
        name: "Data Jurusan",
      },
      {
        path: "/app/DataKelas",
        name: "Data Kelas",
      },
      {
        path: "/app/DataLevel",
        name: "Data Level",
      },
    ],
  },
  {
    path: "/app/PesertaUjian", // url
    name: "Peserta Ujian", // name that appear in Sidebar
  },
  {
    path: "/app/StatusPeserta", // url
    name: "Status Peserta", // name that appear in Sidebar
  },
  {
    path: "/app/Registrasi", // url
    name: "Registrasi", // name that appear in Sidebar
  },
  {
    path: "/app/Absensi", // url
    name: "Absensi", // name that appear in Sidebar
  },
  {
    path: "/app/TatapMuka", // url
    name: "Tatap Muka", // name that appear in Sidebar
  },

  {
    path: "", //no url needed as this has submenu
    name: "E-Learning", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/Materi", //url
        name: "Materi", // name that appear in Sidebar
      },
      {
        path: "/app/TugasTerstruktur",
        name: "Tugas Terstruktur",
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    name: "Bank Soal", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/DaftarSoal", //url
        name: "Daftar Soal", // name that appear in Sidebar
      },
      {
        path: "/app/FilePendukung",
        name: "File Pendukung",
      },
    ],
  },
  {
    path: "/app/MenuUjian", // url
    name: "Menu Ujian", // name that appear in Sidebar
  },
  {
    path: "", //no url needed as this has submenu
    name: "Nilai", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/HasilNilai", //url
        name: "Hasil Nilai", // name that appear in Sidebar
      },
      {
        path: "/app/SemuaNilai",
        name: "Semua Nilai",
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    name: "Cetak", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/DaftarHasilUjian", //url
        name: "Daftar Hasil Ujian", // name that appear in Sidebar
      },
      {
        path: "/app/SemuaNilai",
        name: "Semua Nilai",
      },
      {
        path: "/app/SemuaNilai",
        name: "Semua Nilai",
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    name: "Documentation", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/Meeting", // url
        name: "Meeting", // name that appear in Sidebar
      },
      {
        path: "/app/features",
        name: "Features",
      },
      {
        path: "/app/components",
        name: "Components",
      },
    ],
  },
];

export default routes;
