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
const orderURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getListOrder";

function OrderList({ navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const [order, setOrder] = React.useState([]);
  const isFocused = useIsFocused();
  const [connectedUser, setConnectedUser] = React.useState(-1);

  function fetchOrder() {
    fetch(orderURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: connectedUser,
      }),
    })
      .then((response) => response.json())
      .then((json) => setOrder(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        const user = JSON.parse(value);
        setConnectedUser(user.id);
      } else {
        console.log("null");
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
    fetchOrder();
  }, [connectedUser, isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: windowHeight }}
      >
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={28}
            onPress={() => navigation.goBack()}
            style={{ flex: 0.2 }}
          />
          <Text style={styles.headerText}>طلباتي</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>
        {order.map((item, index) => (
          <View key={index} style={styles.topView}>
            <View style={styles.mailnameView}>
              <Text style={styles.nameText}>
                معرف الطلب:{" "}
                <Text style={{ fontSize: 18 }}> {item.order_id} </Text>
              </Text>
              <Text style={styles.nameText}>
                تاريخ الطلب:{" "}
                <Text style={{ fontSize: 18 }}> {item.date_added} </Text>
              </Text>
              <Text style={styles.nameText}>
                حالة الطلب:{" "}
                <Text style={{ fontSize: 18, color: "green" }}>
                  {" "}
                  {item.name}
                </Text>
              </Text>
              <View style={styles.delUpd}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("OrderDetails", {
                      orderIdRoute: item.order_id,
                    });
                  }}
                >
                  <Text style={{ color: "#2982E6" }}>تفاصيل</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrderList;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  header: {
    flex: 1,
    width: windowWidth,
    height: 60,
    flexDirection: "row",
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    alignContent: "space-between",
    marginBottom: 8,
  },
  headerText: {
    flex: 0.6,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  topView: {
    backgroundColor: "white",
    height: windowHeight / 5,
    flex: 1,
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 15,
  },
  nameText: {
    fontSize: 20,
    textAlign: "right",
  },
  mailnameView: {
    flex: 0.6,
    padding: 15,
    marginTop: 0,
  },
  delUpd: {
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 10,
  },
});
