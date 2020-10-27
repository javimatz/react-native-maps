import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Panel() {
  return (
  	<View style={styles.panel}>
  		<Button title='Lista' />
  		<Button title='Mostrar/Ocultar' />
  	</View>
  );
}

const styles = StyleSheet.create({
  panel: {
  	flex: 1,
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  }
});
