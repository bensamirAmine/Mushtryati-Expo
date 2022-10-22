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
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../config/colors";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Profile(props) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [userName, setUserName] = React.useState("");
  const [userMail, setUserMail] = React.useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        const user = JSON.parse(value);
        console.log(user);
        setUserName(user.firstname + " " + user.lastname);
        setUserMail(user.email);
      } else {
        console.log("null");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("loggedUser");
    } catch (e) {
      // saving error
    }
  };
  function logout() {
    removeData();
    navigation.navigate("Login");
  }
  React.useEffect(() => {
    getData();
  }, [isFocused]);
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
        </View>
        <View style={styles.topView}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
            ></Image>
            <Text style={styles.logotext}>الحساب الشخصي</Text>
          </View>
          <View style={styles.mailnameView}>
            <Text style={styles.nameText}>{userName}</Text>
            <Text style={styles.mailText}>{userMail}</Text>
          </View>
          <View style={styles.favOrderView}>
            <TouchableOpacity
              style={styles.favOrdContainer}
              onPress={() => navigation.navigate("OrderList")}
            >
              <View style={styles.favOrders}>
                <FontAwesome5
                  name="shipping-fast"
                  size={50}
                  color={COLORS.primary}
                ></FontAwesome5>
              </View>
              <Text>طلباتي</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favOrdContainer}
              onPress={() => navigation.navigate("MyCart")}
            >
              <View style={styles.favOrders}>
                <Icon
                  name="shopping-cart"
                  size={60}
                  color={COLORS.primary}
                ></Icon>
              </View>
              <Text>سلتي</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.settingsView}>
          <TouchableOpacity
            style={styles.settings}
            onPress={() => navigation.navigate("AddressBook")}
          >
            <Text style={styles.textSettings}>العناوين المحفوظة</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settings}
            onPress={() => navigation.navigate("UpdateProfile")}
          >
            <Text style={styles.textSettings}>إعدادات الحساب</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settings1}
            onPress={() => navigation.navigate("AboutUs")}
          >
            <Text style={styles.textSettings}>عن مشترياتي</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logout} onPress={() => logout()}>
          <Text style={styles.logoutText}>تسجيل الخروج</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  topView: {
    backgroundColor: "white",
    height: windowHeight / 3,
    width: windowWidth,
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: "contain",
  },
  logotext: {},
  logoContainer: {
    alignItems: "center",
    marginTop: -25,
    flex: 0.45,
  },
  mailnameView: {
    flex: 0.6,
    marginHorizontal: 15,
    borderBottomWidth: 0.3,
    marginTop: 0,
  },
  nameText: {
    fontSize: 25,
    textAlign: "right",
  },
  mailText: {
    fontSize: 15,
    textAlign: "right",
  },
  favOrderView: {
    paddingVertical: 15,
    flexDirection: "row-reverse",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  favOrders: {
    marginHorizontal: 15,
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.primary,
    borderStyle: "dashed",
    marginBottom: 5,
  },
  settingsView: {
    backgroundColor: "white",
    height: windowHeight / 4,
    width: windowWidth,
    flex: 1,
    borderRadius: 30,
    marginVertical: 40,
  },
  settings: {
    height: windowHeight / 12,
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: COLORS.secondary,
  },
  settings1: {
    height: windowHeight / 12,
    justifyContent: "center",
  },
  textSettings: {
    fontSize: 25,
    textAlign: "right",
    marginHorizontal: 20,
  },
  logout: {
    height: windowHeight / 12,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
  },
  logoutText: {
    fontSize: 25,
    textAlign: "center",
    color: "red",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  favOrdContainer: {
    alignItems: "center",
  },
});
