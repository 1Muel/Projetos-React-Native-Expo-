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



const styles = StyleSheet.create({
    Button: {
        margin: 10,
        borderRadius:20,
        width:200,
        height:30,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize:23,
    },
});

export{ButtonT}