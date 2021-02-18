import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={css.container}>
        <Text style={css.h1}>ENTRAR</Text>
        <TextInput style={css.input} keyboardType={'email-address'} placeholder={'Digite seu email'} />
        <TextInput style={css.input} secureTextEntry={true} placeholder={'Digite sua senha'} />
        <Button title='Entrar' onPress={() => navigation.navigate('Produtos')}/>
    </View>
  );
}

const css = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  h1:{
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 50
  },
  input:{
    width: 300,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 30,
    textAlign: 'center',
    marginBottom: 5,
  }
})
