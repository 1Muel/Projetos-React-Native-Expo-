import  React  from "react";
import { TouchableaOpacity, StyleSheet,Text,View,Dimensions } from "react-native";


const largura = Dimensions.get('screen').width
const altura = Dimensions.get('screen').height

const Button = ({textoBotao}) => {
    return(
        <TouchableaOpacity style={styles.botao}>
            <Text style={styles.texto}>{textoBotao}</Text>
        </TouchableaOpacity>
    )
}

const styles = StyleSheet.create({
    botao:{
        margin: largura / 2,
        borderRadius:20,
        width:"50%",
        height:"10%",
        backgroundColor: 'red',

    },
    texto:{
        textAlign:'center',
        width:largura / 2,
    },
})

export default Button;