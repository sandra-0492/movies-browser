import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export function useFetchDataOnLocationSearchChange({ fetchAction }) {
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    if (!fetchAction) return;

    const urlSearchParams = new URLSearchParams(search);

    const query = urlSearchParams.get("query") || "";

    const pageParam = Number(urlSearchParams.get("page"));
    const page = pageParam > 0 ? pageParam : 1;

    dispatch(
      fetchAction({
        query,
        page,
      })
    );
  }, [dispatch, fetchAction, search]);
}
