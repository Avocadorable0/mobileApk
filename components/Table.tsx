import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, FlatList } from 'react-native';

export default function Table({ data,titre }) {
  const renderRow = ({ item }) => (
    <View style={styles1.row}>
      <Text style={styles1.cell}>{item[0]}</Text>
      <Text style={styles1.cell}>{item[1]}</Text>
      <Text style={styles1.cell}>{item[2]}</Text>
      <Text style={styles1.cell}>{item[3]}</Text>
      <Text style={styles1.cell}>{item[4]}/{item[5]}</Text>
      <Text style={styles1.cell}>{item[6]}</Text>
      <Text style={styles1.cell}>{item[7]}</Text>
      <Text style={styles1.cell}>{item[8]}</Text>
      <Text style={styles1.cell}>{item[9]}</Text>
    </View>
  );

  return (
    <>
      <View style={styles1.table}>
        <Text style={styles1.titre}>{titre}</Text>
        <View style={styles1.header}>
          <Text style={styles1.headerCell}>Equi</Text>
          <Text style={styles1.headerCell}>Tourn</Text>
          <Text style={styles1.headerCell}>Buts</Text>
          <Text style={styles1.headerCell}>Tir</Text>
          <Text style={styles1.headerCell}>Cart</Text>
          <Text style={styles1.headerCell}>Poss%</Text>
          <Text style={styles1.headerCell}>Pass%</Text>
          <Text style={styles1.headerCell}>Duel Aer</Text>
          <Text style={styles1.headerCell}>Note</Text>
        </View>
        <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={(item) => item[0]}
      />
      </View>
    </>
  );
}

const styles1 = StyleSheet.create({
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  titre: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  table: {
    backgroundColor: '#ffff',
    width: 390,
    height: 540,
    marginVertical: 10,
    marginHorizontal:2,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
});
