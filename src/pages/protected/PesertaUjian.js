import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import PesertaUjian from "../../features/PesertaUjian";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "PesertaUjian" }));
  }, []);

  return <PesertaUjian />;
}

export default InternalPage;
