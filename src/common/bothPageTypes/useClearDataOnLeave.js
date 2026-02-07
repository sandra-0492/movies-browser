import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useClearDataOnLeave = ({ clearAction }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (clearAction) {
        dispatch(clearAction());
      }
    };
  }, [dispatch, clearAction]);
};
