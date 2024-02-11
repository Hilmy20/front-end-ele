import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Meeting from "../../features/Meeting";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Meeting" }));
  }, []);

  return <Meeting />;
}

export default InternalPage;
