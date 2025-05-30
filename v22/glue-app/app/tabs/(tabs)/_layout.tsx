import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function myFunc(text: string) {
  console.log(text);
}

myFunc("hej");

interface Person {
  name: string;
  age: number;
}

function myFunc2(person: Person) {
  console.log(person.name);
  console.log(person.age);
}

myFunc2({ name: "David", age: 24 });

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Expo V3",
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />

      <Tabs.Screen
        name="tab1"
        options={{
          title: "Tab 1",
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "Tab 2",
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
