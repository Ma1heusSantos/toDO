import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

type props = {
  text: string;
  onPressCompleted: () => void;
  onPressRemove: () => void;
};

export function TaskItem({ text, onPressRemove, onPressCompleted }: props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressCompleted}>
        <Image
          style={styles.img}
          source={require("@/assets/images/radio.png")}
        />
      </TouchableOpacity>

      <Text style={[styles.text]}>{text}</Text>

      <TouchableOpacity onPress={onPressRemove}>
        <Image source={require("@/assets/images/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light.inputBackground,
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: "#E5E5E5",
    fontSize: 14,
  },
  img: {
    width: 24,
    height: 24,
  },
  // textChecked: {
  //   textDecorationLine: 'line-through',
  //   color: 'gray',
  // },
});
