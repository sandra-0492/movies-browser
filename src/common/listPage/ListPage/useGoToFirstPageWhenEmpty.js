import { useGoToPage } from "./useGoToPage";

const { useEffect } = require("react");

export const useGoToFirstPageWhenResultsEmpty = ({ status, results, page }) => {
  const goToPage = useGoToPage();

  useEffect(() => {
    if (status === "success" && results.length === 0 && page !== 1) {
      goToPage(1);
    }
  }, [status, results, page, goToPage]);
};
