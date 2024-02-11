import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import MenuUjian from "../../features/MenuUjian";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "MenuUjian" }));
  }, []);

  return <MenuUjian />;
}

export default InternalPage;
