import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
        <Text style={css.h1}>BEM VINDOS</Text>
        <img src={require('../components/Img/pant_index.png')} style={{width: 300, height: 400}}/>
        <Button title='Ir para Login' onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

const css = StyleSheet.create({
  h1:{
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40
  }
})