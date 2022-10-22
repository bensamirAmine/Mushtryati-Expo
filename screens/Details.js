import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Share,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../config/colors";
import { adresseIp } from "../config/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const addToCartURL =
  "https://" + adresseIp + "/index.php?route=api/custom/addCart";
const imagesURL =
  "https://" + adresseIp + "/index.php?route=api/custom/fetchImages";
const linkShareURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getProductUrl";

function Details({ route, navigation }) {
  const datainit = { success: false };
  const [isLoading, setLoading] = React.useState(true);
  const [response1, setResponse1] = React.useState(datainit);
  const [images, setImages] = React.useState([]);

  const {
    itemId,
    title,
    description,
    price,
    imageUri,
    model,
    weight,
    disponible,
    quantity,
  } = route.params;
  const products = [
    {
      id: itemId,
      qt: 1,
    },
  ];
  const [connectedUser, setConnectedUser] = React.useState(-1);
  const [qt, setQt] = React.useState(1);
  const [myCartList, setMyCartList] = React.useState(products);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [linkToShare, setLinkToShare] = React.useState(
    "https://mushtryati.com"
  );
  console.log(disponible);
  console.log(quantity);
  const createTwoButtonAlert = () =>
    Alert.alert("", "تم إضافة المنتوج إلى السلة", [
      {
        text: "تابع",
        onPress: () => console.log("تابع"),
        style: "cancel",
      },
      { text: "إنهاء الطلب", onPress: () => navigation.navigate("MyCart") },
    ]);

  React.useEffect(() => {
    fetchImages();
    getLinkToShare();
    getData();
    getData();
  }, [myCartList, linkToShare]);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: linkToShare,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  async function getLinkToShare() {
    try {
      await fetch(linkShareURL, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: itemId,
        }),
      })
        .then((response) => response.json())
        .then((json) => setLinkToShare(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } catch (e) {
      console.log(e);
    }
  }
  console.log("item id = " + itemId);
  async function fetchImages() {
    try {
      await fetch(imagesURL, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: itemId,
        }),
      })
        .then((response) => response.json())
        .then((json) => setImages(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } catch (e) {
      console.log(e);
    }
  }

  async function addToCart() {
    try {
      await fetch(addToCartURL, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: connectedUser,
          productId: itemId,
          qt: myCartList[0].qt,
        }),
      })
        .then((response) => response.json())
        .then((json) => setResponse1(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } catch (e) {
      console.log(e);
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        const user = JSON.parse(value);
        setConnectedUser(user.id);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  function updateQt(newQt, id) {
    if (newQt > 0) {
      const newMyCartList = myCartList.map((cl) =>
        cl.id === id ? { ...cl, qt: newQt } : cl
      );
      setMyCartList(newMyCartList);
    }
  }
  function addtocartalert() {
    addToCart();
    createTwoButtonAlert();
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
          />
          <TouchableOpacity
            onPress={() =>
              isLoggedIn
                ? navigation.navigate("MyCart")
                : navigation.navigate("Login")
            }
          >
            <Icon name="shopping-cart" size={28} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: imageUri,
              }}
              style={styles.productImage}
            />
          </View>
          {images.map((item, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image
                source={{
                  uri: item.imageUri,
                }}
                style={styles.productImage}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={styles.line} />
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "bold", marginHorizontal: 15 }}
            >
              {title}
            </Text>
          </View>
          <View style={{ marginTop: 10, marginRight: 10 }}>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", flex: 2 }}>
                المواصفات :
              </Text>
              <TouchableOpacity style={styles.priceTag}>
                <Text
                  style={{
                    paddingRight: 15,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                    flexDirection: "row",
                  }}
                >
                  {price}
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "grey",
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}
            >
              {description}
            </Text>

            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", paddingTop: 15 }}
              >
                الموديل :
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 16,
                  lineHeight: 22,
                  textAlign: "right",
                }}
              >
                {model}
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", paddingTop: 15 }}
              >
                الوزن :
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 16,
                  lineHeight: 22,
                }}
              >
                {parseFloat(weight).toFixed(2)} كلغ
              </Text>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                marginBottom: 15,
              }}
            >
              {myCartList.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row-reverse",

                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  {quantity > 0 && (
                    <>
                      <TouchableOpacity
                        style={{
                          width: 40,
                          height: 41,
                          borderRadius: 5,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary,
                          borderColor: "white",
                        }}
                        onPress={() => updateQt(item.qt + 1, item.id)}
                      >
                        <Text
                          style={{
                            fontSize: 30,
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
                          fontSize: 25,
                        }}
                      >
                        {item.qt}
                      </Text>
                      <TouchableOpacity
                        style={{
                          width: 40,
                          height: 41,
                          borderRadius: 5,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary,
                          borderColor: "white",
                        }}
                        onPress={() => updateQt(item.qt - 1, item.id)}
                      >
                        <Text
                          style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          -
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              ))}
              {quantity > 0 ? (
                <TouchableOpacity
                  style={styles.buyBtn}
                  onPress={() =>
                    isLoggedIn ? addtocartalert() : navigation.navigate("Login")
                  }
                >
                  <Ionicons
                    style={{
                      marginRight: 1,
                      marginLeft: 5,
                    }}
                    name="cart-outline"
                    size={23}
                    color={"white"}
                  />
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    اضافة للسلة
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.disabledBtn}>
                  <Text
                    style={{
                      color: "red",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    غير متوفر
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  paddingRight: 5,
                  backgroundColor: COLORS.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                }}
                onPress={() => onShare()}
              >
                <Ionicons
                  style={{
                    marginRight: 1,
                    marginLeft: 5,
                  }}
                  name="share-social-sharp"
                  size={23}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginHorizontal: 15,
  },
  imageContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "#ededed",
    //dcdcdc
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,

    paddingTop: 30,
    marginHorizontal: 0,
    paddingHorizontal: 5,
  },
  line: {
    flex: 1,
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 50,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 30 },
  buyBtn: {
    flex: 0.8,
    width: 150,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row-reverse",
    marginHorizontal: -10,
  },
  disabledBtn: {
    flex: 0.8,
    width: 150,
    height: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row-reverse",
    marginHorizontal: -10,
  },
  priceTag: {
    flex: 1,
    backgroundColor: COLORS.primary,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  productImage: {
    flex: 1,
    width: windowWidth,
    height: windowWidth,
    resizeMode: "contain",
  },
});
