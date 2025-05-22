import * as React from "react";
import { View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

export default function DetailsScreen2() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen2</Text>

      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button>
    </View>
  );
}
