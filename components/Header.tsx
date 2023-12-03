import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles1.container}>
      <Image style={styles1.img} source={props.img}></Image>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    paddingTop: 90,
    backgroundColor: '#353956',
    width: 400,
    height:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 100,
  },
});
