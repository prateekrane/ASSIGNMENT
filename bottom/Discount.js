import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { ScrollView } from "react-native-gesture-handler";

const deviceWidth = Dimensions.get("window").width;
const Discount = function ({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.uppercontainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <View style={styles.btnouter}>
                <Text style={styles.btn}>Category 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnouter}>
                <Text style={styles.btn}>Category 2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnouter}>
                <Text style={styles.btn}>Category 3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnouter}>
                <Text style={styles.btn}>Category 4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnouter}>
                <Text style={styles.btn}>Category 5</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View>
        <ScrollView>
          <View style={styles.boxes}>
            <View style={styles.box}>
              <View style={styles.innerBox}>
                <Image
                  source={require("../assets/fries.jpg")}
                  style={{
                    height: deviceWidth / 2.8,
                    width: deviceWidth / 2.4,
                    borderRadius: 7,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  //   backgroundColor: "green",
                }}
              >
                <Text style={styles.offertxt}>MAX BUY!!</Text>
                <Text style={styles.pertxt}>30% OFF</Text>
                <TouchableOpacity onPress={() => navigation.navigate("MaxBuy")}>
                  <View style={styles.offercontainer}>
                    <Text style={{ fontSize: 18 }}>View Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.innerBox}>
                <Image
                  source={require("../assets/pizza.jpeg")}
                  style={{
                    height: deviceWidth / 2.8,
                    width: deviceWidth / 2.4,
                    borderRadius: 7,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  //   backgroundColor: "green",
                }}
              >
                <Text style={styles.offertxt}>SOLID DEAL!!</Text>
                <Text style={styles.pertxt}>40% OFF</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SolidDeal")}
                >
                  <View style={styles.offercontainer}>
                    <Text style={{ fontSize: 18 }}>View Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.innerBox}>
                <Image
                  source={require("../assets/pasta.jpg")}
                  style={{
                    height: deviceWidth / 2.8,
                    width: deviceWidth / 2.4,
                    borderRadius: 7,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  //   backgroundColor: "green",
                }}
              >
                <Text style={styles.offertxt}>MAX MAX!!</Text>
                <Text style={styles.pertxt}>60% OFF</Text>
                <TouchableOpacity onPress={() => navigation.navigate("MaxMax")}>
                  <View style={styles.offercontainer}>
                    <Text style={{ fontSize: 18 }}>View Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.innerBox}>
                <Image
                  source={require("../assets/burger.jpeg")}
                  style={{
                    height: deviceWidth / 2.8,
                    width: deviceWidth / 2.4,
                    borderRadius: 7,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  //   backgroundColor: "green",
                }}
              >
                <Text style={styles.offertxt}>SUPER DEAL!!</Text>
                <Text style={styles.pertxt}>10% OFF</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SuperDeal")}
                >
                  <View style={styles.offercontainer}>
                    <Text style={{ fontSize: 18 }}>View Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.innerBox}>
                <Image
                  source={require("../assets/friedrice.jpg")}
                  style={{
                    height: deviceWidth / 2.8,
                    width: deviceWidth / 2.4,
                    borderRadius: 7,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  //   backgroundColor: "green",
                }}
              >
                <Text style={styles.offertxt}>HYP MAX!!</Text>
                <Text style={styles.pertxt}>75% OFF</Text>
                <TouchableOpacity onPress={() => navigation.navigate("HypMax")}>
                  <View style={styles.offercontainer}>
                    <Text style={{ fontSize: 18 }}>View Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.innerBox}>
                <Image
                  source={require("../assets/noodels.jpg")}
                  style={{
                    height: deviceWidth / 2.8,
                    width: deviceWidth / 2.4,
                    borderRadius: 7,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  //   backgroundColor: "green",
                }}
              >
                <Text style={styles.offertxt}>MAX STUFF!!</Text>
                <Text style={styles.pertxt}>50% OFF</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MaxStuff")}
                >
                  <View style={styles.offercontainer}>
                    <Text style={{ fontSize: 18 }}>View Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.innerBox}>
                <Image
                  source={require("../assets/sandwitch.jpg")}
                  style={{
                    height: deviceWidth / 2.8,
                    width: deviceWidth / 2.4,
                    borderRadius: 7,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Text style={styles.offertxt}>COOL BUY!!</Text>
                <Text style={styles.pertxt}>30% OFF</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CoolBuy")}
                >
                  <View style={styles.offercontainer}>
                    <Text style={{ fontSize: 18 }}>View Offer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ height: deviceWidth / 5 }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  uppercontainer: {
    height: deviceWidth / 7,
    width: "100%",
    backgroundColor: "#cccccc",
    justifyContent: "center",
  },
  btnouter: {
    height: deviceWidth / 8.5,
    width: 100,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#eeeeee",

    margin: deviceWidth / 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 17,
    color: "black",
  },
  boxes: { height: "100%", width: "100%" },
  box: {
    height: deviceWidth / 2.5,
    width: "100%",
    marginTop: deviceWidth / 15,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#6a6a6a",
  },
  offertxt: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: deviceWidth / 32,
    marginTop: deviceWidth / 32,
  },
  pertxt: {
    fontSize: 15,
    fontWeight: "400",
    marginLeft: deviceWidth / 32,
    marginTop: deviceWidth / 100,
  },
  offercontainer: {
    height: deviceWidth / 12,
    width: "40%",
    backgroundColor: "#D4D4D4",
    marginLeft: deviceWidth / 32,
    marginTop: deviceWidth / 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  innerBox: {
    height: 150,
    width: 170,
    borderRadius: 7,
    marginLeft: deviceWidth / 30,
  },
});


//In this i built the UI i.e displayed in the Assignment folder.and i have link almost every button and the linking screen are buil in folder scr and in file normalnavigation.
