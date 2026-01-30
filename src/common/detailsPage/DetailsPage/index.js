import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Page } from "../../bothPageTypes/Page";
import { useClearDataOnLeave } from "../../bothPageTypes/useClearDataOnLeave";

export const DetailsPage = ({
  statusSelector,
  fetchAction,
  clearAction,
  children,
}) => {
  const status = useSelector(statusSelector);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAction(id));
  }, [dispatch, id, fetchAction]);

  useClearDataOnLeave({ clearAction });

  return <Page status={status}>{children}</Page>;
};
