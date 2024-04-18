import  React  from "react";
import { View, StyleSheet } from "react-native";

import TextoPadrao from "./src/Componentes/Texto";

const Detalhes = () => {
    return (
        <View style={styles.container}>
            <TextoPadrao texto={'Tela Detalhes'} tamanhoFonte={30}/>
        </View>
    )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#fff',

  },
})

export default  Detalhes;