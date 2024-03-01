import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import About from "../screens/About";

const Drawer = createDrawerNavigator();

const RootDrawerNavigation = () => {
  return (
    <Drawer.Navigator
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
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "GamerInsight", drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ title: "About GamerInsight" }}
      />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigation;
