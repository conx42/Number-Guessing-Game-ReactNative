import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children }) {
  function presshandler() {
    console.log("Pressed !!!");
  }
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable style={style.buttonInnerContainer} onPress={presshandler} android_ripple={{ color: "#640233" }}>
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',// it will ensure that if any effect or any styling from inside that container would go outside of that container then that will not shown. So, for example if the ripple effect would go outside of this container it will bw clicked and it will not be visible.
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingVertical: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
