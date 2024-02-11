import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import HasilNilai from "../../features/HasilNilai";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "HasilNilai" }));
  }, []);

  return <HasilNilai />;
}

export default InternalPage;
