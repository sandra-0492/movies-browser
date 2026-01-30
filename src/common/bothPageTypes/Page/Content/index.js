import { Loader } from "./Loader";
import { Error } from "./Error";

export const Content = ({ status, children }) => {
  switch (status) {
    case "loading":
      return <Loader />;

    case "error":
      return <Error />;

    case "success":
      return children;

    case "initial":
      return null;

    default:
      throw new Error("incorrect status");
  }
};
