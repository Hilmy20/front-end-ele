import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DataLevel from "../../features/DataLevel/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "DataLevel" }));
  }, []);

  return <DataLevel />;
}

export default InternalPage;
