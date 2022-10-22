import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../config/colors";
import { useNavigation } from "@react-navigation/native";

function VerticalProductsCard(props) {
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
        flexDirection: "column",
        borderRadius: 20,
        backgroundColor: COLORS.white,
        height: 320,
        width: 200,
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
          width: 170,
          height: 200,
          resizeMode: "contain",
        }}
        //source={ props.imageUri }
        source={{
          uri: props.imageUri,
        }}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
          numberOfLines={1}
        >
          {props.title}
        </Text>
        <Text
          style={{
            color: "#5B5A5F",
          }}
          numberOfLines={3}
        ></Text>

        <Text
          style={{
            fontSize: width / 24,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {props.price}
        </Text>
      </View>
      <Text
        style={{
          position: "absolute",
          top: 15,
          right: 15,
          backgroundColor: props.qt > 0 ? COLORS.primary : "red",
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          color: COLORS.white,
        }}
      >
        {disponible}
      </Text>
    </TouchableOpacity>
  );
}

export default VerticalProductsCard;