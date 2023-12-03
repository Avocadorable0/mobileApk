import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as font from 'expo-font';
import Header from '../components/Header';
import Table from '../components/Table';
import logo from '../assets/logo.png';


export default function Overall() {
    const [dataOverall, setDataOverall] = useState([]);
    const [dataHome, setDataHome] = useState([]);
    const [dataAway, setDataAway] = useState([]);

    useEffect(() => {
    fetch('https://ws-foot-stat.onrender.com/summaryOverall')
        .then((response) => response.json())
        .then((data) => setDataOverall(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        fetch('https://ws-foot-stat.onrender.com/summaryHome')
        .then((response) => response.json())
        .then((data) => setDataHome(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        fetch('https://ws-foot-stat.onrender.com/summaryAway')
        .then((response) => response.json())
        .then((data) => setDataAway(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (

        <View style={styles.page}>
            <Header img={logo}></Header>
            <ScrollView>
            <Table data={dataOverall} titre="Summary Overall"></Table>
            <Table data={dataHome} titre="Summary Home"></Table>
            <Table data={dataAway} titre="Summary Away"></Table>
            </ScrollView>
        </View>
    );
  }

  const styles = StyleSheet.create({
    page:{
      backgroundColor:'#54668E',
      flex:1,
    }
  });
  