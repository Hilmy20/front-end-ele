import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import SemuaNilai from "../../features/SemuaNilai";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "SemuaNilai" }));
  }, []);

  return <SemuaNilai />;
}

export default InternalPage;
