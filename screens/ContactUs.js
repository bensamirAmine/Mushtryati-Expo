import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../config/colors";
import { adresseIp } from "../config/constants";
import { useIsFocused } from "@react-navigation/native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const contactURL =
  "https://" + adresseIp + "/index.php?route=api/custom/conhtactMush";

function ContactUs({ navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [info, setInfos] = React.useState("");
  const [message, setMessage] = React.useState("");
  const isFocused = useIsFocused();
  function fetchContact() {
    fetch(contactURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        from: "mkaddemhaykel@gmail.com",
        subject: subject,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((json) => setInfos(json.infos))
      .catch((error) => console.error(error))
      .finally(() => createTwoButtonAlert());
  }

  const createTwoButtonAlert = () =>
    Alert.alert("", "شكرا لتواصلكم معنا !", [
      {
        text: "حسنا !",
        onPress: () => navigation.navigate("Home"),
      },
    ]);

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
          <Text style={styles.headerText}>تواصل معنا</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            justifyContent: "space-between",
            marginHorizontal: 15,
            marginTop: 25,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.facebook.com/mushtryatii/")
            }
          >
            <FontAwesome
              name="facebook-square"
              color={COLORS.primary}
              size={50}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/mushtryatii/?fbclid=IwAR0ArT1mIQGjVGN-mhIBFcrZk5N7RQTihnDJSDpNmrEixCwrEbBASpTErJE"
              )
            }
          >
            <FontAwesome name="instagram" color={COLORS.primary} size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://twitter.com/mushtryatii?fbclid=IwAR0Y4HZHmIaLcaCQHsH2Kj_Tvw-M2qa-VJN4ivazYVzu1TPOhLlUxwYwLLc"
              )
            }
          >
            <FontAwesome name="twitter" color={COLORS.primary} size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/company/mushtryati/")
            }
          >
            <FontAwesome
              name="linkedin-square"
              color={COLORS.primary}
              size={50}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCA6KbxSqchfAxP5WSZSF_4w"
              )
            }
          >
            <FontAwesome
              name="youtube-square"
              color={COLORS.primary}
              size={50}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.snapchat.com/add/mushtryatii?fbclid=IwAR3CW_b4n5TMqeuwgRGUM0TDlz6zmznFc5lI0Nku0WZGXj3sHwrFgEgpU8o"
              )
            }
          >
            <FontAwesome
              name="snapchat-square"
              color={COLORS.primary}
              size={50}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            {" "}
            الموضوع<Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="الموضوع"
            style={styles.textInput}
            onChangeText={(newSubject) => setSubject(newSubject)}
            defaultValue={subject}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            البريد الالكتروني<Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="البريد الالكتروني"
            style={styles.textInput}
            onChangeText={(newemail) => setEmail(newemail)}
            defaultValue={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            {" "}
            رسالتك<Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="رسالتك"
            style={styles.textInput1}
            multiline={true}
            numberOfLines={10}
            onChangeText={(newmessage) => setMessage(newmessage)}
            defaultValue={message}
          />
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={() => fetchContact()}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>
            أرسل
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: windowWidth / 1.5,
            height: 300,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 150,
            borderRadius: 15,
            borderWidth: 2,
          }}
        >
          <FontAwesome
            name="whatsapp"
            color={COLORS.primary}
            size={60}
            style={{ marginBottom: 25 }}
          />
          <TouchableOpacity
            style={{ marginBottom: 15 }}
            onPress={() => Linking.openURL("https://wa.me/966500326111/")}
          >
            <Text style={{ fontSize: 25 }}>+966 50 032 6111</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: 15 }}
            onPress={() => Linking.openURL("https://wa.me/966582181559/")}
          >
            <Text style={{ fontSize: 25 }}>+966 58 218 1559</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: 15 }}
            onPress={() => Linking.openURL("https://wa.me/966506423970/")}
          >
            <Text style={{ fontSize: 25 }}>+966 50 642 3970</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ContactUs;

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
  textInput: {
    height: 40,
    fontSize: 18,
    flex: 1,
    paddingHorizontal: 12,
    marginHorizontal: 25,
    textAlign: "right",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  textInput1: {
    height: 160,
    fontSize: 18,
    flex: 1,
    paddingHorizontal: 12,
    marginHorizontal: 25,
    textAlign: "right",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "white",
    textAlignVertical: "top",
  },
  textUp: {
    padding: 20,
    fontSize: 20,
  },
  saveBtn: {
    backgroundColor: COLORS.primary,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 80,
    marginVertical: 20,
  },
});
