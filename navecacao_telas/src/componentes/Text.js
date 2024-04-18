import { React } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width
const altura = Dimensions.get('screen').height

const TextTitulo = ({ msg, tamanhotexto }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize:tamanhotexto , fontWeight: 'bold' }} >{msg}</Text>
        </View>
    )
}





const styles = StyleSheet.create({

});

export { TextTitulo }