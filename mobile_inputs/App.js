import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{fontSize:20}}>Minha Primeira Tela com Input</Text>
      <TextInput keyboardType = 'default' style = {styles.Input}  />
      <TouchableOpacity style={styles.botao}>
        <Text>Clique aqui</Text>
        </TouchableOpacity>    
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input:{
  backgroundColor: "white",
  width: 300,
  height:40,
  borderRadius: 40,
  borderWidth: 2,
  fontSize:18,
  padding: 10,
  },
  botao:{
    backgroundColor:'red'
  },
});
 