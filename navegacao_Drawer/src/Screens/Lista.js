import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image, Text } from "react-native";




import TextoPadrao from "../Componentes/Texto";
import Button from "../Componentes/Button";

import { useNavigation } from "@react-navigation/native";





const produtos = [
    {
        nome: "Adidas Tênis ADI2000",
        preco: 759.59,
        marca: "Adidas",
        foto: require("../../assets/img/adi2000.png"),

    },
    {
        nome: "Air force",
        preco: 100,
        marca: "Nike",
        foto: require('../../assets/img/air.png'),

    },
    {
        nome: "Adidas Campus",
        preco: 400,
        marca: "Adidas",
        foto: require('../../assets/img/campus.png'),

    },
    {
        nome: "Adidas Forum Low",
        preco: 200,
        marca: "Adidas",
        foto: require('../../assets/img/ForumLow.png'),

    },
    {
        nome: "Puma 180",
        preco: 300,
        marca: "Puma",
        foto: require('../../assets/img/Puma180.png'),

    },
    {
        nome: "Puma Slipstream",
        preco: 300,
        marca: "Puma",
        foto: require('../../assets/img/Slpstream.png'),

    },
    {
        nome: "Travis Scott",
        preco: 300,
        marca: "Nike",
        foto: require('../../assets/img/TravisJordan.png'),

    },
    {
        nome: "Vans Knu",
        preco: 300,
        marca: "vans",
        foto: require('../../assets/img/vans.png'),

    },
]



const Lista = () => {


    const navigation = useNavigation();

    const verDetalhes = (indice) => {
    


        const produtoSelecionado = produtos[indice]
        navigation.navigate('Detalhes',{item:produtoSelecionado})
    
    }
    
    return (
        <ScrollView>

            <View style={styles.container}>
                {produtos.map((item, index) => (
                    <View style={styles.linha} key={index}>
                        <View style={styles.item}>

                            <TextoPadrao texto={item.nome} tamanhoFonte={30} />
                            <TextoPadrao texto={`R$ ${item.preco.toFixed(2)}`} tamanhoFonte={20} />
                            <TextoPadrao texto={` Marca: ${item.marca}`} tamanhoFonte={15} />
                            <Image style={styles.img} source={item.foto} />
                            <Text onPress={() => verDetalhes(index)} style={{ color: "red" }}>Ver Detalhes</Text>


                        </View>

                    </View>

                ))}
            </View>





        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexWrap: "wrap",
        flexDirection: "row",

    },
    item: {
        alignItems: 'center',
        // backgroundColor:'red',
        borderRadius:15,
        borderWidth:1,
        borderColor:"#D7D7D7"
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    linha: {
        width: '50%',
        padding: 10,
    },

})

export default Lista;