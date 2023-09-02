import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./normalnavigation/splash";
import Main from "./normalnavigation/main";
import MaxBuy from "./normalnavigation/MaxBuy";
import SolidDeal from "./normalnavigation/SolidDeal";
import MaxMax from "./normalnavigation/MaxMax";
import SuperDeal from "./normalnavigation/SuperDeal";
import HypMax from "./normalnavigation/HypMax";
import MaxStuff from "./normalnavigation/MaxStuff";
import CoolBuy from "./normalnavigation/CoolBuy";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MaxBuy"
          component={MaxBuy}
          options={{
            headerTitleAlign: "center",
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="SolidDeal"
          component={SolidDeal}
          options={{
            headerTitleAlign: "center",
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="MaxMax"
          component={MaxMax}
          options={{
            headerTitleAlign: "center",
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="SuperDeal"
          component={SuperDeal}
          options={{
            headerTitleAlign: "center",
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="HypMax"
          component={HypMax}
          options={{
            headerTitleAlign: "center",
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="MaxStuff"
          component={MaxStuff}
          options={{
            headerTitleAlign: "center",
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="CoolBuy"
          component={CoolBuy}
          options={{
            headerTitleAlign: "center",
            title: "Profile",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

//Here we have install all the dependencies i.e related to navigation like stack , tab , drawer etc...
// we have exported this to app.js file.
