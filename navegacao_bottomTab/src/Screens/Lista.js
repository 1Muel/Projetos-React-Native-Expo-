import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";



import TextoPadrao from "../Componentes/Texto";
import Button from "../Componentes/Button";



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
    return (
        <ScrollView>
            {produtos.map((item, indexs) => (

                <View style={styles.container}>
                    <View style={styles.linha} key={indexs}>
                        <View style={styles.item}>

                            <TextoPadrao texto={item.nome} tamanhoFonte={30} />
                            <TextoPadrao texto={`R$ ${item.preco.toFixed(2)}`} tamanhoFonte={20} />
                            <TextoPadrao texto={` Marca: ${item.marca}`} tamanhoFonte={15} />
                            <Image style={styles.img} source={item.foto} />



                        </View>

                    </View>
                </View>



            ))}


        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        // alignContent: 'center',
        backgroundColor: '#ECF0F1',
        // alignItems: 'center'
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    item: {
        alignItems: 'center'

    },
    img: {
        width: 150,
        height: 150,
    },
    linha: {
        width: '50%',
        padding: 10,
    },

})

export default Lista;