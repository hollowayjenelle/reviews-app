import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";

const Stack = createNativeStackNavigator();

const AboutStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4c2e3c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "nunito-bold",
          },
        }}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About GamerInsight" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AboutStackNavigator;
