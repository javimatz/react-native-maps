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
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointsFilter = () => setPointsFilter(!pointsFilter) 

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
  
  const closeModal = () => {
    setVisibility(false)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Panel onPressLeft={handleList} textLeft='Lista' togglePointsFilter={togglePointsFilter} />
      <CustomModal visibility={visibility}>
        { 
          (visibilityFilter === 'add_point') ?
            <View style={styles.modal}>
              <CustomInput title='Nombre' placeholder='Introduzca un nombre' onChangeText={handleChangeText} />
              <View style={styles.buttonGroup} >
                <Button title='Aceptar' onPress={handleSubmit} />
                <Button title='Cancelar' onPress={handleReset} />
              </View>
            </View>
            :
            <List data={puntos} closeModal={closeModal} />
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
  modal: {
    padding: 15,
    height: 150
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
