import React from 'react';
import { StyleSheet, View, Text, FlatList, Button, Dimensions } from 'react-native';

export default ({data}) => {
  return (
  	<>
  	<View style={styles.list}>
  		<FlatList 
  			data = { data.map((e) => e.name) }
  			renderItem ={({ item }) => <Text>{item}</Text> }
  			keyExtractor = { (item) => item}
  		/>
  	</View>
  	<View>
  		<Button title='Cerrar' />
  	</View>
  	</>
  );
}

const styles = StyleSheet.create({
	list: {
		height: Dimensions.get('window').height -250
	}
});
