import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Map from './components/Map'
import CustomModal from './components/CustomModal'
import CustomInput from './components/CustomInput'
import Panel from './components/Panel'
import List from './components/List'

export default function App() {
  
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setvisibilityFilter] = useState('add_point') // add_point, view_list
  const [puntoTemp, setPuntoTemp] = useState({})

  const handleLongPress = ({nativeEvent}) => {
    setvisibilityFilter('add_point')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const nuevoPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos(puntos.concat(nuevoPunto))
    setNombre('')
    setVisibility(false)
  }
  
  const handleReset = () => {
    setNombre('')
    setVisibility(false)
  }

  const handleList = () => {
    setvisibilityFilter('view_list')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel onPressLeft={handleList} textLeft='Lista' />
      <CustomModal visibility={visibility}>
        { 
          (visibilityFilter === 'add_point') ?
            <>
              <CustomInput title='Nombre' placeholder='Introduzca un nombre' onChangeText={handleChangeText} />
              <Button title='Aceptar' onPress={handleSubmit} />
              <Button title='Cancelar' onPress={handleReset} />
            </>
            :
            <List data={puntos} />
        }
      </CustomModal>
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
