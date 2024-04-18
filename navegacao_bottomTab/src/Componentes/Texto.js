import  React  from "react";
import { StyleSheet,Text,Dimensions } from "react-native";


const largura = Dimensions.get('screen').width

const TextoPadrao = ({texto, tamanhoFonte}) => {
    return(
        
            <Text style={[styles.texto,{fontSize:tamanhoFonte}]}>{texto}</Text>
        
    )
}

const styles = StyleSheet.create({
    texto:{
        textAlign:'center',
        // width:largura / 2,
        
    },
})

export default TextoPadrao;