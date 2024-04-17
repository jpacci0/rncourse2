import { View, Text, StyleSheet } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
