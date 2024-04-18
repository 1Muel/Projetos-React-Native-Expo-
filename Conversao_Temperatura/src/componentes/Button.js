import { React } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width
const altura = Dimensions.get('screen').height


const ButtonT = ({textobotao, acao}) => {
    return (
        <TouchableOpacity style={styles.Button} onPress={acao}>
            <Text style={styles.texto} >{textobotao}</Text>
        </TouchableOpacity>
    )
}
const Button_Converter = ({acao, textobotao}) => {
    return (
        <TouchableOpacity style={styles.Button_Converter} onPress={acao}>
            <Text style={styles.texto}>{textobotao}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    Button: {
        marginTop: 0,
        borderRadius:20,
        width:"50%",
        height:"10%",
        backgroundColor: 'red',
        
    },
    Button_Converter:{
        margin: 10,
        borderRadius:10,
        width:150,
        height:50,
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        marginTop:7,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize:23,
    },
});

export{ButtonT, Button_Converter}