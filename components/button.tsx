import Colors from "@/constants/Colors";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

type props = {
  onPress: () => void;
};

export function Button({ onPress }: props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.button}
    >
      <Image
        source={require("@/assets/images/button.png")}
        style={styles.img}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 52,
    height: 52,
    backgroundColor: Colors.light.blueDark,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 16,
    height: 16,
  },
});
