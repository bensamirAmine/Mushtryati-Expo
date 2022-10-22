import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import Categories from "../components/Home/Categories";
import FilterModal from "../components/Home/FilterModal";
import ReastaurentItem from "../components/Home/ReastaurentItems";
import HorizontalProductsCard from "../components/HorizontalProductsCard";
import SectionTitle from "../components/SectionTitle";
import VerticalProductsCard from "../components/VerticalProductsCard";
import { adresseIp } from "../config/constants";

const products = [
  {
    id: 0,
    image: require("../assets/images/printer1.png"),
    title: "Printer 1",
    description:
      "Product description some text placeholder for description. Product description some text placeholder for description",
  },
  {
    id: 0,
    image: require("../assets/images/printer2.png"),
    title: "Printer 2",
    description:
      "Product description some text placeholder for description. Product description some text placeholder for description",
  },
  {
    id: 0,
    image: require("../assets/images/printer1.png"),
    title: "Printer 3",
    description:
      "Product description some text placeholder for description. Product description some text placeholder for description",
  },
  {
    id: 0,
    image: require("../assets/images/printer2.png"),
    title: "Printer 4",
    description:
      "Product description some text placeholder for description. Product description some text placeholder for description",
  },
];

const productsURL =
  "https://" + adresseIp + "/index.php?route=api/custom/getListProducts";
const searchURL =
  "https://" + adresseIp + "/index.php?route=api/custom/searchProducts";
const searchByCatURL =
  "https://" + adresseIp + "/index.php?route=api/custom/productsByCat";
const Index = ({ navigation, searchText }) => {
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [isLoadingSaleTops, setLoadingSaleTops] = React.useState(true);
  const [productsFromDB, setProductsFromDB] = React.useState([]);
  const [saleTopsFromDB, setSaleTopsFromDB] = React.useState([]);
  const [searched, setSearched] = React.useState([]);
  const [typedText, setTypedText] = React.useState(searchText);
  const [category, setCategory] = React.useState(-1);
  let width = Dimensions.get("window").width;

  React.useEffect(() => {
    fetchLatest();
    fetchFeatured();
    if (searchText != "") {
      fetchSearch();
    }
    if (category > 0) {
      fetchByCat();
    }
  }, [searchText, category]);

  function fetchLatest() {
    fetch(productsURL)
      .then((response) => response.json())
      .then((json) => setProductsFromDB(json.latests))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  function fetchByCat() {
    setLoading(true);
    fetch(searchByCatURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: category,
      }),
    })
      .then((response) => response.json())
      .then((json) => setSearched(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  function fetchSearch() {
    setLoading(true);
    fetch(searchURL, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: searchText,
      }),
    })
      .then((response) => response.json())
      .then((json) => setSearched(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function fetchFeatured() {
    fetch(productsURL)
      .then((response) => response.json())
      .then((json) => setSaleTopsFromDB(json.saleTops))
      .catch((error) => console.error(error))
      .finally(() => setLoadingSaleTops(false));
  }

  const childToParent = (childdata) => {
    setCategory(childdata);
    console.log(childdata);
  };
  return (
    <View>
      <Categories childToParent={childToParent} />
      {searchText == "" && category == -1 && (
        <View>
          <SectionTitle title="أحدث المنتوجات" />
          {isLoading ? (
            <Text>الرجاء الانتظار...</Text>
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {productsFromDB.map((item, index) => (
                <VerticalProductsCard
                  key={index}
                  title={item.name}
                  description={item.description}
                  price={item.price.replace(/<[^>]*>?/gm, "")}
                  imageUri={item.image}
                  id={item.id}
                  model={item.model}
                  weight={item.weight}
                  qt={item.qt}
                />
              ))}
            </ScrollView>
          )}

          <SectionTitle title="ترشيحاتنا" />
          {isLoadingSaleTops ? (
            <Text>الرجاء الانتظار...</Text>
          ) : (
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              {saleTopsFromDB.map((item, index) => (
                <HorizontalProductsCard
                  key={index}
                  title={item.name}
                  description={item.description}
                  price={item.price.replace(/<[^>]*>?/gm, "")}
                  imageUri={item.image}
                  id={item.id}
                  model={item.model}
                  weight={item.weight}
                  qt={item.qt}
                />
              ))}
            </ScrollView>
          )}
        </View>
      )}
      {searchText != "" && category == -1 && (
        <>
          {isLoading ? (
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 500,
                width: width,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              الرجاء الانتظار...
            </Text>
          ) : (
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              {searched.map((item, index) => (
                <HorizontalProductsCard
                  key={index}
                  title={item.product.name}
                  description={item.description}
                  price={item.price.replace(/<[^>]*>?/gm, "")}
                  imageUri={item.imageURL}
                  id={item.product.product_id}
                  model={item.product.model}
                  weight={item.product.weight}
                  qt={item.product.quantity}
                />
              ))}
            </ScrollView>
          )}
        </>
      )}
      {category > 0 && searchText == "" && (
        <>
          {isLoading ? (
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 500,
                width: width,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              الرجاء الانتظار...
            </Text>
          ) : (
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              {searched.map((item, index) => (
                <HorizontalProductsCard
                  key={index}
                  title={item.product.name}
                  description={item.description}
                  price={item.price.replace(/<[^>]*>?/gm, "")}
                  imageUri={item.imageURL}
                  id={item.product.product_id}
                  model={item.product.model}
                  weight={item.product.weight}
                  qt={item.product.quantity}
                />
              ))}
            </ScrollView>
          )}
        </>
      )}
    </View>
  );
};

export default Index;
