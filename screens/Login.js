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
  ScrollView,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import { Formik } from "formik";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../config/colors";
import { Dimensions } from "react-native";
import { adresseIp } from "../config/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { useIsFocused } from "@react-navigation/native";
import { set } from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Login({ route, navigation }) {
  const { pushToken } = route.params;
  const loginURL = "https://" + adresseIp + "/index.php?route=api/custom/login";
  const saveTokenURL =
    "https://" + adresseIp + "/index.php?route=api/custom/addUserPushToken";
  const [hidePassword, sethidePassword] = React.useState(true);

  const datainit = { message: false };
  const [isLoading, setLoading] = React.useState(true);
  const [response1, setResponse1] = React.useState(datainit);

  const [email, setEmail] = React.useState("");

  const [pwd, setPwd] = React.useState("");

  const [isBiometricsSupported, setIsBiometricsSupported] =
    React.useState(false);
  const [key, onChangeKey] = React.useState("");
  const [value, onChangeValue] = React.useState("");
  const [localauthLogin, setlocalauthLogin] = React.useState("");
  const [localauthPwd, setlocalauthPwd] = React.useState("");
  const isFocused = useIsFocused();
  function saveDataOnFirstLogin(login, password) {
    console.log(" -> " + password + response1.message);
    save("login", login);
    save("pwd", password);
  }

  async function logIn() {
    setLoading(true);

    try {
      await fetch(loginURL, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          pwd: pwd,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          setResponse1(json);
          if (json.message) {
            saveDataOnFirstLogin(email, pwd);
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          console.log("finally login " + response1.message);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }
  async function addPushToken(userid) {
    setLoading(true);

    try {
      await fetch(saveTokenURL, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          push_token: pushToken,
          customer_id: userid,
        }),
      })
        .then((response) => response.json())

        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }

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
        addPushToken(response1.id);

        console.log("stored" + value);
      } else {
        console.log("null");
      }
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricsSupported(compatible);
    };
    console.log(pushToken);
    console.log("email->" + email);
    console.log("pwd->" + pwd);
    //removeData();

    if (isFocused) {
      setResponse1(datainit);
      setEmail("");
      setPwd("");
    }
    if (response1.message) {
      storeData(response1);
      getData();
      navigation.navigate("Home");
    }
  }, [isLoading, isFocused]);

  /**
   * Biometrics
   */
  const handleBiometrics = async () => {
    const isbiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isbiometricAvailable) {
      console.log("authentication is not available");
    }

    let supportedBiometrics;
    if (isbiometricAvailable) {
      supportedBiometrics =
        LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();

    if (!savedBiometrics) {
      console.log("authentication is not available saved");
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "تسجيل الدخول",
      cancelLabel: "الغاء",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success) {
      console.log("authentication success");
      console.log(biometricAuth);
      getValueFor("login", "pwd");
    } else {
      console.log("authentication not success");
    }
  };
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  async function getValueFor(login, password) {
    let storedLogin = await SecureStore.getItemAsync(login);
    let storedPwd = await SecureStore.getItemAsync(password);
    if (storedLogin && storedPwd) {
      setLoading(true);
      try {
        await fetch(loginURL, {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: storedLogin,
            pwd: storedPwd,
          }),
        })
          .then((response) => response.json())
          .then((json) => setResponse1(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
        console.log("local authentication" + storedLogin + storedPwd);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("🔐عليك تسجيل الدخول أولا \n");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          ></Image>
          <Text style={styles.logotext}>مرحبا بك قم بتسجيل الدخول</Text>
        </View>
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
            onChangeText={(newEmail) => setEmail(newEmail)}
            defaultValue={email}
            style={styles.textInput}
          />
        </View>
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
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://mushtryati.com/index.php?route=account/forgotten"
            )
          }
        >
          <Text
            style={{
              paddingRight: 10,
              marginTop: 5,
              marginBottom: 20,
            }}
          >
            نسيت كلمة المرور؟
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => logIn()}>
          <Text style={{ color: "white", textAlign: "center" }}>
            تسجيل دخول
          </Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.regBtn}>
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ color: "white", textAlign: "center" }}
          >
            تسجيل حساب جديد
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBiometrics()}>
          <Image
            style={styles.scan}
            source={require("../assets/images/scan.png")}
          ></Image>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;

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
    paddingTop: 70,
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
});
