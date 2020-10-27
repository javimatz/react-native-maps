import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map'
import CustomModal from './components/CustomModal'
import CustomInput from './components/CustomInput'
import Panel from './components/Panel'

export default function App() {
  
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [puntoTemp, setPuntoTemp] = useState({})

  const handleLongPress = ({nativeEvent}) => {
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) => {
    setNombre(text)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <CustomModal visibility={visibility}>
        <CustomInput title='Nombre' placeholder='Introduzca un nombre' onChangeText={handleChangeText} />
      </CustomModal>
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
