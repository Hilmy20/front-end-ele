import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DataJenisUjian from "../../features/DataJenisUjian/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "DataJenisUjian" }));
  }, []);

  return <DataJenisUjian />;
}

export default InternalPage;
