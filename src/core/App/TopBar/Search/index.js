import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toPeople } from "../../../../common/routes";
import { Input, SearchIcon, Label } from "./styled";
import { useOnSearchInputChange } from "./useOnSearchInputChange";

export const Search = () => {
  const location = useLocation();

  const queryInUrl = new URLSearchParams(location.search).get("query") || "";

  const [inputValue, setInputValue] = useState(queryInUrl);

  useEffect(() => {
    setInputValue(queryInUrl);
  }, [queryInUrl]);

  const onSearchInputChange = useOnSearchInputChange(setInputValue);

  const isSearchForPeople = location.pathname.startsWith(toPeople());

  return (
    <Label>
      <SearchIcon />
      <Input
        value={inputValue}
        placeholder={`Search for ${isSearchForPeople ? "people" : "movies"}...`}
        onChange={({ target: { value } }) =>
          onSearchInputChange({ newValue: value, isSearchForPeople })
        }
      />
    </Label>
  );
};
