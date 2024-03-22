import { ScrollView, StyleSheet, View } from "react-native";
import { ListItems } from "../../core/components";
import { Header } from "../../core/components";
import { useListItems } from "../../core/hooks/useListItems";
import { useState } from "react";
import { Modal, Portal, Text } from "react-native-paper";

export const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const { listItemsData } = useListItems();
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <ListItems subheader="List Items" data={listItemsData} />
      </ScrollView>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    marginTop: 22,
    width: "100%",
    backgroundColor: "#e6e6e6",
  },
  transparent: {
    alignItems: "center",
    backgroundColor: "#0001",
  },
});
