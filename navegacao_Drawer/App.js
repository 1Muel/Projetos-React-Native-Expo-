
import * as React from 'react';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./src/Screens/Home";
import Lista from "./src/Screens/Lista";
import Detalhes from "./src/Screens/Detalhes";


const Tab = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerStyle:{backgroundColor:"#2CA1F3"}}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lista" component={Lista} />
        <Tab.Screen name="Detalhes" component={Detalhes} options={{headerStyle: {backgroundColor: "#2CA1F3"}}} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}
;