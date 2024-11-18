import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

// Tags "Novo" e "Usado"
const TAGS = {
  NOVO: "Novo",
  USADO: "Usado",
};

// Componente InputFilter
const InputFilter = ({ label, placeholder, onChangeText, value }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

// Componente de Tags (para seleção de tags)
const TagsFilter = ({ label, tags, selectedTag, onTagPress }) => {
  return (
    <View style={styles.tagsContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.tags}>
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[styles.tag, selectedTag === tag && styles.selectedTag]}
            onPress={() => onTagPress(tag)}
          >
            <Text
              style={[
                styles.tagText,
                selectedTag === tag && styles.selectedTagText,
              ]}
            >
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Componente SearchFilters que inclui 3 campos de filtro e tags
const SearchFilters = () => {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagPress = (tag) => {
    // Se a tag já estiver selecionada, desmarque-a, caso contrário, marque-a
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const handleApplyFilters = () => {
    Alert.alert(
      "Filtros Aplicados",
      `Filtros: ${filter1}, ${filter2}, ${filter3}\nTag Selecionada: ${selectedTag}`
    );
  };

  return (
    <View style={styles.container}>
      <InputFilter
        label="Preço mínimo"
        placeholder="Insira o preço mínimo"
        value={filter1}
        onChangeText={setFilter1}
      />
      <InputFilter
        label="Preço máximo"
        placeholder="Insira o preço máximo"
        value={filter2}
        onChangeText={setFilter2}
      />
      <InputFilter
        label="Distância máxima (km)"
        placeholder="Insira a distância máxima"
        value={filter3}
        onChangeText={setFilter3}
      />

      <TagsFilter
        label="Condição da ferramenta"
        tags={Object.values(TAGS)} // Usando os valores do enum de tags
        selectedTag={selectedTag}
        onTagPress={handleTagPress}
      />

      {/* Botão de Aplicar Filtros */}
      <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
        <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  tagsContainer: {
    marginVertical: 20,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Diminuído o borderRadius
    marginRight: 10,
    marginBottom: 10,
  },
  selectedTag: {
    backgroundColor: "#0A29A3", // Cor para a tag selecionada
  },
  tagText: {
    fontSize: 16, // Aumentado o tamanho da fonte
    color: "#333", // Cor do texto quando não está selecionado
  },
  selectedTagText: {
    color: "#fff", // Cor do texto quando a tag está selecionada
  },
  applyButton: {
    backgroundColor: "#0A29A3",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  applyButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
});

export default SearchFilters;
