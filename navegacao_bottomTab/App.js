import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
 
 
import Home from "./src/Screens/Home";
import Lista from "./src/Screens/Lista";
 
 
const Tab= createBottomTabNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{headerStyle:{backgroundColor:'#E1E1E1'}}}>
    <Tab.Screen name="Home" component={Home} options={{
      tabBarIcon:({color, size}) => (
        <Ionicons name="home" size={32} color="white" />
      ),
      headerTintColor:'#777777',
      tabBarActiveBackgroundColor: "#484848",
      tabBarInactiveBackgroundColor: "#484848"
    }} />
 
<Tab.Screen name="Lista" component={Lista} options={{
      tabBarIcon:({color, size}) => (
        <Ionicons name="list" size={32} color="white" />
      ),
      headerTintColor:'#777777',
      tabBarActiveBackgroundColor: "#484848",
      tabBarInactiveBackgroundColor: "#484848"
    }} />
 
 
   
   
       </Tab.Navigator>
    </NavigationContainer>
   
  );
}
 
 
 