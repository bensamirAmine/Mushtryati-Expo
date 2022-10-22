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
import { COLORS } from "../config/colors";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function SocialMedia(props) {
  const navigation = useNavigation();
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

        <View style={styles.logoContainerTop}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          ></Image>
          <Text>سياسة الخصوصية</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SocialMedia;

const styles = StyleSheet.create({});
