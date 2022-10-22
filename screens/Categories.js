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
const categoriesURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getListCategories";
function Categories({ navigation }) {
  const [categoriesFromDB, setCategoriesFromDB] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchAllCategories();
  }, []);

  function fetchAllCategories() {
    fetch(categoriesURL)
      .then((response) => response.json())
      .then((json) => setCategoriesFromDB(json.categories))
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
          <Text style={styles.headerText}>التصنيفات</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>
        {isLoading ? (
          <Text>الرجاء الانتظار...</Text>
        ) : (
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {categoriesFromDB.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: "column",
                  borderRadius: 20,
                  backgroundColor: COLORS.white,
                  height: 200,
                  width: windowWidth / 2 - 14,
                  marginVertical: 10,
                  marginRight: 7,
                  marginLeft: 7,
                  marginHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() =>
                  navigation.navigate("Products", {
                    find: "categories",
                    category: item.id,
                  })
                }
              >
                <Image
                  style={{
                    width: 170,
                    height: 130,
                    resizeMode: "contain",
                    marginTop: 8,
                  }}
                  source={{
                    uri: item.image,
                  }}
                />

                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Categories;

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
});
