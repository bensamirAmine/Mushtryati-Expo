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

function Shipping(props) {
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
          <Text>الشحن والتوصيل</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>معلومات التوصيل</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            عندما تسجلُ طلب شراء مع مشترياتى.كوم، سنبذلُ ما بوسعنا لإيصال
            منتجاتك إليك بأقرب وقتٍ ممكن. إذا لم يصل طلبك في تاريخ التوصيل
            المقدَّر لأيِّ سببٍ من الأسباب، سنتصلُ بك من أجل تزويدك بتحديث
            الحالة. لقد تعاقدنا مع العديد من مزودي خدمات الشحن من أجل تزويد
            عملائنا بعدة خيارات للاختيار من بينها. يمكن للعملاء تتبع شحناتهم من
            خلال نظام مزودي خدمات التتبع من أجل الحصول على إطار زمني أكثر دقة
            للتسليم. عند طلب الشحنة،يستلمُ العميل معلومات التتبع بالإضافة إلى
            رقم تتبع الشحنة من أجل متابعتها مع مزود خدمات الشحن.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>نشحنُ إلى المناطق التالية</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            يشحن موقع مشترياتى.كوم لجميع المناطق داخل المملكة العربية السعودية *
            قد يحدث تأخير من يوم واحد – ثلاثة ايام إذا كان المنتج المطلوب غير
            متوفر. ** ينطبقُ على الشحنات التي يبلغ وزنها الأقصى 15كغم .
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>الوقتُ المُقدَّر للتوصيل</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            الوقت المقدر للتوصيل هو من 3 الى 5 ايام عمل حسب قرب/ بعد المدينة من
            الرياض فى حالة حدوث تأخير خارج عن ارادتنا سيتم ايلاغكم فورا
          </Text>
        </View>
        <View style={{ marginBottom: 150 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Shipping;

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
