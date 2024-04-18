import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useState } from 'react';


const largura = Dimensions.get("screen").width
const altura = Dimensions.get("screen").height


export default function App() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("Default")

  function addContador() {
    setContador(contador + 1)
  }
  function SubContador() {
    setContador(contador - 1)
  }
  function ZerarContador() {
    setContador(0)
  }
  function MultiContador() {
    setContador(contador * 2)
  }
  function DivContador() {
    setContador(contador / 2)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aula de Hooks - use State</Text>
      <Text style={styles.titulo}>Contagem: {contador}</Text>

      <View style={styles.container_button}>
        <TouchableOpacity style={styles.button} onPress={addContador}>
          <Text style={styles.titulo}>Somar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={SubContador}>
          <Text style={styles.titulo}>Subtrair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={ZerarContador}>
          <Text style={styles.titulo}>Zerar</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={MultiContador}>
          <Text style={styles.titulo}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={DivContador}>
          <Text style={styles.titulo}>Dividir</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.ViewTexto}>
        <Text style={styles.titulo}>Trabalhando com Inputs</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome:' onChangeText={texto => setNome(texto)} value={nome}>
        </TextInput>
        <Text style={styles.titulo}>Texto: {nome}</Text>
      </View>

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
  container_button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#03CB0F',
    borderWidth: 2,
    borderRadius: 20,
    width: largura,
    height: 80,
    padding: 20,
    marginTop: 10,
  },
  titulo: {
    marginTop:10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ViewTexto: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#66B6FC',
    // padding:100,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    width: Dimensions.get("screen").width,
    // height: Dimensions.get("screen").height,
    borderRadius: 20,
    fontSize: 26,
    padding: 10,
    textAlign:'center',
  },
  button2:{
    backgroundColor: '#F51515',
    borderWidth: 2,
    borderRadius: 20,
    width: largura,
    height: 80,
    padding: 20,
    marginTop: 10,
  },
  button3:{
    backgroundColor: '#66B6FC',
    borderWidth: 2,
    borderRadius: 20,
    width: largura,
    height: 80,
    padding: 20,
    marginTop: 10,
  },
});
