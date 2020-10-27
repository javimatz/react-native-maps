import React from 'react';
import { StyleSheet, View, Text, FlatList, Button, Dimensions } from 'react-native';

export default ({data, closeModal}) => {
  return (
  	<>
  	<View style={styles.list}>
  		<FlatList 
  			data = { data.map((e) => e.name) }
  			renderItem ={ ({ item }) => <View style={styles.item}><Text>{item}</Text></View> }
        keyExtractor = { (item) => item}
  		/>
  	</View>
  	<View style={styles.button}>
  		<Button title='Cerrar' onPress={closeModal} />
  	</View>
  	</>
  );
}

const styles = StyleSheet.create({
	list: {
		height: Dimensions.get('window').height - 250,
	},
  item: {
    padding: 20,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  button: {
    padding: 15
  }
});
