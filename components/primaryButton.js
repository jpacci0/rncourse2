import { StyleSheet, View, Text, Pressable } from "react-native";

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
    backgroundColor: "#ddb52f",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#72063c",
    fontSize: 18,
    fontWeight: "bold",
  },
});
