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
import { COLORS } from "../config/colors";
import { adresseIp } from "../config/constants";
import { useIsFocused } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const addressesURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getAddresse";
const addOrderURL =
  "https://" + adresseIp + "/index.php?route=api/custom/addOrder";

function AddOrder({ route, navigation }) {
  const [connectedUser, setConnectedUser] = React.useState(-1);
  const { totalRoute, weightTotal, products } = route.params;
  const [isLoading, setLoading] = React.useState(true);
  const [addresses, setAddresses] = React.useState([]); 
  const isFocused = useIsFocused();
  const [checked, setChecked] = React.useState("تكلفة الشحن - 15ريال");
  const [selectedAddresse, setSelectedAddresse] = React.useState(0);
  const [verif, setVerif] = React.useState("");
  const [connectedMail, setConnectedMail] = React.useState("");
  const [connectedName, setConnectedName] = React.useState("");
  const [orderId, setOrderId] = React.useState(-1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    React.useState("الدفع عند الاستلام");
  const [info, setInfos] = React.useState("");

  const lastTotale = totalRoute + 17 + 15 + totalRoute * 0.15;
  const contactURL =
    "https://" + adresseIp + "/index.php?route=api/custom/conhtactMush1";
  function sendMail(id) {
    fetchContact(id);
  }
  function fetchContact(id) {
    let currentDate = new Date().toJSON().slice(0, 10);
    fetch(contactURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "mohamedamine.bensamir@esprit.tn",
        from: "bensamir97@gmail.com",
        subject: id+" مشترياتي - الطّلب ",
        id: id,
        products: products,
        orderDate: currentDate,
        situation: "معلّق",
        total: totalRoute,
        shipping: weightTotal,
        vat: totalRoute * 0.15,
        final: totalRoute + 17 + 15 + totalRoute * 0.15
      }),
    })
      .then((response) => response.json())
      .then((json) => setInfos(json.infos))
      .catch((error) => console.error(error))
      .finally(() => navigation.navigate("Thank"));
  }

  function fetchAddresses() {
    fetch(addressesURL, {
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
      .then((json) => setAddresses(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function fetchAddOrder() {
    fetch(addOrderURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: connectedUser,
        addresseId: selectedAddresse,
        payment_method: selectedPaymentMethod,
        total: lastTotale,
      }),
    })
      .then((response) => response.json())
      .then((json) => sendMail(json))
      .catch((error) => console.error(error));
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        const user = JSON.parse(value);
        setConnectedUser(user.id);
        setConnectedMail(user.email);
        setConnectedName(user.firstname);
      } else {
        console.log("null");
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    
    getData();
    fetchAddresses();
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
          <Text style={styles.headerText}>إنهاء الطلب</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>
        <View
          style={{
            height: 250,
            backgroundColor: "white",
            marginTop: 10,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              height: 60,
              backgroundColor: COLORS.primary,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              alignItems: "center",
              alignContent: "center",
              flexDirection: "row-reverse",
            }}
          >
            <FontAwesome5
              name="location-arrow"
              size={20}
              color={"white"}
              style={{ marginRight: 22, marginLeft: 15 }}
            ></FontAwesome5>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              عنوان الشحن
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addbook}
            onPress={() => navigation.navigate("AddAddress")}
          >
            <Ionicons
              style={{
                marginRight: 1,
                marginLeft: 5,
              }}
              name="add-circle"
              size={30}
              color={"black"}
            />
            <Text style={{ color: "black", fontSize: 19, fontWeight: "bold" }}>
              إضافة عنوان جديد
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 22,
              marginTop: 18,
            }}
          >
            عناوين مسجلة مسبقاً
          </Text>
          <View
            style={{
              marginTop: 18,
              height: 50,
              fontSize: 18,
              flex: 0.6,
              textAlign: "right",
              borderColor: "black",
              borderWidth: 0.5,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <Picker
              selectedValue={selectedAddresse}
              style={{
                width: window.innerWidth,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedAddresse(itemValue)
              }
            >
              <Picker.Item label={"إختر عنوانا"} value={0} />
              {addresses?.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={
                    item.addresse.firstname +
                    " " +
                    item.addresse.lastname +
                    ", " +
                    item.addresse.address_1 +
                    ", " +
                    item.addresse.city +
                    ", " +
                    item.zone.name +
                    ", " +
                    item.country.name
                  }
                  value={item.addresse.address_id}
                />
              ))}
            </Picker>
            <Text style={{ color: "red" }}>{verif}</Text>
          </View>
        </View>

        <View
          style={{
            height: 140,
            backgroundColor: "white",
            marginTop: 10,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              height: 60,
              backgroundColor: COLORS.primary,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              alignItems: "center",
              alignContent: "center",
              flexDirection: "row-reverse",
            }}
          >
            <FontAwesome5
              name="shipping-fast"
              size={22}
              color={"white"}
              style={{ marginRight: 22, marginLeft: 15 }}
            ></FontAwesome5>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              طريقة الشحن
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "black",
              }}
            >
              تكلفة الشحن - {weightTotal}ريال
            </Text>
            <RadioButton
              value="تكلفة الشحن - 15ريال"
              status={
                checked === "تكلفة الشحن - 15ريال" ? "checked" : "unchecked"
              }
              onPress={() => setChecked("تكلفة الشحن - 15ريال")}
            />
          </View>
        </View>

        <View
          style={{
            height: 140,
            backgroundColor: "white",
            marginTop: 10,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              height: 60,
              backgroundColor: COLORS.primary,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              alignItems: "center",
              alignContent: "center",
              flexDirection: "row-reverse",
            }}
          >
            <FontAwesome5
              name="credit-card"
              size={22}
              color={"white"}
              style={{ marginRight: 22, marginLeft: 15 }}
            ></FontAwesome5>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              طريقة الدفع
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "black",
              }}
            >
              الدفع عند الاستلام
            </Text>
            <RadioButton
              value="تكلفة الشحن - 15ريال"
              status={
                checked === "تكلفة الشحن - 15ريال" ? "checked" : "unchecked"
              }
              onPress={() => setChecked("تكلفة الشحن - 15ريال")}
            />
          </View>
        </View>
        <View
          style={{
            height: 240,
            backgroundColor: "white",
            marginTop: 10,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>الاجمالي:</Text>
            <Text style={{ fontSize: 20 }}>{totalRoute}ريال</Text>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>تكلفة الدفع عند الاستلام:</Text>
            <Text style={{ fontSize: 20 }}>17ريال</Text>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>تكلفة الشحن:</Text>
            <Text style={{ fontSize: 20 }}>15ريال</Text>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>VAT (15%):</Text>
            <Text style={{ fontSize: 20 }}>{totalRoute * 0.15}ريال</Text>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>الاجمالي النهائي:</Text>
            <Text style={{ fontSize: 20 }}>
              {totalRoute + 17 + 15 + totalRoute * 0.15}ريال
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>{console.log("myCartList =>",products);}}>
          <Text> console</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() =>
            selectedAddresse != ""
              ? fetchAddOrder()
              : setVerif("الرجاء اختيار عنوان")
          }
        >
          <FontAwesome5
            name="credit-card"
            size={22}
            color={"white"}
            style={{ marginLeft: 10 }}
          ></FontAwesome5>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            إنهاء الطلب
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddOrder;

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
  },
  headerText: {
    flex: 0.6,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  addbook: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    marginTop: 15,
  },
  buyBtn: {
    marginTop: 20,
    marginBottom: 100,
    marginHorizontal: 8,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row-reverse",
  },
});
