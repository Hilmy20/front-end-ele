import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DaftarSoal from "../../features/DaftarSoal/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "DaftarSoal" }));
  }, []);

  return <DaftarSoal />;
}

export default InternalPage;
