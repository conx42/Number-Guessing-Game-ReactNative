import { StyleSheet, Text, View } from "react-native";

export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>

      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>
        <Text>LOG Rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
