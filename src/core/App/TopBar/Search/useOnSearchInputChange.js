import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { buildQueryString } from "../../../../common/bothPageTypes/buildQueryString";
import { toMovies, toPeople } from "../../../../common/routes";

const SEARCH_DELAY = 500;

export const useOnSearchInputChange = (setInputValue) => {
  const timeoutRef = useRef();
  const navigate = useNavigate();

  return ({ newValue, isSearchForPeople }) => {
    clearTimeout(timeoutRef.current);
    setInputValue(newValue);

    timeoutRef.current = setTimeout(() => {
      navigate({
        pathname: isSearchForPeople ? toPeople() : toMovies(),
        search: buildQueryString({ query: newValue || undefined }),
      });
    }, SEARCH_DELAY);
  };
};
