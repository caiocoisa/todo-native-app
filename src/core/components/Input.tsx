import React from "react";
import { TextInput } from "react-native-paper";

interface InputProps {
  type: string;
  label: string;
  value: string;
  onChange: (data: string) => void;
}

export const Input = (props: InputProps) => {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      onChangeText={props.onChange}
      mode="outlined"
    />
  );
};
