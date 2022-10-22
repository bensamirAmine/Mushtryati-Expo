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
import HorizontalProductsCard from "../components/HorizontalProductsCard";
import { COLORS } from "../config/colors";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { adresseIp } from "../config/constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const productsURL =
  "https://" + adresseIp + "/index.php?route=api/custom/products1";

function ProductList({ route, navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [playOnce, setPlayOnce] = React.useState(false);

  React.useEffect(() => {
    if (!playOnce) {
      fetchAll();
      setPlayOnce(true);
    }
  }, [products, playOnce]);

  function fetchAll() {
    fetch(productsURL)
      .then((response) => response.json())
      .then((json) => setProducts(json.latests))
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
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              {products.map((item, index) => (
                <HorizontalProductsCard
                  key={index}
                  title={item.name}
                  description={item.description}
                  price={item.price.replace(/<[^>]*>?/gm, "")}
                  imageUri={item.image}
                  id={item.product_id}
                  model={item.model}
                  weight={item.weight}
                  qt={item.qt}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProductList;

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
