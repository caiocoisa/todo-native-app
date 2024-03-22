import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, IconButton, List, MD3Colors, Text } from "react-native-paper";
import { ItemList } from "./ItemList";

interface ListItemsProps {
  subheader: string;
  data: ItemList[];
}

export const ListItems = (props: ListItemsProps) => {
  return (
    <List.Section style={styles.container}>
      {props.data &&
        props.data.map((item, index) => <ItemList key={index} {...item} />)}
    </List.Section>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    gap: 5,
  },
});
