import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../config/colors";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { adresseIp } from "../config/constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { Picker } from "@react-native-picker/picker";
const productsURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getListProducts";
const filterURL =
  "https://" + adresseIp + "/index.php?route=api/custom/filterProducts";
const categoryURL =
  "https://" + adresseIp + "/index.php?route=api/custom/productsByCat";
function Products({ route, navigation }) {
  const { find, maxprice, minprice, stock, manufacturer, category } =
    route.params;

  const [isLoading, setLoading] = React.useState(true);
  const [playOnce, setPlayOnce] = React.useState(false);
  const [isLoadingSaleTops, setLoadingSaleTops] = React.useState(true);
  const [productsFromDB, setProductsFromDB] = React.useState([]);
  const [productsFromFilter, setProductsFromFilter] = React.useState([]);
  const [newFilter, setNewFilter] = React.useState([
    "الافتراضي",
    "الإسم من أ - ي",
    "حسب السعر (منخفض > مرتفع)",
  ]);
  const [selectedFilter, setSelectedFilter] = React.useState("الافتراضي");

  React.useEffect(() => {
    if (find == "filter") {
      fetchFilter();
    } else {
      if (find == "أحدث المنتوجات") {
        fetchLatest();
      } else {
        if (find == "ترشيحاتنا") {
          fetchFeatured();
        } else {
          if (find == "categories" && !playOnce) {
            fetchByCat();
            setPlayOnce(true);
          } else {
            fetchAll();
          }
        }
      }
    }
  }, []);
  function fetchFilter() {
    fetch(filterURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        minprice: minprice,
        maxprice: maxprice,
        manufacturer: manufacturer,
        stock: stock,
      }),
    })
      .then((response) => response.json())
      .then((json) => setProductsFromFilter(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  function fetchByCat() {
    console.log("cat" + category);
    fetch(categoryURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: category,
      }),
    })
      .then((response) => response.json())
      .then((json) => setProductsFromDB(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  function fetchAll() {
    fetch(productsURL)
      .then((response) => response.json())
      .then((json) => setProductsFromDB(json.latests))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  function fetchLatest() {
    fetch(productsURL)
      .then((response) => response.json())
      .then((json) => setProductsFromDB(json.latests))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function fetchFeatured() {
    fetch(productsURL)
      .then((response) => response.json())
      .then((json) => setProductsFromDB(json.saleTops))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
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
          <Text style={styles.headerText}>المنتجات</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>

        <View style={{ flexDirection: "column" }}>
          {isLoading ? (
            <Text>الرجاء الانتظار...</Text>
          ) : (
            <>
              {find != "filter" && (
                <View
                  style={{
                    height: 50,
                    fontSize: 18,
                    flex: 1,
                    marginHorizontal: 35,
                    textAlign: "right",
                    borderColor: "black",
                    borderWidth: 0.5,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Picker
                    selectedValue={selectedFilter}
                    style={{ height: 50, width: window.innerWidth }}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedFilter(itemValue)
                    }
                  >
                    {newFilter?.map((item, index) => (
                      <Picker.Item key={index} label={item} value={item} />
                    ))}
                  </Picker>
                </View>
              )}

              {selectedFilter == "الافتراضي" && (
                <ScrollView showsVerticalScrollIndicator={false}>
                  {find != "filter"
                    ? productsFromDB.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            height: 130,
                            paddingHorizontal: 10,
                            marginVertical: 5,
                            marginHorizontal: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={() => {
                            navigation.navigate("Details", {
                              itemId:
                                find != "categories"
                                  ? item.id
                                  : item.product.product_id,
                              title:
                                find != "categories"
                                  ? item.name
                                  : item.product.name,
                              description:
                                find != "categories"
                                  ? item.description
                                  : item.description,
                              price:
                                find != "categories"
                                  ? item.price.replace(/<[^>]*>?/gm, "")
                                  : item.price.replace(/<[^>]*>?/gm, ""),
                              imageUri:
                                find != "categories"
                                  ? item.image
                                  : item.imageURL,
                              model:
                                find != "categories"
                                  ? item.model
                                  : item.product.model,
                              weight:
                                find != "categories"
                                  ? item.weight
                                  : item.product.weight,
                              quantity:
                                find != "categories"
                                  ? item.qt
                                  : item.product.quantity,
                              disponible:
                                find != "categories"
                                  ? item.qt > 0
                                    ? "متوفر"
                                    : "غير متوفر"
                                  : item.product.quantity > 0
                                  ? "متوفر"
                                  : "غير متوفر",
                            });
                          }}
                        >
                          <Image
                            style={{
                              width: 110,
                              height: 110,
                              resizeMode: "contain",
                            }}
                            source={{
                              uri:
                                find != "categories"
                                  ? item.image
                                  : item.imageURL,
                            }}
                          />

                          <View
                            style={{
                              flex: 1,
                              paddingHorizontal: 15,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: "bold",
                              }}
                              numberOfLines={2}
                            >
                              {find != "categories"
                                ? item.name
                                : item.product.name}
                            </Text>
                            <Text
                              style={{
                                color: "#5B5A5F",
                              }}
                              numberOfLines={2}
                            >
                              {find != "categories"
                                ? item.description
                                : item.description}
                            </Text>

                            <View
                              style={{
                                flexDirection: "row-reverse",
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  fontWeight: "bold",
                                }}
                              >
                                {find != "categories"
                                  ? item.price.replace(/<[^>]*>?/gm, "")
                                  : item.price.replace(/<[^>]*>?/gm, "")}
                              </Text>
                              <Text
                                style={{
                                  backgroundColor:
                                    find != "categories"
                                      ? item.qt > 0
                                        ? COLORS.primary
                                        : "red"
                                      : item.product.quantity > 0
                                      ? COLORS.primary
                                      : "red",

                                  borderRadius: 20,
                                  paddingLeft: 10,
                                  paddingRight: 10,
                                  height: 20,
                                  margin: 5,
                                  color: COLORS.white,
                                }}
                              >
                                {find != "categories"
                                  ? item.qt > 0
                                    ? "متوفر"
                                    : "غير متوفر"
                                  : item.product.quantity > 0
                                  ? "متوفر"
                                  : "غير متوفر"}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      ))
                    : productsFromFilter.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            height: 130,
                            paddingHorizontal: 10,
                            marginVertical: 5,
                            marginHorizontal: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={() => {
                            navigation.navigate("Details", {
                              itemId: item.product.product_id,
                              title: item.product.name,
                              description: item.description,
                              price: item.price.replace(/<[^>]*>?/gm, ""),
                              imageUri: item.imageURL,
                              model: item.product.model,
                              weight: item.product.weight,
                              quantity: item.product.quantity,
                            });
                          }}
                        >
                          <Image
                            style={{
                              width: 110,
                              height: 110,
                              resizeMode: "contain",
                            }}
                            source={{
                              uri: item.imageURL,
                            }}
                          />

                          <View
                            style={{
                              flex: 1,
                              paddingHorizontal: 15,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: "bold",
                              }}
                              numberOfLines={2}
                            >
                              {item.product.name}
                            </Text>
                            <Text
                              style={{
                                color: "#5B5A5F",
                              }}
                              numberOfLines={2}
                            >
                              {item.description}
                            </Text>

                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: "bold",
                              }}
                            >
                              {item.price.replace(/<[^>]*>?/gm, "")}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                </ScrollView>
              )}
              {selectedFilter == "الإسم من أ - ي" && (
                <ScrollView showsVerticalScrollIndicator={false}>
                  {find != "filter"
                    ? productsFromDB
                        .sort(function (a, b) {
                          if (
                            a.product.name.toLowerCase() <
                            b.product.name.toLowerCase()
                          )
                            return -1;
                          if (
                            a.product.name.toLowerCase() >
                            b.product.name.toLowerCase()
                          )
                            return 1;
                          return 0;
                        })
                        // .sort((a, b) =>
                        //   a.product.name.localeCompare(b.product.name)
                        // )
                        .map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{
                              flexDirection: "row",
                              borderRadius: 20,
                              backgroundColor: COLORS.white,
                              height: 130,
                              paddingHorizontal: 10,
                              marginVertical: 5,
                              marginHorizontal: 10,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onPress={() => {
                              navigation.navigate("Details", {
                                itemId:
                                  find != "categories"
                                    ? item.id
                                    : item.product.product_id,
                                title:
                                  find != "categories"
                                    ? item.name
                                    : item.product.name,
                                description:
                                  find != "categories"
                                    ? item.description
                                    : item.description,
                                price:
                                  find != "categories"
                                    ? item.price.replace(/<[^>]*>?/gm, "")
                                    : item.price.replace(/<[^>]*>?/gm, ""),
                                imageUri:
                                  find != "categories"
                                    ? item.image
                                    : item.imageURL,
                                model:
                                  find != "categories"
                                    ? item.model
                                    : item.product.model,
                                weight:
                                  find != "categories"
                                    ? item.weight
                                    : item.product.weight,
                                quantity:
                                  find != "categories"
                                    ? item.qt
                                    : item.product.quantity,
                                disponible:
                                  find != "categories"
                                    ? item.qt > 0
                                      ? "متوفر"
                                      : "غير متوفر"
                                    : item.product.quantity > 0
                                    ? "متوفر"
                                    : "غير متوفر",
                              });
                            }}
                          >
                            <Image
                              style={{
                                width: 110,
                                height: 110,
                                resizeMode: "contain",
                              }}
                              source={{
                                uri:
                                  find != "categories"
                                    ? item.image
                                    : item.imageURL,
                              }}
                            />

                            <View
                              style={{
                                flex: 1,
                                paddingHorizontal: 15,
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 17,
                                  fontWeight: "bold",
                                }}
                                numberOfLines={2}
                              >
                                {find != "categories"
                                  ? item.name
                                  : item.product.name}
                              </Text>
                              <Text
                                style={{
                                  color: "#5B5A5F",
                                }}
                                numberOfLines={2}
                              >
                                {find != "categories"
                                  ? item.description
                                  : item.description}
                              </Text>

                              <View
                                style={{
                                  flexDirection: "row-reverse",
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {find != "categories"
                                    ? item.price.replace(/<[^>]*>?/gm, "")
                                    : item.price.replace(/<[^>]*>?/gm, "")}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      find != "categories"
                                        ? item.qt > 0
                                          ? COLORS.primary
                                          : "red"
                                        : item.product.quantity > 0
                                        ? COLORS.primary
                                        : "red",

                                    borderRadius: 20,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    height: 20,
                                    margin: 5,
                                    color: COLORS.white,
                                  }}
                                >
                                  {find != "categories"
                                    ? item.qt > 0
                                      ? "متوفر"
                                      : "غير متوفر"
                                    : item.product.quantity > 0
                                    ? "متوفر"
                                    : "غير متوفر"}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        ))
                    : productsFromFilter.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            height: 130,
                            paddingHorizontal: 10,
                            marginVertical: 5,
                            marginHorizontal: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={() => {
                            navigation.navigate("Details", {
                              itemId: item.product.product_id,
                              title: item.product.name,
                              description: item.description,
                              price: item.price.replace(/<[^>]*>?/gm, ""),
                              imageUri: item.imageURL,
                              model: item.product.model,
                              weight: item.product.weight,
                              quantity: item.product.quantity,
                            });
                          }}
                        >
                          <Image
                            style={{
                              width: 110,
                              height: 110,
                              resizeMode: "contain",
                            }}
                            source={{
                              uri: item.imageURL,
                            }}
                          />

                          <View
                            style={{
                              flex: 1,
                              paddingHorizontal: 15,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: "bold",
                              }}
                              numberOfLines={2}
                            >
                              {item.product.name}
                            </Text>
                            <Text
                              style={{
                                color: "#5B5A5F",
                              }}
                              numberOfLines={2}
                            >
                              {item.description}
                            </Text>

                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: "bold",
                              }}
                            >
                              {item.price.replace(/<[^>]*>?/gm, "")}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                </ScrollView>
              )}
              {selectedFilter == "حسب السعر (منخفض > مرتفع)" && (
                <ScrollView showsVerticalScrollIndicator={false}>
                  {find != "filter"
                    ? productsFromDB
                        .sort(function (a, b) {
                          if (
                            parseInt(
                              a.price
                                .replace(/<[^>]*>?/gm, "")
                                .replace(",", "")
                                .split("ريال", 1)
                            ) <
                            parseInt(
                              b.price
                                .replace(/<[^>]*>?/gm, "")
                                .replace(",", "")
                                .split("ريال", 1)
                            )
                          )
                            return -1;
                          if (
                            parseInt(
                              a.price
                                .replace(/<[^>]*>?/gm, "")
                                .replace(",", "")
                                .split("ريال", 1)
                            ) >
                            parseInt(
                              b.price
                                .replace(/<[^>]*>?/gm, "")
                                .replace(",", "")
                                .split("ريال", 1)
                            )
                          )
                            return 1;
                          return 0;
                        })
                        .map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{
                              flexDirection: "row",
                              borderRadius: 20,
                              backgroundColor: COLORS.white,
                              height: 130,
                              paddingHorizontal: 10,
                              marginVertical: 5,
                              marginHorizontal: 10,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onPress={() => {
                              navigation.navigate("Details", {
                                itemId:
                                  find != "categories"
                                    ? item.id
                                    : item.product.product_id,
                                title:
                                  find != "categories"
                                    ? item.name
                                    : item.product.name,
                                description:
                                  find != "categories"
                                    ? item.description
                                    : item.description,
                                price:
                                  find != "categories"
                                    ? item.price.replace(/<[^>]*>?/gm, "")
                                    : item.price.replace(/<[^>]*>?/gm, ""),
                                imageUri:
                                  find != "categories"
                                    ? item.image
                                    : item.imageURL,
                                model:
                                  find != "categories"
                                    ? item.model
                                    : item.product.model,
                                weight:
                                  find != "categories"
                                    ? item.weight
                                    : item.product.weight,
                                quantity:
                                  find != "categories"
                                    ? item.qt
                                    : item.product.quantity,
                                disponible:
                                  find != "categories"
                                    ? item.qt > 0
                                      ? "متوفر"
                                      : "غير متوفر"
                                    : item.product.quantity > 0
                                    ? "متوفر"
                                    : "غير متوفر",
                              });
                            }}
                          >
                            <Image
                              style={{
                                width: 110,
                                height: 110,
                                resizeMode: "contain",
                              }}
                              source={{
                                uri:
                                  find != "categories"
                                    ? item.image
                                    : item.imageURL,
                              }}
                            />

                            <View
                              style={{
                                flex: 1,
                                paddingHorizontal: 15,
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 17,
                                  fontWeight: "bold",
                                }}
                                numberOfLines={2}
                              >
                                {find != "categories"
                                  ? item.name
                                  : item.product.name}
                              </Text>
                              <Text
                                style={{
                                  color: "#5B5A5F",
                                }}
                                numberOfLines={2}
                              >
                                {find != "categories"
                                  ? item.description
                                  : item.description}
                              </Text>

                              <View
                                style={{
                                  flexDirection: "row-reverse",
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {find != "categories"
                                    ? item.price.replace(/<[^>]*>?/gm, "")
                                    : item.price.replace(/<[^>]*>?/gm, "")}
                                </Text>
                                <Text
                                  style={{
                                    backgroundColor:
                                      find != "categories"
                                        ? item.qt > 0
                                          ? COLORS.primary
                                          : "red"
                                        : item.product.quantity > 0
                                        ? COLORS.primary
                                        : "red",

                                    borderRadius: 20,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    height: 20,
                                    margin: 5,
                                    color: COLORS.white,
                                  }}
                                >
                                  {find != "categories"
                                    ? item.qt > 0
                                      ? "متوفر"
                                      : "غير متوفر"
                                    : item.product.quantity > 0
                                    ? "متوفر"
                                    : "غير متوفر"}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        ))
                    : productsFromFilter.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{
                            flexDirection: "row",
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            height: 130,
                            paddingHorizontal: 10,
                            marginVertical: 5,
                            marginHorizontal: 10,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={() => {
                            navigation.navigate("Details", {
                              itemId: item.product.product_id,
                              title: item.product.name,
                              description: item.description,
                              price: item.price.replace(/<[^>]*>?/gm, ""),
                              imageUri: item.imageURL,
                              model: item.product.model,
                              weight: item.product.weight,
                              quantity: item.product.quantity,
                            });
                          }}
                        >
                          <Image
                            style={{
                              width: 110,
                              height: 110,
                              resizeMode: "contain",
                            }}
                            source={{
                              uri: item.imageURL,
                            }}
                          />

                          <View
                            style={{
                              flex: 1,
                              paddingHorizontal: 15,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: "bold",
                              }}
                              numberOfLines={2}
                            >
                              {item.product.name}
                            </Text>
                            <Text
                              style={{
                                color: "#5B5A5F",
                              }}
                              numberOfLines={2}
                            >
                              {item.description}
                            </Text>

                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: "bold",
                              }}
                            >
                              {item.price.replace(/<[^>]*>?/gm, "")}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                </ScrollView>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Products;

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
});
