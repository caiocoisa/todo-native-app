import { ItemList } from '../components/ItemList';

export interface ListItemsContextType {
	listItemsData: ItemList[];
	openModal: boolean;
	addItem: (data: ItemList) => void;
	deleteItem: (data: number) => void;
	setItem: (data: ItemList) => void;
	setOpenModal: (data: boolean) => void;
}
