import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map'
import CustomModal from './components/CustomModal'
import Panel from './components/Panel'

export default function App() {
  
  const [puntos, setPuntos] = useState([])

  const handleLongPress = ({nativeEvent}) => {
    const nuevoPunto = puntos.concat({coordinate: nativeEvent.coordinate})

    setPuntos(nuevoPunto)
    console.log(nuevoPunto)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
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
