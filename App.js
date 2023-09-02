import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import RootNavigator from "./src/RootNavigator";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <RootNavigator />
    </View>
  );
};

export default App;


//here we have use RootNavigator , This RootNavigator consist of all the linking of screen.And that we have imported from the location ./src/RootNavigator.........