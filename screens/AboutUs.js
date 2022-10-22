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

function AboutUs(props) {
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
          <Text>نبذة عن مشترياتي</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            مشترياتى.كوم هو متجرالإلكتروني لبيع المنتجات الالكترونية المختلفة
            منها: اجهزة الكمبيوتر بمختلف أصنافها; الكمبيوتر الكل في واحد،
            كمبيوتر محمول ، كمبيوتر المكتبي، خوادم، الطابعات الرقمية، طابعات
            تصميم ، احبار ليزر ومن بين الأحبار الأكثر طلبا ومبيعا نجد احبار
            المنت التي نقدمها في متجرنا بأسعار مناسبة، خرطوشة حبر، راس طباعة،
            ورق طباعة، ... وبالاضافة الى ذلك ماسحات ضوئية، اجهزة الفاكس،
            بروجيكتور، ماكينات تصوير وجميع مستلزماتها الاصلية. مع تقديم أفضل
            خدمة بأقل سعر وأفضل ضمان من قبل الشركة الموردة وخدمة ما بعد البيع من
            قبل ثلة من خبراء التقنيين والإصلاح الفني.
          </Text>
        </View>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/eye.png")}
          ></Image>
          <Text style={styles.logotext}> ​رؤيتنا</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            نؤمن في متجر مشترياتي بأن تحسين الخدمات الموجهة للشركات والمؤسسات
            كتقديم أفضل الأدوات والأجهزة والحلول الفنية تساعد على تحسين أسلوب
            الحياة لعملائنا.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            اقتربنا جدا من أن نصبح أكبر شركة رائدة في تقديم اللوازم تجهيز المكتب
            ومنتجات الكمبيوتر بشكل إحترافي يغطي كافة احتياجات العميل أي كان حجم
            الكيان المستهدف تجهيزه.
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/fl.png")}
          ></Image>
          <Text style={styles.logotext}> ​رؤيتنا</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text1}>
            نهدف في متجرنا الكتروني مشترياتي تقديم المنتجات الإلكترونية لجميع
            المهتمين في السعودية جميع الخدمات المتعلقة بالفحص الفني والإصلاح.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutUs;

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
    paddingTop: 50,
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
    textAlign: "center",
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
});
