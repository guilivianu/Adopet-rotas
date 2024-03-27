import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Imports páginas
import Home from "../paginas/Home";
import Login from "../paginas/Login";
import Cadastro from "../paginas/Cadastro";
import ListaPets from "../paginas/ListaPets";
import Mensagem from "../paginas/Mensagem";
import Sobre from "../paginas/Sobre";
import Perfil from "../paginas/Perfil";

import { Image } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Lista de Pets"
        component={ListaPets}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/pets-green.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={Mensagem}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/mensagens.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#36D6AD",
        },
        drawerLabelStyle: {
          color: "#FFF",
          fontSize: 14,
          fontFamily: "PoppinsRegular",
          fontWeight: "400",
          lineHeight: 20,
        },
      }}
    >
      <Drawer.Screen
        name="Lista de Pets"
        component={TabRoutes}
        options={{
          drawerLabel: "Pets para adoção",
          drawerIcon: () => (
            <Image
              source={require("../assets/pets.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerTransparent: true,
          title: "",
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerLabel: "Perfil",
          headerTransparent: true,
          title: "",
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={Home}
        options={{
          drawerLabel: "Sair",
          headerTransparent: true,
          title: "",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitle: "", headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
