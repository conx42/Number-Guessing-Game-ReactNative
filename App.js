import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  function pickedNumberHandler(pickedNuber) {
    setUserNumber(pickedNuber);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient
      colors={["#0942bb", "#03bcd4", "#00ffd5"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/iso.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>{/**When we use style in safeAreaView then we ensure that [All the available space - the area that is reserved for the notch] which will be taken care-of automatically is made available for the inner content */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15, // 85% transparent
  },
});
