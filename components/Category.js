import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Category = ({ imageSource, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza os itens horizontalmente
    justifyContent: "center", // Centraliza verticalmente (se necessário)
    backgroundColor: "dodgerblue",
    width: 350,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 2, // Espaço entre o texto e a imagem
    marginTop: 4,
    textAlign: "center",
    fontStyle: "Inter",
  },
  image: {
    width: 350,
    height: 120,
  },
});

export default Category;
