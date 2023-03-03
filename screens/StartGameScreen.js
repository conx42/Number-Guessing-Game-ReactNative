import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#1518a7",
    borderRadius: 8,
    // Adding shadow
    //-->for android
    elevation: 12, //Android only property
    //-->for IOS
    shadowColor: "black", // IOS only property
    shadowOffset: { width: 0, height: 2 }, // IOS only property, in pixel
    shadowRadius: 6, // IOS only property, in pixel
    shadowOpacity: 0.25, // IOS only property, in pixel
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#2fdd69",
    borderBottomWidth: 2,
    color: "#2f9ddd",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
