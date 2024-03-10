import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReviewsDetails from "../screens/ReviewDetails";
import RootDrawerNavigation from "./drawer";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
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
          name="Root"
          component={RootDrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Review Details"
          component={ReviewsDetails}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
