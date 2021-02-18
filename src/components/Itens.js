import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

export default function Itens({imagem, descricao, preco, precofinal}) {
  return (
    <View style={css.container}>
      <img src={require(`../components/Img/produtos2/${imagem}`)} style={{width: 300}}/>
      <Text style={css.descricao}>{descricao}</Text>
      <Text style={css.preco}>R$ {preco}</Text>
      <Text style={css.precofinal}>R$ {precofinal}</Text>
    </View>
  );
}

const css = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid pink',
        padding: 10,
        margin: 15
    },
    descricao:{
      fontSize: 13,
      fontFamily: 'Arial',
      fontWeight: 600,
      margin: 5
    },
    preco:{
      color: 'red',
      fontStyle: 'italic',
      fontSize: 15,
      textDecorationLine:'line-through'
    },
    precofinal:{
      color: 'blue',
      fontSize: 23,
      fontWeight: 600
    }
})
