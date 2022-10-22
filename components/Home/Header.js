import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";

import Animated from "react-native-reanimated";
import IonIcons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../config/colors";

function Header({ navigation, isOpen, isLoggedIn }) {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const [showMenu, setShowMenu] = React.useState(false);

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {/*Logo*/}

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 55,
        }}
      >
        <Image
          style={styles.headerLogo}
          source={require("../../assets/images/logo.png")}
        />
        <Text>{isLoggedIn}</Text>
      </View>

      {/*Right*/}

      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderRadius: 20,
          borderColor: COLORS.secondary,
          position: "absolute",
        }}
        onPress={() => {
          navigation.openDrawer();
          isOpen = !isOpen;
        }}
      >
        <IonIcons name="menu-outline" size={40} color={COLORS.black} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderRadius: 20,
          borderColor: COLORS.secondary,
        }}
        onPress={() =>
          isLoggedIn
            ? navigation.navigate("MyCart")
            : navigation.navigate("Login")
        }
      >
        <IonIcons name="cart" size={30} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    height: 40,
    resizeMode: "contain",
  },
});
export default Header;
