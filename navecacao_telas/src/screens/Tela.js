import { React } from "react";
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native';
import { ButtonT } from "../componentes/Button";
import { TextTitulo } from "../componentes/Text";

const largura = Dimensions.get('screen').width
const altura = Dimensions.get('screen').height


export default function Tela2({navigation}) {
    return (
      <View style={styles.container}>
        <TextTitulo msg={"TELA 2"} tamanhotexto={40}/>
        <ButtonT textobotao={"Voltar para Home"} acao={() => navigation.navigate('Home')}/>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
