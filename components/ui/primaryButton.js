import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../costants/color";

export default function PrimaryButton({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
