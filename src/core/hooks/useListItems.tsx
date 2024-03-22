import { useContext } from "react";
import { ListItemsContext } from "../contexts/listItemsContext";

export const useListItems = () => {
  const listItemsContext = useContext(ListItemsContext);

  return listItemsContext;
};
