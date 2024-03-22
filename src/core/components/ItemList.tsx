import React from "react";
import { StyleSheet } from "react-native";
import { IconButton, List, MD3Colors, Text } from "react-native-paper";

export interface ItemList {
  id: number;
  title: string;
  description: string;
  status: boolean;
  date: Date;
}

export const ItemList = (item: ItemList, index) => {
  return (
    <List.Item
      key={index}
      title={<Text variant="titleMedium">{item.title}</Text>}
      //description={<Text variant="labelMedium">{item.description}</Text>}
      //left={(_props) => (
      //  <Text style={style.date}>{`${item.date.toLocaleDateString()}`}</Text>
      //)}
      right={(_props) => (
        <IconButton
          icon={item.status ? "check" : "close"}
          iconColor={item.status ? MD3Colors.secondary80 : MD3Colors.error30}
          disabled={!item.status}
          mode="outlined"
          size={20}
          onPress={() => console.log("Pressed: ", _props)}
        />
      )}
      style={item.status ? style.enabled : style.disabled}
    ></List.Item>
  );
};

const style = StyleSheet.create({
  enabled: {
    backgroundColor: MD3Colors.primary50,
  },
  disabled: {
    backgroundColor: MD3Colors.secondary50,
  },
  date: {
    fontSize: 10,
  },
});
