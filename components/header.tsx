import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "@/constants/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/rocket.png")}
        style={styles.img}
      />
      <Text style={styles.to}>to</Text>
      <Text style={styles.do}>do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 173,
    flexDirection: "row",
    backgroundColor: Colors.light.black,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 20,
    height: 32,
  },
  to: {
    color: Colors.light.blue,
    fontSize: 32,
    marginLeft: 10,
  },
  do: {
    color: Colors.light.purpleDark,
    fontSize: 32,
  },
});
