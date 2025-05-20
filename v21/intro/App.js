import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(Math.round(Math.random() * 100));

  const boxStyle = { ...styles.box, height: styles.box.height + count };

  return (
    <View style={styles.container}>
      <View style={[boxStyle, styles.blue]}></View>
      <View style={[boxStyle, styles.red]}></View>

      <Button onPress={() => setCount(count + 1)} title="Click" />
      <Text>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 200,
  },
  blue: {
    backgroundColor: "blue",
  },
  red: {
    backgroundColor: "red",
  },
});
