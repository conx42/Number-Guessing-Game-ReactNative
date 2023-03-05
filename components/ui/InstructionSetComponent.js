import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export const InstructionSetComponent = ({ children, style }) => {
  return <Text style={[styles.InstructionSet, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
  InstructionSet: {
    // fontFamily: "Pacifico",
    color: Colors.accent500,
    fontSize: 24,
  },
});
