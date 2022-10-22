import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../config/colors";
import { adresseIp } from "../config/constants";
import { useIsFocused } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const infoURL =
  "https://" + adresseIp + "/index.php?route=api/custom/infoOrder";
const inURL = "https://" + adresseIp + "/index.php?route=api/custom/inOrder";

function OrderDetails({ route, navigation }) {
  const { orderIdRoute } = route.params;
  const [isLoading, setLoading] = React.useState(true);
  const [infos, setInfos] = React.useState([]);
  const [order, setOrder] = React.useState([]);
  const isFocused = useIsFocused();

  function fetchInfoOrder() {
    fetch(infoURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: orderIdRoute,
      }),
    })
      .then((response) => response.json())
      .then((json) => setInfos(json.infos))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  function fetchOrder() {
    fetch(inURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: orderIdRoute,
      }),
    })
      .then((response) => response.json())
      .then((json) => setOrder(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  React.useEffect(() => {
    fetchInfoOrder();
    fetchOrder();
  }, [isFocused]);
  return (
    <>
      {order.map((item1, index) => (
        <View key={index} style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: windowHeight }}
          >
            <View style={styles.header}>
              <Icon
                name="arrow-back"
                size={28}
                color={"white"}
                onPress={() => navigation.goBack()}
                style={{ flex: 0.2 }}
              />
              <Text style={styles.headerText}>تفاصيل الطلب</Text>
              <View style={{ flex: 0.2 }}></View>
            </View>
            <View
              style={{
                height: 50,
                backgroundColor: COLORS.primary,
                borderBottomRightRadius: 100,
                borderBottomLeftRadius: 100,
              }}
            ></View>
            <View
              style={{
                height: 100,
                width: windowWidth - 50,
                marginHorizontal: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginTop: -50,
                marginBottom: 5,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                }}
              >
                <View>
                  <Text style={{ fontSize: 20, textAlign: "right" }}>
                    معرف الطلب : {item1.order_id}
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "right" }}>
                    {item1.date_added}
                  </Text>
                </View>
                <TouchableOpacity>
                  <FontAwesome5
                    name="check-circle"
                    color={COLORS.primary}
                    size={40}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                height: 50,
                width: windowWidth - 50,
                marginHorizontal: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 20 }}>حالة الطلب :</Text>
                </View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, color: COLORS.primary }}>
                    {item1.name}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 15,
                width: windowWidth - 50,
                marginHorizontal: 25,
                backgroundColor: "white",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 20, textAlign: "right" }}>
                    عنوان الشحن :
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "right",
                      marginTop: 5,
                      marginRight: 12,
                    }}
                  >
                    {item1.shipping_address_1}
                  </Text>
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <View style={{ width: "80%" }}>
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: "right",
                          marginTop: 5,
                          marginRight: 12,
                        }}
                      >
                        {item1.shipping_firstname +
                          " " +
                          item1.shipping_lastname}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: "right",
                          marginTop: 5,
                          marginRight: 12,
                        }}
                      >
                        {item1.shipping_city + ", " + item1.shipping_postcode}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: "right",
                          marginTop: 5,
                          marginRight: 12,
                        }}
                      >
                        {item1.shipping_zone + ", " + item1.shipping_country}
                      </Text>
                    </View>
                    <Entypo
                      name="location"
                      color={COLORS.primary}
                      size={60}
                      style={{ paddingVertical: 8 }}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 50,
                width: windowWidth - 50,
                marginHorizontal: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 20 }}>طريقة الدفع :</Text>
                </View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, color: COLORS.primary }}>
                    {item1.payment_method}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: windowWidth - 50,
                marginHorizontal: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 15,
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}
            >
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    fontWeight: "bold",
                    paddingVertical: 6,
                  }}
                >
                  مشترياتي
                </Text>
              </View>
              {infos.map((item, index) => (
                <View
                  key={index}
                  style={{
                    width: "100%",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    alignItems: "center",
                    marginVertical: 8,
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: "black" }}>
                      {item.quantity} X
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View
              style={{
                height: 50,
                width: windowWidth - 50,
                marginHorizontal: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
                marginBottom: 50,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 20 }}>تكلفة الطلب :</Text>
                </View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, color: COLORS.primary }}>
                    {item1.total} ريال
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      ))}
    </>
  );
}

export default OrderDetails;
const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  header: {
    flex: 1,
    width: windowWidth,
    height: windowHeight / 6,
    flexDirection: "row",
    paddingTop: 15 + StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    alignContent: "space-between",
  },
  headerText: {
    flex: 0.6,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
