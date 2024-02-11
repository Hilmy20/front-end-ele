import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import ImportMasterData from "../../features/ImportMasterData";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "ImportMasterData" }));
  }, []);

  return <ImportMasterData />;
}

export default InternalPage;
