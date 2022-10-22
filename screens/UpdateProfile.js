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
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../config/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { adresseIp } from "../config/constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const editProfileURL =
  "https://" + adresseIp + "/index.php?route=api/custom/updateUserInfo";
const editPwdURL =
  "https://" + adresseIp + "/index.php?route=api/custom/udateUserPassword";
function UpdateProfile({ navigation }) {
  const values = {
    nom: "hhhhh",
    email: "hihihihi",
  };
  const [hidePassword, sethidePassword] = React.useState(true);
  const [prenomValue, setPrenomValue] = React.useState("");
  const [nomValue, setNomValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [telValue, setTelValue] = React.useState("");
  const [idValue, setIdValue] = React.useState("");
  const [pwd, setPwdValue] = React.useState("");
  const [isLoading, setLoading] = React.useState(true);
  const infoAlert = () =>
    Alert.alert("", "تم تحديث المعلومات", [
      {
        text: "حسنا",
        onPress: () => console.log("حسنا"),
        style: "cancel",
      },
    ]);
  const passAlert = () =>
    Alert.alert("", "تم تحديث كلمة السر", [
      {
        text: "حسنا",
        onPress: () => console.log("حسنا"),
        style: "cancel",
      },
    ]);
  const invalidpassAlert = () =>
    Alert.alert("", "كلمة السر أصغر من ٨ أحرف", [
      {
        text: "حسنا",
        onPress: () => console.log("حسنا"),
        style: "cancel",
      },
    ]);
  function savepwd() {
    console.log(pwd);
    if (pwd.length < 8) {
      invalidpassAlert();
    } else {
      fetch(editPwdURL, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: idValue,
          pwd: pwd,
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.error(error))
        .finally(() => setPwdValue(""));
      passAlert();
    }
  }

  function saveinfo() {
    infoAlert();
    removeData();
    storeData();
    fetch(editProfileURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: idValue,
        firstname: nomValue,
        lastname: prenomValue,
        email: emailValue,
        telephone: telValue,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify({
        id: idValue,
        firstname: nomValue,
        lastname: prenomValue,
        email: emailValue,
        telephone: telValue,
      });
      await AsyncStorage.setItem("loggedUser", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        const user = JSON.parse(value);
        console.log(user);
        setNomValue(user.firstname);
        setPrenomValue(user.lastname);
        setEmailValue(user.email);
        setTelValue(user.telephone);
        setIdValue(user.id);
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
  React.useEffect(() => {
    getData();
  }, []);
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
          <Text style={styles.headerText}>إعدادات الحساب</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>

        <View style={styles.bigsettings}>
          <View style={styles.settings}>
            <Text style={styles.textSettings}>معلومات الحساب</Text>
            <TouchableOpacity onPress={() => saveinfo()}>
              <Ionicons name="save-outline" size={20}></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={styles.firstView}>
            <View style={styles.secondView}>
              <Text style={styles.text}>الإسم الأول</Text>
              <TextInput
                value={prenomValue}
                onChangeText={(newPrenom) => setPrenomValue(newPrenom)}
                style={styles.textInput}
              />
            </View>
            <View style={styles.secondView}>
              <Text style={styles.text}>إسم العائلة</Text>
              <TextInput
                value={nomValue}
                onChangeText={(newNom) => setNomValue(newNom)}
                style={styles.textInput}
              />
            </View>
            <View style={styles.secondView}>
              <Text style={styles.text}>البريد الإلكتروني</Text>
              <TextInput
                value={emailValue}
                onChangeText={(newEmail) => setEmailValue(newEmail)}
                style={styles.textInput}
              />
            </View>
            <View style={styles.secondView}>
              <Text style={styles.text}>رقم الجوال</Text>
              <TextInput
                value={telValue}
                onChangeText={(newTel) => setTelValue(newTel)}
                style={styles.textInput}
              />
            </View>
          </View>
        </View>

        <View style={styles.bigsettings}>
          <View style={styles.settings}>
            <Text style={styles.textSettings}>تغيير كلمة المرور</Text>
            <TouchableOpacity onPress={() => savepwd()}>
              <Ionicons name="save-outline" size={20}></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={styles.firstView}>
            <View style={styles.secondView}>
              <Text style={styles.text}>كلمة المرور الجديدة</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={hidePassword}
                value={pwd}
                onChangeText={(newPwd) => setPwdValue(newPwd)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UpdateProfile;

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
  settings: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
  },
  textSettings: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bigsettings: {
    width: windowWidth,
    backgroundColor: "white",
    marginVertical: 10,
    paddingBottom: 10,
  },
  firstView: {
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 6,
  },
  secondView: {
    margin: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  textInput: {
    textAlign: "right",
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 5,
  },
});
