import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
  	<View style={styles.panel}>
      <View style={styles.buttonGroup}>
  		  <Button title={textLeft} onPress={onPressLeft} />
  		  <Button title='Mostrar/Ocultar' onPress={togglePointsFilter} />
      </View>
  	</View>
  );
}

const styles = StyleSheet.create({
  panel: {
  	flex: 1,
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  buttonGroup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }
});
