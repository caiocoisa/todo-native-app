import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, Button } from "react-native-paper";

export const Header = () => {
  return (
    <Appbar.Header statusBarHeight={105} mode="center-aligned" elevated={true}>
      <Appbar.Content title="Header" />
      <Appbar.Action icon="plus" onPress={() => {}} />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
  container: {
    color: "#FFAB22",
  },
});
