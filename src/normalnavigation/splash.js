import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Main");
    }, 1000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}> ASSIGNMENT</Text>
    </View>
  );
};

export default Splash;

//This is the starting screen in which i have added a normal text i.e ASSIGNMENT and by the hellp of useEffect within 1sec through navigation we can navigate to our next screen i.e main.js........

