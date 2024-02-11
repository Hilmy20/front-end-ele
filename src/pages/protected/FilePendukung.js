import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import FilePendukung from "../../features/FilePendukung/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "FilePendukung" }));
  }, []);

  return <FilePendukung />;
}

export default InternalPage;
