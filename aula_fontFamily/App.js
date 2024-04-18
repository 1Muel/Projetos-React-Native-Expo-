import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'fonte1': require('./assets/fonts/e.ttf'),
    'fonte2': require('./assets/fonts/q.ttf'),
    'fonte3': require('./assets/fonts/w.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style = {styles.font1}>Open up App.js to start working on your app!</Text>
      <Text style = {styles.font2}>Open up App.js to start working on your app!</Text>
      <Text style = {styles.font3}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font1:{
    fontFamily:'fonte1',
    fontSize:30,
    color:'blue',
  },
  font2:{
    fontFamily:'fonte2',
    fontSize:30,
    color:'red',
  },
  font3:{
    fontFamily:'fonte3',
    fontSize:30,
    color:'green',
  }
});
