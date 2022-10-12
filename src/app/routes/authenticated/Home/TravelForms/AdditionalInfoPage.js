import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {WHITE} from '../../../../utils/constants/Colors';

const AdditionalInfoPage = ({text, onClose, isVisible}) => {
  return (
    <Modal
      onSwipeComplete={onClose}
      isVisible={isVisible}
      swipeDirection={['down']}
      style={styles.modal}>
      <Text style={styles.cancel} onPress={onClose}>
        Cancel
      </Text>
      <Text>
        <Text>Additional info about</Text>
      </Text>
      <Text>{text}</Text>
    </Modal>
  );
};

export default AdditionalInfoPage;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  cancel: {
    color: '#0D374D',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 20,
  },
  modal: {
    justifyContent: 'flex-start',
    margin: 0,
    padding: 20,
    backgroundColor: WHITE,
    marginTop: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
