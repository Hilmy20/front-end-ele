import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import TugasTerstruktur from "../../features/TugasTerstruktur/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "TugasTerstruktur" }));
  }, []);

  return <TugasTerstruktur />;
}

export default InternalPage;
