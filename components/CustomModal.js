import React from 'react';
import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native';

export default ({children, visibility}) => {
  return (
	<Modal
	  animationType='slide'
	  transparent={true}
	  visible={visibility}
	>
	  <View style={styles.center}>
	    <View style={styles.modalView} >
	      {children}
	    </View>
	  </View>
	</Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    minWidth: Dimensions.get('window').width - 100, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});

