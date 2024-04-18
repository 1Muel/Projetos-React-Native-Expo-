import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Home from "./src/screens/Home";
import Tela2 from "./src/screens/Tela_Temp";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' >
        <stack.Screen name='Home' component={Home} options={{ title: ' Estou na Tela Home' }} />
        <stack.Screen name='Tela2' component={Tela2} options={{ title: 'Conversor de Temperatura' }} />
      </stack.Navigator>

    </NavigationContainer>
  );
}
