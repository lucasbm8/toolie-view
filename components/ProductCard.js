import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProductCard = ({ imageSource, price, rating }) => {
  return (
    <View style={styles.container}>
      {/* Imagem do Produto */}
      <Image
        source={imageSource}
        style={styles.productImage}
        resizeMode="cover"
      />

      {/* Container para Preço e Avaliação */}
      <View style={styles.infoContainer}>
        {/* Preço */}
        <Text style={styles.priceText}>Preço: {price} reais/dia</Text>

        {/* Avaliação */}
        <View style={styles.ratingContainer}>
          <Icon name="star-outline" size={16} color="#000000" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 2, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 20,
  },
  productImage: {
    height: 150,
    width: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2, // Borda inferior
    borderLeftWidth: 2, // Borda esquerda
    borderRightWidth: 2, // Borda direita
    borderColor: "dodgerblue", // Cor da borda
    borderBottomLeftRadius: 10, // Arredondamento no canto inferior esquerdo
    borderBottomRightRadius: 10, // Arredondamento no canto inferior direito
    backgroundColor: "#fff",
  },
  priceText: {
    fontSize: 16,
    color: "#000000",
    fontStyle: "Inter",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    color: "#000000",
  },
});

export default ProductCard;
