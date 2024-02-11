import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DataJurusan from "../../features/DataJurusan/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "DataJurusan" }));
  }, []);

  return <DataJurusan />;
}

export default InternalPage;
