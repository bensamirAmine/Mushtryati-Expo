import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../config/colors";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { SwipeListView } from "react-native-swipe-list-view";
import { adresseIp } from "../config/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const cartProductsURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getListCart";
const updateCartProductsURL =
  "https://" + adresseIp + "/index.php?route=api/custom/updateCart";
const deleteCartProductsURL =
  "https://" + adresseIp + "/index.php?route=api/custom/deleteCart";
const URL =
  "https://" + adresseIp + "/index.php?route=api/custom/getOneProduct";

const products = [
  {
    id: 0,
    image: require("../assets/images/printer1.png"),
    title: "حبر ليزر اتش بى Q2612A 12A",
    price: 44,
    qt: 1,
    description:
      "Product description some text placeholder for description. Product description some text placeholder for description",
  },
  {
    id: 1,
    image: require("../assets/images/printer2.png"),
    title: "طابعة تصميم ديزاين جيت اتش بى 36 بوصة T830- MFP",
    price: 44,
    qt: 1,
    description:
      "Product description some text placeholder for description. Product description some text placeholder for description",
  },
];
//const newMyCartList = [];

function MyCart({ navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const [tabs, setTabs] = React.useState([]);
  const [weightTotal, setWeightTotal] = React.useState(0);
  const [myCartList, setMyCartList] = React.useState([]);
  const [myQuantity, setQuantity] = React.useState([]);
  const [newMyCartList, setNewMyCartList] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [connectedUser, setConnectedUser] = React.useState(-1);
  const createTwoButtonAlert = (id) =>
    Alert.alert("", "هل ترغب بحذف هذا المنتج ؟", [
      {
        text: "إلغاء",
        onPress: () => console.log("إلغاء"),
        style: "cancel",
      },
      { text: "حذف المنتج", onPress: () => fetchDeleteCartProducts(id) },
    ]);

  /** 
  function updateQt(newQt, id) {
    if (newQt > 0) {
      const newMyCartList = tabs.map((cl) => {
        if (cl.cart_id === id) {
          cl.quantity = newQt;
          tabs.push(cl);
        } else {
          tabs.push(cl);
        }
      });
      setTabs(newMyCartList);
    }
    console.log(tabs);
  }
   */
  /** 
  function test(newQt, id) {
    updateQt(newQt, id);
    updateQt(newQt, id);
    updateQt(newQt, id);
  }
  */

  function updateQttest(newQt, id, productId) {
    fetchOneProduct(productId);
    if (newQt <= myQuantity.quantity && newQt > 0) {
      const nMyCartList = myCartList.map((cl) =>
        cl.cart_id === id ? { ...cl, quantity: newQt } : cl
      );
      setMyCartList(nMyCartList);
    }
  }

  function updateQt(newQt, id) {
    if (newQt > 0) {
      myCartList.map((cl) => {
        if (cl.cart_id == id) {
          cl.quantity = newQt;
          setNewMyCartList(cl);
        }
      });
      setMyCartList(newMyCartList);
      console.log(myCartList);
    }
  }

  function changetotal() {
    let tot = 0;
    const nMyCartList = myCartList.map(
      (cl) => (tot = tot + cl.quantity * cl.price)
    );
    setTotal(tot);
  }

  React.useEffect(() => {
    getData();
    if (isLoading) {
      fetchCartProducts();
    }
    if (myCartList.length === 0) {
      console.log("empty");
    } else {
      console.log("not empty");
    }
    changetotal();
  }, [myCartList]);

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

  function iHaveToUpdate(panierId, productId, newqt) {
    updateQttest(newqt, panierId, productId);
    fetchUpdateCartProducts(panierId, productId, newqt);
  }

  function fetchCartProducts() {
    fetch(cartProductsURL, {
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
      .then((json) => {
        setMyCartList(json);
        let weightTotal1 = 0;
        for (let index = 0; index < json.length; index++) {
          weightTotal1 =
            weightTotal1 +
            parseFloat(json[index].weight * json[index].quantity);
        }
        if (weightTotal1 <= 15) {
          setWeightTotal(15);
        } else {
          setWeightTotal(15 + (parseInt(weightTotal1) - 15) * 3);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function fetchUpdateCartProducts(panierId, productId, qt) {
    fetch(updateCartProductsURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        panierId: panierId,
        productId: productId,
        qt: qt,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  function fetchOneProduct(productId) {
    fetch(URL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then((response) => response.json())
      .then((json) => setQuantity(json))
      .catch((error) => console.error(error))
      .finally(() => console.log(myQuantity));
  }

  function fetchDeleteCartProducts(panierId) {
    fetch(deleteCartProductsURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        panierId: panierId,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => fetchCartProducts());
  }

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
          <Text style={styles.headerText}>سلة الشراء</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>
        {myCartList.length === 0 && (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: windowHeight - 60,
            }}
          >
            <MaterialCommunityIcons name="cart-remove" size={150} />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              سلة الشراء فارغة
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                width: windowWidth - 150,
                backgroundColor: COLORS.secondary,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginTop: 20,
              }}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                الصفحة الرئيسية
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {myCartList.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              marginBottom: 8,
            }}
          >
            <View
              style={{
                height: 160,
                width: windowWidth,
                flex: 1,
                flexDirection: "row-reverse",
              }}
            >
              <Image
                style={{
                  height: 160,
                  resizeMode: "contain",
                  flex: 0.3,
                  marginHorizontal: 10,
                }}
                source={{ uri: item.image }}
              />

              <View
                style={{
                  height: 160,
                  flex: 0.7,
                  paddingVertical: 8,
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "#5B5A5F",
                      fontSize: 20,
                      width: "80%",
                    }}
                    numberOfLines={2}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                    }}
                    onPress={() => createTwoButtonAlert(item.cart_id)}
                  >
                    <IconEntypo name="cross" size={25} color={"#5B5A5F"} />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 8,
                  }}
                >
                  {" "}
                  {(item.price * item.quantity).toFixed(2)} ريال
                </Text>

                <View
                  style={{
                    flexDirection: "row-reverse",
                    marginVertical: 20,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 30,
                      height: 30,
                      borderWidth: 1,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: COLORS.primary,
                      borderColor: "white",
                    }}
                    onPress={() =>
                      iHaveToUpdate(
                        item.cart_id,
                        item.product_id,
                        parseInt(item.quantity) + 1
                      )
                    }
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginHorizontal: 10,
                    }}
                  >
                    {item.quantity}
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 30,
                      height: 30,
                      borderWidth: 1,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: COLORS.primary,
                      borderColor: "white",
                    }}
                    onPress={() =>
                      iHaveToUpdate(
                        item.cart_id,
                        item.product_id,
                        item.quantity - 1
                      )
                    }
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
        {myCartList.length > 0 && (
          <>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                marginTop: 7,
                marginBottom: 15,
                marginHorizontal: 15,
                paddingHorizontal: 15,
                paddingVertical: 25,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                المجموع
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {" "}
                {total.toFixed(2)} ريال
              </Text>
            </View>

            <TouchableOpacity
              style={{
                height: 60,
                width: windowWidth - 50,
                backgroundColor: COLORS.primary,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
              onPress={() => {
                navigation.navigate("AddOrder", {
                  totalRoute: total,
                  weightTotal: weightTotal,
                  products: myCartList
                });
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                انهاء الطلب
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyCart;

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
  line: {
    height: 1,
    width: "95%",
    backgroundColor: "black",
    opacity: 0.3,
    marginVertical: 10,
    alignSelf: "center",
  },
  delUpd: {
    flexDirection: "row",
  },
});
