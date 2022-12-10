import React from "react";

import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/Navigation";

import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
import AuthContextProvider from "./src/context/AuthContext";

Amplify.configure({ ...config, Analytics: { disabled: true } });

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
      <StatusBar barStyle={isDarkMode ? "light" : "dark"} />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
