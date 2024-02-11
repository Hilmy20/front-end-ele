import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DataMataPelajaran from "../../features/DataMataPelajaran/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "DataMataPelajaran" }));
  }, []);

  return <DataMataPelajaran />;
}

export default InternalPage;
