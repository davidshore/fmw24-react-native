import * as React from "react";
import { View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

export default function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.navigate("Details2")}>
        Go to Details2
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo("Home")}>Go to Home</Button>
    </View>
  );
}
