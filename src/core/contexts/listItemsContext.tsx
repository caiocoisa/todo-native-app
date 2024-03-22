import { createContext, useState } from 'react';
import { ListItemsContextType } from '../types/ListItemsContextType';
import { ItemList } from '../components/ItemList';
import { LIST_ITEMS } from '../mock/list';

export const ListItemsContext = createContext({} as ListItemsContextType);

export const ListItemsProvider = ({ children }) => {
	const [listItemsData, setListItemsData] = useState<ItemList[]>(LIST_ITEMS);

	const addItem = (data: ItemList) => {
		setListItemsData([...listItemsData, data]);
	};
	const deleteItem = (id: number) => {
		const newListItemsData = listItemsData.filter((item) => item.id !== id);
		setListItemsData(newListItemsData);
	};
	const setItem = (data: ItemList) => {
		const oldListItemsData = listItemsData.filter(
			(item) => item.id !== data.id
		);
		setListItemsData([...oldListItemsData, data]);
	};
	return (
		<ListItemsContext.Provider
			value={{
				listItemsData,
				addItem,
				deleteItem,
				setItem,
			}}
		>
			{children}
		</ListItemsContext.Provider>
	);
};
