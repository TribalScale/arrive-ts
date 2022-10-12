import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from '../styles';
import DatePicker from 'react-native-modern-datepicker';

const DateOfArrival = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.cancel} onPress={() => navigation.goBack()}>
          Cancel
        </Text>
        <Text style={styles.done} onPress={() => navigation.goBack()}>
          Done
        </Text>
      </View>
      <Text style={styles.title}>Date of arrival</Text>
      <DatePicker onSelectedChange={date => setSelectedDate(date)} />
    </SafeAreaView>
  );
};

export default DateOfArrival;
