import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map'
import CustomModal from './components/CustomModal'
import Panel from './components/Panel'

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <CustomModal />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
