import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useCleardataOnLeave = ({ clearAction }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearAction());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
