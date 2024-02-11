import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DataKelas from "../../features/DataKelas/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "DataKelas" }));
  }, []);

  return <DataKelas />;
}

export default InternalPage;
