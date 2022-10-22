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
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../config/colors";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { adresseIp } from "../config/constants";
import { useIsFocused } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const countriesURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getListCountry";
const zoneByCountryURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getListZone";
const addAddresseURL =
  "https://" + adresseIp + "/index.php?route=api/custom/addAddresse";

function AddAddress({ navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const [selectedCountry, setSelectedCountry] = React.useState(1);
  const [myCountryList, setMyCountryList] = React.useState(184);
  const [myZoneList, setMyZoneList] = React.useState([]);
  const [firstname, setMyFirstname] = React.useState("");
  const [lastname, setMyLastname] = React.useState("");
  const [company, setMyCompany] = React.useState("");
  const [addresse1, setMyAddresse1] = React.useState("");
  const [addresse2, setMyAddresse2] = React.useState("");
  const [city, setMyCity] = React.useState("");
  const [postcode, setMyPostcode] = React.useState(0);
  const [selectedZone, setSelectedZone] = React.useState(-1);
  const [connectedUser, setConnectedUser] = React.useState(-1);

  const [firstNameChanged, setFirstNameChanged] = React.useState(false);
  const [lastNameChanged, setLastNameChanged] = React.useState(false);
  const [addresse1Changed, setAddresse1Changed] = React.useState(false);
  const [cityChanged, setCityChanged] = React.useState(false);

  const isFocused = useIsFocused();
  function fetchCountries() {
    fetch(countriesURL)
      .then((response) => response.json())
      .then((json) => setMyCountryList(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function fetchZoneByCountry() {
    fetch(zoneByCountryURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        countryId: 184,
      }),
    })
      .then((response) => response.json())
      .then((json) => setMyZoneList(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function fetchAddAddresse() {
    if (
      validateText(firstname) &&
      validateText(lastname) &&
      validateText(addresse1) &&
      validateText(city)
    ) {
      fetch(addAddresseURL, {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: connectedUser,
          firstname: firstname,
          lastname: lastname,
          company: company,
          addresse1: addresse1,
          addresse2: addresse2,
          city: city,
          postcode: postcode,
          countryId: selectedCountry,
          zoneId: selectedZone,
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.error(error))
        .finally(() => navigation.navigate("AddressBook"));
    } else {
      console.log("missing fields");
      createTwoButtonAlert();
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        const user = JSON.parse(value);
        setConnectedUser(user.id);
      } else {
        console.log("null");
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
    fetchCountries();
    fetchZoneByCountry();
  }, [isFocused, selectedCountry]);

  const validateText = (text) => {
    return text.length > 0;
  };
  const createTwoButtonAlert = (id) =>
    Alert.alert("", "الرجاء ادخال كل المعلومات الضرورية!", [
      {
        text: "إلغاء",
        onPress: () => console.log("حسنا"),
        style: "cancel",
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
          <Text style={styles.headerText}>إضافة عنوان جديد</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            {" "}
            الإسم الأول<Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="الإسم الأول"
            style={styles.textInput}
            onChangeText={(newNom) => setMyFirstname(newNom)}
            onFocus={() => setFirstNameChanged(true)}
            defaultValue={firstname}
          />
        </View>
        {!validateText(firstname) && firstNameChanged && (
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
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            {" "}
            الإسم الأخير<Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="الإسم الأخير"
            style={styles.textInput}
            onChangeText={(newPrenom) => setMyLastname(newPrenom)}
            onFocus={() => setLastNameChanged(true)}
            defaultValue={lastname}
          />
        </View>
        {!validateText(lastname) && lastNameChanged && (
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
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>الشركة</Text>
          <TextInput
            placeholder="الشركة"
            style={styles.textInput}
            onChangeText={(newCompany) => setMyCompany(newCompany)}
            defaultValue={company}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            العنوان الأول<Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="العنوان الأول"
            style={styles.textInput}
            onFocus={() => setAddresse1Changed(true)}
            onChangeText={(newAddresse1) => setMyAddresse1(newAddresse1)}
            defaultValue={addresse1}
          />
        </View>
        {!validateText(addresse1) && addresse1Changed && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              right: 25,
            }}
          >
            الرجاء ادخال العنوان الأول
          </Text>
        )}
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>العنوان الثاني</Text>
          <TextInput
            placeholder="العنوان الثاني"
            style={styles.textInput}
            onChangeText={(newAddresse2) => setMyAddresse2(newAddresse2)}
            defaultValue={addresse2}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            المدينة<Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            placeholder="المدينة"
            style={styles.textInput}
            onFocus={() => setCityChanged(true)}
            onChangeText={(newCity) => setMyCity(newCity)}
            defaultValue={city}
          />
        </View>
        {!validateText(city) && cityChanged && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              right: 25,
            }}
          >
            الرجاء ادخال المدينة
          </Text>
        )}
        {/* <View style={styles.inputContainer}>
          <Text style={styles.textUp}>صندوق البريد</Text>
          <TextInput
            placeholder="صندوق البريد"
            style={styles.textInput}
            onChangeText={(newPostCode) => setMyPostcode(newPostCode)}
            defaultValue={postcode}
          />
        </View> */}
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            البلد<Text style={{ color: "red" }}>*</Text>
          </Text>
          {/*<TextInput placeholder="البلد" style={styles.textInput} >*/}
          <View
            style={{
              height: 50,
              fontSize: 18,
              flex: 1,
              marginHorizontal: 25,
              textAlign: "right",
              borderColor: "black",
              borderWidth: 0.5,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <Picker
              selectedValue={selectedCountry}
              style={{
                width: window.innerWidth,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCountry(itemValue)
              }
            >
              <Picker.Item label={"Saudi Arabia"} value={myCountryList} />
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textUp}>
            المنطقة / المحافظة<Text style={{ color: "red" }}>*</Text>
          </Text>
          {/*} <TextInput
            placeholder="المنطقة / المحافظة"
            style={styles.textInput}
          />*/}
          <View
            style={{
              height: 50,
              fontSize: 18,
              flex: 1,
              marginHorizontal: 25,
              textAlign: "right",
              borderColor: "black",
              borderWidth: 0.5,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <Picker
              selectedValue={selectedZone}
              style={{ height: 50, width: window.innerWidth }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedZone(itemValue)
              }
            >
              {myZoneList?.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.name}
                  value={item.zone_id}
                />
              ))}
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => fetchAddAddresse()}
        >
          <Text
            //onPress={() => navigation.navigate("AddressBook")}
            style={{ color: "white", textAlign: "center", fontSize: 25 }}
          >
            حفظ
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddAddress;

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
