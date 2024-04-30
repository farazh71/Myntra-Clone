import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";
const Fetchitem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (fetchStatus.fetchDone) return;
    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingEnded());
        dispatch(itemAction.addInitialItems(data.items));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    return () => {
      // controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};
export default Fetchitem;
