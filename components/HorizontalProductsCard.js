import React from 'react';
import { Image, TouchableOpacity, View, Text, Dimensions } from "react-native";
import { COLORS } from "../config/colors";
import { useNavigation } from "@react-navigation/native";

function HorizontalProductsCard(props) {
  const navigation = useNavigation();
  let width = Dimensions.get("window").width;
  let disponible = "";
  if (props.qt > 0) {
    disponible = "متوفر";
  } else {
    disponible = "غير متوفر";
  }
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: COLORS.white,
        paddingVertical: 15,
        height: 130,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        navigation.navigate("Details", {
          itemId: props.id,
          title: props.title,
          description: props.description,
          price: props.price,
          imageUri: props.imageUri,
          model: props.model,
          weight: props.weight,
          quantity: props.qt,
          disponible: disponible,
        });
      }}
    >
      <Image
        style={{
          width: 110,
          height: 110,
          resizeMode: "contain",
        }}
        source={{
          uri: props.imageUri,
        }}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
          numberOfLines={2}
        >
          {props.title}
        </Text>
        <Text
          style={{
            color: "#5B5A5F",
          }}
          numberOfLines={2}
        >
          {props.description}
        </Text>

        <View
          style={{
            flexDirection: "row-reverse",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {props.price}
          </Text>
          <Text
            style={{
              backgroundColor: props.qt > 0 ? COLORS.primary : "red",
              borderRadius: 20,
              paddingLeft: 10,
              paddingRight: 10,
              height: 20,
              margin: 5,
              color: COLORS.white,
            }}
          >
            {disponible}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default HorizontalProductsCard;