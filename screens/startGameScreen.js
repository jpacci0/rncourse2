import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import PrimaryButton from "../components/ui/primaryButton";
import { useState } from "react";

export default function StartGameScreen({ onStartGame }) {
  const [enteredValue, setEnteredValue] = useState("");

  function numberInputHandler(inputText) {
    setEnteredValue(inputText);
  }

  function resetInputHandler() {
    setEnteredValue("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    onStartGame(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.numberInput}
        onChangeText={numberInputHandler}
        value={enteredValue}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5, // Android only
    shadowColor: "#000", // iOS only
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "#72063c",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
