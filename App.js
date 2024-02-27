import React, { useCallback } from "react";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Home onLayout={onLayoutRootView} />;
};

export default App;
