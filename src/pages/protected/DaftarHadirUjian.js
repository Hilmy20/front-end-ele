import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DaftarHadirUjian from "../../features/DaftarHadirUjian/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "DaftarHadirUjian" }));
  }, []);

  return <DaftarHadirUjian />;
}

export default InternalPage;
