import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Itens from '../components/Itens';

const dados = [
    {
      id: Math.random(),
      imagem:  'fogao.png',
      descricao: "Fogao 5 Bocas Mesa de Inox Sirius Plus",
      preco: "859,00",
      precofinal: "610,99"
    },
    {
      id: Math.random(),
      imagem:  'televisao1.png',
      descricao: "Smart TV LED 32 Samsung 32T4300A",
      preco: "1.399,00",
      precofinal: "1.099,10"
    },
    {
      id: Math.random(),
      imagem:  'impressora1.png',
      descricao: "Multifuncional EPSON Tanque de Tinta L396",
      preco: "1.299,00",
      precofinal: "1.169,10"
    }
  ]
  

export default function Produtos({navigation}) {
  return (
    <SafeAreaView style={css.container}>
    <View>
        <Text style={css.h1}>Página de Produtos</Text>

        <FlatList data={dados} keyExtractor={(item) => `${item.id}`} renderItem={({item}) => (
            <Itens imagem={item.imagem} descricao={item.descricao} preco={item.preco} precofinal={item.precofinal}/>
        )}/>

        <TouchableOpacity style={css.botao} onPress={() => navigation.navigate('Home')}>
            <Text style={css.textoBotao}>Voltar</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
    botao:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        padding: 10
    },
    container:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoBotao:{
        fontSize: 15,
        padding: 5,
        fontWeight: 600
    },
    h1:{
      fontSize: 25,
      textAlign: 'center',
      backgroundColor: 'gray',
      padding: 10, 
      margin: 5,
      color: '#fff',
      borderRadius: 14

    }
})
