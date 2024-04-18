import { React } from "react";
import { StyleSheet, Text, View,TouchableOpacity, Dimensions,TextInput } from 'react-native';
import { ButtonT, Button_Converter } from "../componentes/Button";
import { TextTitulo } from "../componentes/Text";
import { useState } from 'react';





const largura = Dimensions.get('screen').width
const altura = Dimensions.get('screen').height




export default function Tela2({navigation}) {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  function ConverterTemp() {
    const fahrenheitFloat = parseFloat(fahrenheit)
    if ((fahrenheitFloat)) {
      const celsiusTemp = (fahrenheitFloat - 32) * 5 / 9;
      setCelsius(celsiusTemp.toFixed(2));
    } else {
      alert("por favor insira um valor correto")
    }
  }
    return (
      <View style={styles.container}>
        <TextTitulo msg={"Insira a Temperatura em Fahrenheit"} tamanhotexto={20}/>
        <TextInput style={styles.input} onChangeText={(text) => setFahrenheit(text)} value={fahrenheit} keyboardType="numeric" placeholder="insira aqui"/>





      <Text style={{fontSize:20,}} > {`${fahrenheit} é igual a  ${celsius}`}</Text>        
        <Button_Converter textobotao={"Converter"}  acao={ConverterTemp}/>

        <ButtonT textobotao={"Voltar para Home"} acao={() => navigation.navigate('Home')}/>


      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        marginTop:100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
      backgroundColor:"white",
      width:300,
      height:40,
      borderRadius:40,
      borderWidth:2,
      fontSize:18,
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center'
    },
});
