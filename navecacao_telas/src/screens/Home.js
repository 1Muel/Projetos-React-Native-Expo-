import { React } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions,  } from 'react-native';
import { ButtonT } from "../componentes/Button";
import { TextTitulo } from "../componentes/Text";


const largura = Dimensions.get('screen').width
const altura = Dimensions.get('screen').height


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
           <TextTitulo msg={"TELA HOME"} tamanhotexto={30}  />
            <ButtonT textobotao={"Ir para tela 2"} acao={() => navigation.navigate('Tela2')}/>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
