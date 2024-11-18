import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const SearchInput = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Pesquisar..."}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Icon name="search1" style={styles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    marginTop: 20,
    height: 40,
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  button: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 18,
    color: "#000000",
  },
});

export default SearchInput;
