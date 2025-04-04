import Colors from "@/constants/Colors";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "./button";

type props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export function Input({ placeholder, onChangeText, value }: props) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.light.TextInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.light.inputBackground,
    height: 54,
    flex: 1,
    padding: 20,
    color: Colors.dark.text,
    borderRadius: 7,
    alignItems: "center",
  },
});
