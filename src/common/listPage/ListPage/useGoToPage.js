import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { buildQueryString } from "../../bothPageTypes/buildQueryString";

export const useGoToPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (page) => {
      const normalizedPage =
        typeof page === "number" && page > 1 ? page : 1;

      navigate({
        pathname: location.pathname,
        search: buildQueryString(
          { page: normalizedPage === 1 ? undefined : normalizedPage },
          location.search
        ),
      });
    },
    [navigate, location.pathname, location.search]
  );
};
