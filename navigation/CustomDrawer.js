import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerStatus,
} from "@react-navigation/drawer";
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";

import { COLORS } from "../config/colors";
import AntIcons from "@expo/vector-icons/AntDesign";

import Home from "../screens/Home";
import Animated from "react-native-reanimated";
import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "flex-end",
        borderRadius: 5,
        marginRight: 15,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          marginRight: 15,
          fontWeight: "bold",
          fontSize: 15,
          color: "white",
        }}
      >
        {label}
      </Text>
      <AntIcons name={icon} color={"white"} size={20} />
    </View>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const [userName, setUserName] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const isFocused = useIsFocused();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        const user = JSON.parse(value);
        setIsLoggedIn(true);
        setUserName(user.firstname + " " + user.lastname);
      } else {
        setIsLoggedIn(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem("loggedUser");
      await AsyncStorage.clear();
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
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        {/*close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.closeDrawer();
            }}
          >
            <AntIcons name="close" color={"white"} size={35} />
          </TouchableOpacity>
        </View>
        {/*Profile */}
        {isLoggedIn && (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: 15,

              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Profile")}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {userName}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                الذهاب إلى حسابي
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <View
          style={{
            flex: 1,
            marginTop: 10,
          }}
        >
          <ScrollView
            vertical
            showsVerticalScrollIndicator={false}
            style={{
              marginBottom: 30,
            }}
          >
            <TouchableOpacity onPress={() => navigation.closeDrawer()}>
              <CustomDrawerItem label="الرئيسية" icon="home" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
              <CustomDrawerItem label="التصنيفات" icon="tago" />
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("ProductList")}
            >
              <CustomDrawerItem label="المنتجات" icon="tago" />
            </TouchableOpacity> */}
            {isLoggedIn && (
              <>
                <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
                  <CustomDrawerItem label="سلة الشراء" icon="shoppingcart" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("OrderList")}
                >
                  <CustomDrawerItem label="طلباتي" icon="profile" />
                </TouchableOpacity>
              </>
            )}
            <View
              style={{
                height: 1,
                marginLeft: 15,
                marginVertical: 15,
                backgroundColor: "#ddd",
              }}
            />
            {isLoggedIn && (
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <CustomDrawerItem label="اعدادات الحساب" icon="setting" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
              <CustomDrawerItem label="عن مشترياتي" icon="infocirlceo" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Confidentialite")}
            >
              <CustomDrawerItem label="سياسة الخصوصية" icon="infocirlceo" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Shipping")}>
              <CustomDrawerItem label="الشحن و التوصيل" icon="infocirlceo" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Loi")}>
              <CustomDrawerItem label="الشروط و الأحكام" icon="infocirlceo" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReturnProducts")}
            >
              <CustomDrawerItem label="سياسة الاسترجاع" icon="infocirlceo" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PaymentMethod")}
            >
              <CustomDrawerItem label="طرق الدفع" icon="infocirlceo" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ContactUs")}>
              <CustomDrawerItem label="تواصل معنا" icon="infocirlceo" />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              isLoggedIn ? logout() : navigation.navigate("Login")
            }
          >
            {isLoggedIn ? (
              <CustomDrawerItem label="تسجيل الخروج" icon="logout" />
            ) : (
              <CustomDrawerItem label="تسجيل الدخول" icon="login" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  let screenwidth = Dimensions.get("window").width;
  let screenheight = Dimensions.get("window").height;
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 0.5],
    outputRange: [0, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === "android" ? COLORS.primary : COLORS.primary,
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        screenOptions={{
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: COLORS.primary,
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          headerShown: false,
        }}
        initialRouteName="Home"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);

          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="Home1">
          {(props) => (
            <Home
              {...props}
              opened={false}
              drawerAnimationStyle={{
                height: screenheight - 100,
                width: screenwidth,
                marginTop: 80,
                marginLeft: Platform.OS === "android" ? 260 : 0,
              }}
              navigation={props.navigation}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
