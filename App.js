import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import SearchInput from "./components/SearchInput";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import SearchFilters from "./components/Filters";
import { createStackNavigator } from "@react-navigation/stack"; // Importa o Stack Navigator

// Telas para cada aba
const HomeScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <SearchInput />
    <CategoryList></CategoryList>
  </SafeAreaView>
);

const SearchScreen = ({ navigation }) => (
  <SafeAreaView style={styles.screenContainer}>
    <SearchInput />
    <ProductList navigation={navigation} />
  </SafeAreaView>
);

const handleApply = (filters) => {
  Alert.alert("Filtros Aplicados", JSON.stringify(filters, null, 2));
  // Aqui você pode integrar os filtros com sua lógica de busca
};

// Função chamada quando o usuário clica em "Cancelar"
const handleCancel = () => {
  Alert.alert("Filtros", "Ação cancelada");
  // Navegar para outra tela ou fechar o modal, se necessário
};

const ProfileScreen = () => (
  <SafeAreaView style={styles.screenContainer}>
    <SearchFilters onApply={handleApply} onCancel={handleCancel} />
  </SafeAreaView>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerShown: false, // Remove o cabeçalho superior
      tabBarShowLabel: false, // Remove os textos das abas
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Search") {
          iconName = "basket";
        } else if (route.name === "Profile") {
          iconName = "person";
        }

        return <Icon name={iconName} size={28} color={color} />;
      },
      tabBarStyle: styles.tabBar, // Estilo personalizado da Tab Bar
      tabBarActiveTintColor: "#D64444", // Cor dos ícones ativos
      tabBarInactiveTintColor: "#000000", // Cor dos ícones inativos (mais claro)
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      {/* Stack Navigator para tela Details */}
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
          headerTintColor: "#000", // Cor da seta de voltar (preta)
        }}
      >
        {/* Tela principal do Tab Navigator */}
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            headerShown: false, // Remove o cabeçalho para o Tab Navigator
          }}
        />

        {/* Adicionando a nova tela "DetailsScreen" */}
        <Stack.Screen
          name="Filters"
          component={SearchFilters}
          options={{
            headerShown: true, // Remove o cabeçalho para o Tab Navigator
            headerTitle: "", // Remove o título
            headerBackTitle: "Filtros",
            headerTitleStyle: "Inter",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBar: {
    height: 70,
    backgroundColor: "dodgerblue", // Cor de fundo da Tab Bar
    paddingBottom: 5,
    paddingTop: 5,
    borderTopWidth: 0, // Remove a borda superior
  },
});

export default App;
