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

function ReturnProducts(props) {
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
          <Text>سياسة الإسترجاع</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text11}>
            يُسعد موقع مشترياتي مساعدة عملائها في إدارة طلبات إسترجاع المنتجات
            وفقًا للشروط التالية
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>سياسة وشروط إسترجاع المنتج:</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> تطبق سياسة الإسترجاع لمدة
            14 يوم من تاريخ الاستلام
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> يجب وجود إثبات صالح لعملية
            الشراء (فاتورة، رقم طلب، الخ).
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> يجب أن تكون كافة المنتجات
            المرتجعة في حالتها الأصلية (مغلقة في عبوة شرائها الأصلية بكافة
            ملحقاتها).
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> لا يتم إسترجاع المنتجات
            المستخدمة أو الغير كاملة.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>عند إسترجاع منتج تالف، يجب
            ذكر العيب في ورقة منفصلة ويتم إرفاقها مع الفاتورة. يرجى عدم كتابة أو
            وضع أي علامات على غلاف المنتج أو على المنتج نفسه.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> يتحمل العميل رسوم توصيل
            المنتج المرتجع.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> يتم إسترجاع المبلغ إلى
            رصيدك على موقع مشترياتي أو بطاقة الائتمان الخاصة بك بعد استلام
            المنتج والتأكد من مطابقته لشروط الإسترجاع.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>كيفية إسترجاع المنتج:</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>يمكنك التواصل معنا لإسترجاع
            المنتجات عن طريق مركز رعاية العملاء على الرقم +966114036006
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> يمكنك إسترجاع المنتجات
            بنفسك على العنوان الخاص بمقر الشركة أو عن طريق التواصل معنا عبر
            البريد الإلكتروني
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>العنوان التفصيلي: الرياض -
            طريق الملك فهد - مبنى الصالحية للحاسبات - برج رقم (2) الدور الثامن -
            مكتب رقم (482).
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>البريد الإلكتروني:
            info@mushtryati.com
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text11}>
            يحتفظُ موقع مشترياتى.كوم بحق رفض طلب ارتجاع / استرداد/ تبديل.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text11}>
            يُرجى كتابة مطالباتك لمنتجاتٍ "منتجات متضررة أثناء التوصيل" أو
            منتجات مفقودة خلال 12 ساعة من استلام المشتريات. إذا قررت ارجاع
            مشترياتك، يمكنك ذلك في غضون 14 يوم بعد الشراء. تُطبق الشروط التالية:
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>لإرجاع أي منتج يرجى الاتصال
            بمركز رعاية العملاء على الرقم +966114036006
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>يجبُ أن تكون كافة المنتجات
            المرتجعة بحالة جديدة (كما هي في حالة البيع)، في صندوقها الأصلي، ويجب
            أن تشمل مواد التغليف، وبطاقات الضمان الفارغة، والأدلة، والنشرات،
            وكافة الملحقات.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>يجب أن تكون البضاعة كاملة،
            وغير مستخدمة، وبحالة "جديدة" كما استُلمت. اذا فُتح الصندوق لا يمكننا
            ارجاع المنتج.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text>
            ارفق الفاتورة في المنتج المُرتجع. إذا البضاعة بها عيب، يُرجى تحديد
            العيب، في ورقة منفصلة وارفقها مع الفاتورة. يُرجى عدم كتابة أو وضع
            علامة على أيِّ مكان في موقع غلاف المُنتج (الكرتون) أو على المنتج
            نفسه. يجب أن تُعاد المنتجات إلى قسم المرتجعات إما بنفسك، وإما ترسل
            عبر البريد.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> يجب أن تُدفع رسوم توصيل
            المنتج المرتجع (المنتجات المرتجعة) وهي من مسؤولية العميل.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> ارسل المرتجعات المعتمدة
            مسبقًا إلى العنوان المذكور في صفحة الاتصال بنا.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text style={{ fontSize: 25 }}>• </Text> سيكون استردادُ الأموال على
            نموذج الدفعات الأصلي فقط.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>يُرجى قراءة كافة الشروط أعلاه.</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            يحتفظُ موقع مشترياتى.كوم بحق رفض طلب استرجاع / استرداد/ تبديل أي
            منتج غير مطابق لمواصفات وسياسة الموقع.
          </Text>
        </View>
        <View style={{ marginBottom: 150 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ReturnProducts;

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
  text11: {
    color: "black",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "center",
    marginBottom: 18,
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
