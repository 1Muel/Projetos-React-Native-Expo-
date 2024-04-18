import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import TextoPadrao from "../Componentes/Texto";
import Button from "../Componentes/Button";
import { useRoute } from "@react-navigation/native";

const Detalhes = () => {

    const route = useRoute();
    const { item } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.container_descricao}>
                <Image style={styles.img} source={item.foto}>

                </Image>
                <TextoPadrao texto={item.nome}></TextoPadrao>
                <TextoPadrao texto={`R$ ${item.preco.toFixed(2)}`}></TextoPadrao>
                <TextoPadrao texto={` Marca: ${item.marca}`}></TextoPadrao>
                
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
    img: {
        width: 250,
        height: 250,
        // backgroundColor:'red'
    },
    container_descricao:{
        borderWidth: 1,
        borderColor: "#D7D7D7",
        borderRadius:15,
    },

});

export default Detalhes;