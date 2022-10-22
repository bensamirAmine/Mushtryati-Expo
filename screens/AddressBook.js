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
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../config/colors";
import { adresseIp } from "../config/constants";
import { useIsFocused } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const addressesURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getAddresse";
const deleteAddressesURL =
  "https://" + adresseIp + "/index.php?route=api/custom/deleteAddresse";
const countryByIdURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getCountry";
const zoneByIdURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getOneZone";
function AddressBook({ navigation }) {
  const [isLoading, setLoading] = React.useState(true);
  const [addresses, setAddresses] = React.useState([]);
  const isFocused = useIsFocused();
  const [connectedUser, setConnectedUser] = React.useState(-1);
  const createTwoButtonAlert = (id) =>
    Alert.alert("", "هل ترغب بحذف هذا العنوان ؟", [
      {
        text: "إلغاء",
        onPress: () => console.log("إلغاء"),
        style: "cancel",
      },
      { text: "حذف العنوان", onPress: () => fetchDeleteAddresses(id) },
    ]);

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

  function fetchDeleteAddresses(id) {
    fetch(deleteAddressesURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addresseId: id,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => fetchAddresses());
  }

  function fetchAddresses() {
    fetch(addressesURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: connectedUser,
      }),
    })
      .then((response) => response.json())
      .then((json) => setAddresses(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  React.useEffect(() => {
    getData();
    fetchAddresses();
  }, [connectedUser, isFocused]);

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
          <Text style={styles.headerText}>قائمة دفتر العناوين</Text>
          <View style={{ flex: 0.2 }}></View>
        </View>
        {addresses.map((item, index) => (
          <View key={index} style={styles.topView}>
            <View style={styles.mailnameView}>
              <Text style={styles.nameText}>
                {item.addresse.firstname + " " + item.addresse.lastname}
              </Text>
              <Text style={styles.nameText} numberOfLines={1}>
                {item.addresse.address_1}
              </Text>
              <Text style={styles.nameText}>{item.addresse.city}</Text>
              <Text style={styles.nameText}>{item.country.name}</Text>
              <Text style={styles.nameText}>{item.zone.name}</Text>
              <View style={styles.delUpd}>
                <TouchableOpacity
                  onPress={() => createTwoButtonAlert(item.addresse.address_id)}
                >
                  <Icon name="delete" size={25} color={"red"}></Icon>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("UpdateAddresse", {
                      addresseIdRoute: item.addresse.address_id,
                      firstnameRoute: item.addresse.firstname,
                      lastnameRoute: item.addresse.lastname,
                      addresse1Route: item.addresse.address_1,
                      addresse2Route: item.addresse.address_2,
                      cityRoute: item.addresse.city,
                      companyRoute: item.addresse.company,
                      countryIdRoute: item.country.country_id,
                      countryNameRoute: item.country.name,
                      zoneIdRoute: item.zone.zone_id,
                      zoneNameRoute: item.zone.name,
                      postcodeRoute: item.addresse.postcode,
                    });
                  }}
                >
                  <Icon name="update" size={25} color={COLORS.primary}></Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <TouchableOpacity
          style={styles.addbook}
          onPress={() => navigation.navigate("AddAddress")}
        >
          <Ionicons
            style={{
              marginRight: 1,
              marginLeft: 5,
            }}
            name="add-circle"
            size={23}
            color={"black"}
          />
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            إضافة عنوان جديد
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddressBook;

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
  addbook: {
    paddingVertical: 20,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  topView: {
    backgroundColor: "white",
    height: windowHeight / 4,
    flex: 1,
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 15,
  },
  nameText: {
    fontSize: 20,
    textAlign: "right",
  },
  mailnameView: {
    flex: 0.6,
    padding: 15,
    marginTop: 0,
  },
  delUpd: {
    flexDirection: "row",
  },
});
