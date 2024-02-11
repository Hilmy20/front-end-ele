// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const ImportMasterData = lazy(() =>
  import("../pages/protected/ImportMasterData")
);
const DataMataPelajaran = lazy(() =>
  import("../pages/protected/DataMataPelajaran")
);
const DataJenisUjian = lazy(() =>
  import("../pages/protected/DataJenisUjian.js")
);
const DataJurusan = lazy(() => import("../pages/protected/DataJurusan.js"));
const DataKelas = lazy(() => import("../pages/protected/DataKelas.js"));
const DataLevel = lazy(() => import("../pages/protected/DataLevel.js"));
const PesertaUjian = lazy(() => import("../pages/protected/PesertaUjian"));
const StatusPeserta = lazy(() => import("../pages/protected/StatusPeserta.js"));
const Registrasi = lazy(() => import("../pages/protected/Registrasi.js"));
const Absensi = lazy(() => import("../pages/protected/Absensi.js"));
const TatapMuka = lazy(() => import("../pages/protected/TatapMuka.js"));
const Materi = lazy(() => import("../pages/protected/Materi.js"));
const TugasTerstruktur = lazy(() =>
  import("../pages/protected/TugasTerstruktur.js")
);
const DaftarSoal = lazy(() => import("../pages/protected/DaftarSoal"));
const FilePendukung = lazy(() => import("../pages/protected/FilePendukung"));
const MenuUjian = lazy(() => import("../pages/protected/MenuUjian"));
const HasilNilai = lazy(() => import("../pages/protected/HasilNilai"));
const SemuaNilai = lazy(() => import("../pages/protected/SemuaNilai"));
const DaftarHadirUjian = lazy(() =>
  import("../pages/protected/DaftarHadirUjian")
);
const Meeting = lazy(() => import("../pages/protected/Meeting"));
const Page404 = lazy(() => import("../pages/protected/404"));
const DocFeatures = lazy(() => import("../pages/DocFeatures"));
const DocComponents = lazy(() => import("../pages/DocComponents"));

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/ImportMasterData",
    component: ImportMasterData,
  },
  {
    path: "/DataMataPelajaran",
    component: DataMataPelajaran,
  },
  {
    path: "/DataJenisUjian",
    component: DataJenisUjian,
  },
  {
    path: "/DataJurusan",
    component: DataJurusan,
  },
  {
    path: "/DataKelas",
    component: DataKelas,
  },
  {
    path: "/DataLevel",
    component: DataLevel,
  },
  {
    path: "/Absensi",
    component: Absensi,
  },
  {
    path: "/TatapMuka",
    component: TatapMuka,
  },
  {
    path: "/PesertaUjian",
    component: PesertaUjian,
  },
  {
    path: "/Registrasi",
    component: Registrasi,
  },
  {
    path: "/Materi",
    component: Materi,
  },
  {
    path: "/TugasTerstruktur",
    component: TugasTerstruktur,
  },
  {
    path: "/DaftarSoal",
    component: DaftarSoal,
  },
  {
    path: "/FilePendukung",
    component: FilePendukung,
  },
  {
    path: "/StatusPeserta",
    component: StatusPeserta,
  },
  {
    path: "/MenuUjian",
    component: MenuUjian,
  },
  {
    path: "/HasilNilai",
    component: HasilNilai,
  },
  {
    path: "/SemuaNilai",
    component: SemuaNilai,
  },
  {
    path: "/DaftarHadirUjian",
    component: DaftarHadirUjian,
  },
  {
    path: "/Meeting",
    component: Meeting,
  },
  {
    path: "/features",
    component: DocFeatures,
  },
  {
    path: "/components",
    component: DocComponents,
  },

  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
