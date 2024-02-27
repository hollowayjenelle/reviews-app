import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewsDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Review Details" component={ReviewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
