import { ItemList } from "../components/ItemList";

export interface ListItemsContextType {
  listItemsData: ItemList[];
  addItem: (data: ItemList) => void;
  deleteItem: (data: number) => void;
  setItem: (data: ItemList) => void;
}
