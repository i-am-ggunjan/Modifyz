import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";

const Stack = createNativeStackNavigator();

const RoutingNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WELCOME">
          <Stack.Screen
            name="WELCOME"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LOGIN"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SIGN UP"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RoutingNavigation;
