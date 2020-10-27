import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

export default function CustomModal() {
  return (
	<Modal
	  animationType='slide'
	  transparent={true}
	  visible={true}
	>
	  <View style={styles.center}>
	    <View style={styles.modalView} >
	      <Text>: )kk </Text>
	    </View>
	  </View>
	</Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});
