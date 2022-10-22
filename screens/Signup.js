import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  StyledFormArea,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../config/colors";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Home from "./Home";
import { adresseIp } from "../config/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Stack = createNativeStackNavigator();

function Signup({ navigation }) {
  const signupURL =
    "https://" + adresseIp + "/index.php?route=api/custom/addUser";
  const datainit = { success: false };
  const [hidePassword, sethidePassword] = React.useState(true);
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const [response1, setResponse1] = React.useState(datainit);

  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const [firstNameChanged, setFirstNameChanged] = React.useState(false);
  const [lastNameChanged, setLastNameChanged] = React.useState(false);
  const [emailChanged, setEmailChanged] = React.useState(false);
  const [pwdChanged, setPwdChanged] = React.useState(false);
  const [phoneChanged, setPhoneChanged] = React.useState(false);

  const validatePhone = (num) => {
    let isnum = /^\d+$/;
    return isnum.test(num) && num.length > 7;
  };
  const validateEmail = (mail) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
  };
  const validatePwd = (pass) => {
    return pass.length > 6;
  };

  const validateName = (name) => {
    return name.length > 0;
  };

  async function signUp() {
    if (
      validateName(firstName) &&
      validateName(lastName) &&
      validateEmail(email) &&
      validatePwd(pwd) &&
      validatePhone(phone)
    ) {
      console.log("valid");
      setLoading(true);
      const signupURL =
        "https://" + adresseIp + "/index.php?route=api/custom/addUser";
      try {
        await fetch(signupURL, {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            firstname: firstName,
            lastname: lastName,
            phone: phone,
            pwd: pwd,
          }),
        })
          .then((response) => response.json())
          .then((json) => setResponse1(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("plz check info");
    }
  }
  const createTwoButtonAlert = (value) =>
    Alert.alert("", value + "مستعمل لا يمكنك اعادة استعماله ", [
      {
        text: "إلغاء",
        onPress: () => console.log("إلغاء"),
        style: "cancel",
      },
      { text: "تسجيل الدخول", onPress: () => navigation.navigate("Login") },
    ]);

  React.useEffect(() => {
    removeData();
    storeData(response1);
    getData();
    if (response1.success) {
      navigation.navigate("Home");
    } else {
      if (response1.phone && response1.email) {
        createTwoButtonAlert(" رقم الهاتف والبريد الالكتروني ");
      } else {
        if (response1.email) {
          createTwoButtonAlert(" البريد الالكتروني ");
        }
        if (response1.phone) {
          createTwoButtonAlert(" رقم الهاتف ");
        }
      }
    }
    console.log(response1);
  }, [isLoading]);

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("loggedUser");
    } catch (e) {
      // saving error
    }
  };
  const storeData = async (res1) => {
    try {
      const jsonValue = JSON.stringify(res1);
      await AsyncStorage.setItem("loggedUser", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        console.log(value);
      } else {
        console.log("null");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          ></Image>
          <Text style={styles.logotext}>مرحبا بك قم بتسجيل حساب جديد</Text>
        </View>
        <View style={styles.searchContainer}>
          <Octicons
            style={{
              marginRight: 20,
            }}
            name="person"
            size={23}
          />

          <TextInput
            placeholder="الاسم الأول"
            style={styles.textInput}
            onChangeText={(newFirstName) => setFirstName(newFirstName)}
            onFocus={() => setFirstNameChanged(true)}
            defaultValue={firstName}
          />
        </View>
        {!validateName(firstName) && firstNameChanged && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              right: 25,
            }}
          >
            الرجاء ادخال الاسم الأول
          </Text>
        )}

        <View style={styles.searchContainer}>
          <Octicons
            style={{
              marginRight: 20,
            }}
            name="person"
            size={23}
          />

          <TextInput
            placeholder="الاسم الاخير"
            style={styles.textInput}
            onChangeText={(newLastName) => setLastName(newLastName)}
            onFocus={() => setLastNameChanged(true)}
            defaultValue={lastName}
          />
        </View>
        {!validateName(lastName) && lastNameChanged && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              right: 25,
            }}
          >
            الرجاء ادخال الاسم الأخير
          </Text>
        )}
        <View style={styles.searchContainer}>
          <Octicons
            style={{
              marginRight: 20,
            }}
            name="mail"
            size={23}
          />

          <TextInput
            placeholder="البريد الإلكتروني"
            keyboardType="email-address"
            style={styles.textInput}
            onChangeText={(newEmail) => setEmail(newEmail)}
            onFocus={() => setEmailChanged(true)}
            defaultValue={email}
          />
        </View>
        {!validateEmail(email) && emailChanged && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              right: 25,
            }}
          >
            الرجاء ادخال بريد الكتروني صحيح
          </Text>
        )}
        <View style={styles.searchContainer}>
          <Ionicons
            style={{
              marginRight: 20,
            }}
            name="call-outline"
            size={23}
          />

          <TextInput
            placeholder="رقم الهاتف"
            style={styles.textInput}
            onChangeText={(newPhone) => setPhone(newPhone)}
            onFocus={() => setPhoneChanged(true)}
            defaultValue={phone}
          />
        </View>
        {!validatePhone(phone) && phoneChanged && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              right: 25,
            }}
          >
            الرجاء ادخال رقم هاتف صحيح
          </Text>
        )}
        <Text style={styles.PasswordText}>كلمة المرور الخاصة بك :</Text>
        <View style={styles.searchContainer}>
          <Octicons
            style={{
              marginRight: 20,
            }}
            name="lock"
            size={23}
          />

          <TextInput
            placeholder="كلمة المرور"
            secureTextEntry={hidePassword}
            onChangeText={(newPwd) => setPwd(newPwd)}
            onFocus={() => setPwdChanged(true)}
            defaultValue={pwd}
            style={styles.textInput}
          />
          <TouchableOpacity onPress={() => sethidePassword(!hidePassword)}>
            <Ionicons
              style={{
                marginLeft: 20,
              }}
              name={hidePassword ? "md-eye-off" : "md-eye"}
              size={23}
            />
          </TouchableOpacity>
        </View>
        {!validatePwd(pwd) && pwdChanged && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              right: 25,
            }}
          >
            الرجاء ادخال كلمة المرور
          </Text>
        )}
        <TouchableOpacity>
          <Text
            style={{
              paddingRight: 10,
              marginTop: 5,
              marginBottom: 20,
            }}
          ></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => signUp()}>
          <Text style={{ color: "white", textAlign: "center" }}>متابعة</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity>
          <Text>
            هل لديك حساب؟
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{
                paddingRight: 10,
                marginTop: 5,
                marginBottom: 20,
                color: "#2982E6",
              }}
            >
              {" "}
              تسجيل دخول
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  regBtn: {
    backgroundColor: "#4A4A4A",
    height: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  logo: {
    width: 250,
    height: 80,
    resizeMode: "contain",
  },
  logotext: {},
  logoContainer: {
    alignItems: "center",
    paddingTop: 50,
    flex: 1,
    paddingBottom: 40,
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.secondary,
    borderRadius: 15,
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 10,
    width: windowWidth - 30,
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    marginRight: 20,
    textAlign: "right",
  },
  line: {
    height: 1,
    width: "95%",
    backgroundColor: "black",
    opacity: 0.3,
    marginVertical: 10,
    alignSelf: "center",
  },
  scan: {
    width: 150,
    height: windowHeight / 6,
    resizeMode: "contain",
    marginTop: 30,
    alignSelf: "center",
  },
  PasswordText: {
    marginRight: 22,
    paddingTop: 10,
  },
});
