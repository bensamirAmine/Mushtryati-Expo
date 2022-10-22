import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawer from "./navigation/CustomDrawer";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Details from "./screens/Details";
import AboutUs from "./screens/AboutUs";
import Profile from "./screens/Profile";
import AddressBook from "./screens/AddressBook";
import AddAddress from "./screens/AddAddress";
import ContactUs from "./screens/ContactUs";
import UpdateProfile from "./screens/UpdateProfile";
import UpdateAddresse from "./screens/UpdateAddresse";
import Categories from "./screens/Categories";
import Products from "./screens/Products";
import OrderList from "./screens/OrderList";
import OrderDetails from "./screens/OrderDetails";
import MyCart from "./screens/MyCart";
import Favoris from "./screens/Favoris";
import AddOrder from "./screens/AddOrder";
import Confidentialite from "./screens/Confidentialite";
import ReturnProducts from "./screens/ReturnProducts";
import Loi from "./screens/Loi";
import Shipping from "./screens/Shipping";
import PaymentMethod from "./screens/PaymentMethod";
import Thank from "./screens/Thank";
import ProductList from "./screens/ProductList";

const Stack = createNativeStackNavigator();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default function App() {
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} component={CustomDrawer} />
        <Stack.Screen name="Thank" component={Thank} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="Shipping" component={Shipping} />

        <Stack.Screen name="Loi" component={Loi} />
        <Stack.Screen name="ReturnProducts" component={ReturnProducts} />
        <Stack.Screen name="Confidentialite" component={Confidentialite} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{ pushToken: expoPushToken }}
        />
        <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddOrder"
          component={AddOrder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateAddresse"
          component={UpdateAddresse}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddressBook" component={AddressBook} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="OrderList" component={OrderList} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Favoris" component={Favoris} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "new notif",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
