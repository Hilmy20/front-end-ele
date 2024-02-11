import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import StatusPeserta from "../../features/StatusPeserta/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "StatusPeserta" }));
  }, []);

  return <StatusPeserta />;
}

export default InternalPage;
