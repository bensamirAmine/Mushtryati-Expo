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

function PaymentMethod(props) {
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
          <View></View>
        </View>

        <View style={styles.logoContainerTop}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          ></Image>
          <Text>طرق الدفع</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            نحاولُ دائمًا توفير خيارات متعددة لعملائنا. يقبلُ موقع مشترياتى.كوم
            حاليًا طرق الدفع التالية:
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>الدفعُ النقدي عند الاستلام</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            {" "}
            بطاقاتُ الدفع الائتمانية/بطاقات الخصم عبر الإنترنت
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            {" "}
            حوالة مصرفية فى مبيعات الجملة ( قريبا )
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            لمزيدٍ من المعلومات، رجاءً لا تتردد بالاتصال بنا وسنكون سعداء
            بتزويدك بالمعلومات المطلوبة.
          </Text>
        </View>
        <View style={{ marginBottom: 150 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 15,
  },
  logo: {
    width: 250,
    height: 80,
    resizeMode: "contain",
  },
  logotext: {
    fontSize: 22,
  },
  logoContainerTop: {
    alignItems: "center",
    paddingTop: 10,
    flex: 1,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
    paddingBottom: 20,
  },
  text: {
    color: "grey",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "right",
  },
  text1: {
    color: "grey",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 10,
    marginBottom: 100,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "center",
  },
  textView: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  titleNew: {
    fontSize: 20,
    lineHeight: 25,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "right",
    marginHorizontal: 15,
  },
});
