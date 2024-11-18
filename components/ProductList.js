import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProductCard from "./ProductCard";

const ProductList = ({ navigation }) => {
  // Dados do produto diretamente no componente
  const data = [
    {
      id: "1",
      imageSource: require("../assets/item.png"),
      price: "R$ 99,90",
      rating: "4.5",
    },
    {
      id: "2",
      imageSource: require("../assets/item.png"),
      price: "R$ 149,90",
      rating: "4.8",
    },
    {
      id: "3",
      imageSource: require("../assets/item.png"),
      price: "R$ 199,90",
      rating: "4.7",
    },
    {
      id: "4",
      imageSource: require("../assets/item.png"),
      price: "R$ 249,90",
      rating: "4.6",
    },
  ];

  const renderItem = ({ item }) => (
    <ProductCard
      imageSource={item.imageSource}
      price={item.price}
      rating={item.rating}
    />
  );

  return (
    <View style={styles.container}>
      {/* Ordenar por e Filtros */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Ordenar por</Text>
            <Icon
              name="chevron-down"
              size={16}
              color="#333"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Filters")}
        >
          <View style={styles.buttonContent}>
            <Icon name="filter" size={16} color="#333" style={styles.icon} />
            <Text style={styles.buttonText}>Filtros</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Lista de Produtos */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "#000000",
    marginHorizontal: 20,
    fontStyle: "Inter",
  },
  icon: {
    marginHorizontal: -8,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default ProductList;
