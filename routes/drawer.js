import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./HomeStack";
import AboutStackNavigator from "./AboutStack";

const drawer = createDrawerNavigator();

const RootDrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="About" component={AboutStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootDrawerNavigation;
