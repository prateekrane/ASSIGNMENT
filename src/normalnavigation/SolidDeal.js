import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

const deviceWidth = Dimensions.get("window").width;
const SolidDeal = function () {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.upperView}>
        <ImageBackground
          source={require("../../assets/pizza.jpeg")}
          style={{
            height: deviceWidth >= 361 ? deviceWidth / 1.2 : deviceWidth / 1.7,
            width: "100%",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              marginTop: deviceWidth / 1.7,
              marginLeft: deviceWidth / 20,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={{
                height:
                  deviceWidth >= 361 ? deviceWidth / 5.5 : deviceWidth / 6,
                width: deviceWidth >= 361 ? deviceWidth / 5.5 : deviceWidth / 6,
                marginTop: deviceWidth >= 361 ? null : -90,
              }}
            />
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: deviceWidth >= 361 ? 25 : 20,
                  fontWeight: "500",
                  color: "white",
                  marginLeft: deviceWidth / 38,
                  marginTop: deviceWidth >= 361 ? null : -90,
                }}
              >
                Merchant Name
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.btnouter}>
              <Text style={styles.btn}>Discription</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnouter}>
              <Text style={styles.btn}>Terms</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnouter}>
              <Text style={styles.btn}>Branches</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lwrctn}>
        <View
          style={{
            margin: deviceWidth / 15,
            height: "40%",
            width: "90%",
          }}
        >
          <View>
            <Text style={{ fontSize: 35, fontWeight: "800" }}>40% OFF</Text>
          </View>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "800" }}>
              SOLID DEAL!!
            </Text>
          </View>
          <View style={{ marginTop: deviceWidth / 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>
              On buying 1 large pack of combo Pizza this CODE="HRUOP" give you
              direct 40% OFF on your total price.
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: deviceWidth / 10,
                  width: deviceWidth / 2,
                  backgroundColor: "#bbbbbb",
                  marginTop: deviceWidth / 12,
                  borderRadius: 7,
                }}
              >
                <Text style={{ fontSize: 20 }}>Subscribe</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SolidDeal;

const styles = StyleSheet.create({
  upperView: {
    width: "100%",
    height: deviceWidth / 1.05,
    // backgroundColor: "red",
  },
  btnouter: {
    height: deviceWidth / 8.5,
    width: 100,
    // backgroundColor: "green",

    borderRadius: 7,
    borderBottomWidth: 1,

    marginHorizontal: deviceWidth / 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 17,
    color: "black",
  },
  lwrctn: {
    height: "100%",
    width: "100%",
    marginTop: deviceWidth >= 361 ? null : -90,
  },
});
