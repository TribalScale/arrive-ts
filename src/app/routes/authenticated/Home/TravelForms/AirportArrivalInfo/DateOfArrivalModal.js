/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import DatePicker from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import {WHITE} from '../../../../../utils/constants/Colors';

const DateOfArrival = ({isVisible, onClose, setDate}) => {
  return (
    <Modal
      onSwipeComplete={onClose}
      isVisible={isVisible}
      swipeDirection={['down']}
      style={{
        justifyContent: 'flex-start',
        margin: 0,
        padding: 20,
        backgroundColor: WHITE,
        marginTop: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <View style={styles.row}>
        <Text style={styles.cancel} onPress={onClose}>
          Cancel
        </Text>
        <Text style={styles.done} onPress={onClose}>
          Done
        </Text>
      </View>
      <Text style={styles.title}>Date of arrival</Text>
      <DatePicker onSelectedChange={setDate} />
    </Modal>
  );
};

export default DateOfArrival;
