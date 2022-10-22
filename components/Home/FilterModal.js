import React from "react";
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Animated } from "react-native";
import { COLORS } from "../../config/colors";
import TextButton from "../inputs/TextButton";
import TwoPointSlider from "../inputs/TwoPointSlider";
import AntIcons from "@expo/vector-icons/AntDesign";
import { adresseIp } from "../../config/constants";
import { useNavigation } from "@react-navigation/native";

const manufacturers = [
  {
    id: 0,
    image: require("../../assets/images/printer.png"),
    text: "Printers",
  },
  {
    id: 1,
    image: require("../../assets/images/user-interface.png"),
    text: "Phones and Tablets",
  },
  {
    id: 2,
    image: require("../../assets/images/desktop-computer.png"),
    text: "Computers",
  },
  {
    id: 3,
    image: require("../../assets/images/user-interface.png"),
    text: "Printers and inc",
  },
  {
    id: 4,
    image: require("../../assets/images/gamepad.png"),
    text: "Consoles",
  },
  {
    id: 5,
    image: require("../../assets/images/printer.png"),
    text: "Printers",
  },
  {
    id: 6,
    image: require("../../assets/images/desktop-computer.png"),
    text: "Computers",
  },
];
const availabilities = [
  {
    id: 7,
    text: "متوفر",
  },
  {
    id: 6,
    text: "غير متوفر",
  },
];

const discounts = [
  {
    id: 0,
    text: " 10% أو أكثر",
  },
  {
    id: 1,
    text: "20% أو أكثر",
  },
  {
    id: 2,
    text: "30% أو أكثر",
  },
  {
    id: 3,
    text: "40% أو أكثر",
  },
  {
    id: 4,
    text: "50% أو أكثر",
  },
];

const ratings = [
  {
    id: 0,
    text: "5",
    image: require("../../assets/images/star.png"),
  },
  {
    id: 1,
    text: "4",
    image: require("../../assets/images/star.png"),
  },
  {
    id: 2,
    text: "3",
    image: require("../../assets/images/star.png"),
  },
  {
    id: 3,
    text: "2",
    image: require("../../assets/images/star.png"),
  },
  {
    id: 4,
    text: "1",
    image: require("../../assets/images/star.png"),
  },
];
const Section = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: 15,

        ...containerStyle,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 22,
          paddingBottom: 10,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

function FilterModal({ isVisible, onClose }) {
  const navigation = useNavigation();

  const manufacturersURL =
    "https://" + adresseIp + "/index.php?route=api/custom/getManufacturers";
  let screenwidth = Dimensions.get("window").width;
  let screenheight = Dimensions.get("window").height;
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = React.useState(isVisible);
  const [manufacturer, setManufacturer] = React.useState("");
  const [availability, setAvailability] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [discount, setDiscount] = React.useState(-1);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(10000);
  const [isLoading, setLoading] = React.useState(true);
  const [manufacturersFromDB, setManufacturersFromDB] = React.useState([]);

  React.useEffect(() => {
    fetchManufacturers();
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        onClose();
      });
    }
  }, [showFilterModal]);

  function fetchManufacturers() {
    fetch(manufacturersURL)
      .then((response) => response.json())
      .then((json) => setManufacturersFromDB(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [screenheight, screenheight - 610],
  });
  function renderPrice() {
    return (
      <Section title="السعر">
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TwoPointSlider
            values={[0, 10000]}
            min={0}
            max={10000}
            postFix=" ريال "
            onValueChange={(values) => {
              setMinPrice(values[0]);
              setMaxPrice(values[1]);
            }}
          />
        </View>
      </Section>
    );
  }

  function renderManufacturer() {
    return (
      <Section
        title="الماركات"
        containerStyle={{
          marginTop: 35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {manufacturersFromDB.map((item, index) => {
            return (
              <TextButton
                key={index}
                label={item.nom}
                withImage={true}
                imageUrl={{
                  uri: item.image,
                }}
                labelStyle={{
                  color: item.id == manufacturer ? COLORS.white : COLORS.black,
                }}
                buttonContainerStyle={{
                  paddingHorizontal: 10,
                  width: "45%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor:
                    item.id == manufacturer ? COLORS.primary : COLORS.secondary,
                }}
                onPress={() => setManufacturer(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderAvailability() {
    return (
      <Section
        title="حالة التوفر"
        containerStyle={{
          marginTop: 35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {availabilities.map((item, index) => {
            return (
              <TextButton
                key={index}
                label={item.text}
                withImage={false}
                imageUrl={item.image}
                labelStyle={{
                  color: item.id == availability ? COLORS.white : COLORS.black,
                }}
                buttonContainerStyle={{
                  paddingHorizontal: 10,
                  width: "95%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor:
                    item.id == availability ? COLORS.primary : COLORS.secondary,
                }}
                onPress={() => setAvailability(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderRating() {
    return (
      <Section
        title="التقييم"
        containerStyle={{
          marginTop: 35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {ratings.map((item, index) => {
            return (
              <TextButton
                key={index}
                label={item.text}
                withImage={true}
                imageUrl={item.image}
                labelStyle={{
                  color: item.id == rating ? COLORS.white : COLORS.black,
                }}
                buttonContainerStyle={{
                  paddingHorizontal: 10,
                  width: "30%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor:
                    item.id == rating ? COLORS.primary : COLORS.secondary,
                }}
                onPress={() => setRating(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderDiscount() {
    return (
      <Section
        title="التخفيضات"
        containerStyle={{
          marginTop: 35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {discounts.map((item, index) => {
            return (
              <TextButton
                key={index}
                label={item.text}
                withImage={false}
                imageUrl={""}
                labelStyle={{
                  color: item.id == discount ? COLORS.white : COLORS.black,
                }}
                buttonContainerStyle={{
                  paddingHorizontal: 10,
                  width: "95%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor:
                    item.id == discount ? COLORS.primary : COLORS.secondary,
                }}
                onPress={() => setDiscount(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      style={{ backgroundColor: COLORS.primary }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack2,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 50,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            paddingHorizontal: 25,
            paddingTop: 25,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundColor: COLORS.white,
          }}
        >
          {/*header*/}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomColor: COLORS.transparentBlack3,
              borderBottomWidth: 0.5,
              paddingBottom: 25,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              فلاتر البحث
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}
          >
            {renderPrice()}
            {renderManufacturer()}
            {renderAvailability()}

            <View
              style={{
                paddingVertical: 50,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: COLORS.primary,
                  paddingVertical: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
                onPress={() =>
                  navigation.navigate("Products", {
                    find: "filter",
                    minprice: minPrice,
                    maxprice: maxPrice,
                    manufacturer: manufacturer,
                    stock: availability,
                  })
                }
              >
                <Text
                  style={{
                    fontSize: 23,
                    textAlign: "center",
                    color: COLORS.white,
                    fontWeight: "bold",
                  }}
                >
                  تــأكــيــد
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

export default FilterModal;
