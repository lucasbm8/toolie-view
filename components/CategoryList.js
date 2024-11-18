import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Category from "./Category";

// Enum para tipos de itens
const ItemType = {
  IMAGE: "image",
  VIDEO: "video",
  TEXT: "text",
};

// Dados da lista com enum e referência
const data = [
  {
    id: "1",
    text: "Construção",
    type: ItemType.IMAGE,
    reference: "https://example.com/image1",
    imageSource: require("../assets/construcao.png"),
  },
  {
    id: "2",
    text: "Jardinagem",
    type: ItemType.IMAGE,
    reference: "https://example.com/image2",
    imageSource: require("../assets/jardinagem.png"),
  },
  {
    id: "3",
    text: "Eletricista",
    type: ItemType.IMAGE,
    reference: "https://example.com/image3",
    imageSource: require("../assets/eletricista.png"),
  },
  {
    id: "4",
    text: "Encanamento",
    type: ItemType.IMAGE,
    reference: "https://example.com/image3",
    imageSource: require("../assets/encanamento.png"),
  },
];

const CategoryList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Category text={item.text} imageSource={item.imageSource} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  list: {
    paddingBottom: 0,
  },
  itemContainer: {
    marginBottom: 20,
  },
});

export default CategoryList;
