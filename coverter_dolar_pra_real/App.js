import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native';
import { useState } from "react";
import { useFonts } from 'expo-font';



const fundo = require('./assets/fundo/walpaper.png')

const largura = Dimensions.get("screen").width

export default function App() {

  const [Real, setContador] = useState(0);


  function ConverterDolar() {
    setContador(Real * 5)
  }
  function ZerarContador() {
    setContador(0)
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={fundo}
        style={styles.imgFundo}>
        <Text style={styles.h1}>
          CONVERTER DÓLAR PARA REAL
        </Text>

        <View style={styles.container_input}>
          <TextInput onChangeText={texto => setContador(texto)} value={Real} placeholder='Dólar' keyboardType='numeric' style={styles.Input} ></TextInput>
          <Text style={styles.titulo1}>Real: {Real}R$</Text>
          <TouchableOpacity style={styles.button} onPress={ConverterDolar}>
            <Text style={styles.titulo}>Converter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={ZerarContador}>
            <Text style={styles.titulo}>Zerar</Text>
          </TouchableOpacity>
        </View>




      </ImageBackground>






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
  imgFundo: {
    width: '100%',
    height: '100%',
  },
  titulo: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: 'gray',
    color: 'black',
  },
  container_button: {
    // backgroundColor: 'red',
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    width: 180,
    height: 50,
    marginTop: 120,
  },
  button1: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    width: 180,
    height: 50,
    marginTop: 10,
  },
  Input: {
    backgroundColor: "white",
    width: 150,
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    marginTop: 0,
    color: 'black',
  },
  container_input: {
    alignItems: 'center',
    marginTop: 100,
    // backgroundColor: 'red'
  },
  titulo1: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  h1: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    
  },
});
