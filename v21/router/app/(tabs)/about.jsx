import { View, Text, StyleSheet, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function About() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title="Index" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
