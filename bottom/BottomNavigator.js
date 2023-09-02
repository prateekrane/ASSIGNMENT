import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Points from "./Points";
import Discount from "./Discount";
import Services from "./Service";
import History from "./HIstory";
import Icon from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Bottom = createBottomTabNavigator();
const deviceWidth = Dimensions.get("window").width;

const BottomNavigator = ({ navigation }) => {
  return (
    <Bottom.Navigator initialRouteName="Discounts">
      <Bottom.Screen
        name="Points"
        component={Points}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => {
            return <Entypo name="wallet" size={30} color="black" />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <Bottom.Screen
        name="Discounts"
        component={Discount}
        options={{
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: () => {
            return <AntDesign name="tags" size={30} color="black" />;
          },

          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  marginRight: deviceWidth / 90,
                }}
              >
                <Icon
                  name="bell"
                  size={20}
                  style={{ color: "#454545", marginRight: deviceWidth / 15 }}
                />
              </View>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <Icon
                name="bars"
                size={25}
                style={{ color: "#454545", marginLeft: deviceWidth / 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Bottom.Screen
        name="Services"
        component={Services}
        options={{
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="hand-extended"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="History"
        component={History}
        options={{
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: () => {
            return <FontAwesome name="history" size={24} color="black" />;
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

//Here i have include all the bottom functionality i.e given in the assignment i.e Discount, Points,Services,History.
