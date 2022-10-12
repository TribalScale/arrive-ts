import * as React from 'react';
import Header from '../../../components/Header';
import {SafeAreaView, Text, View, TouchableHighlight} from 'react-native';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';

const AirportArrivalInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header title={'Airport arrival'} />
      <View style={styles.formContainer}>
        <Text style={styles.header}>Select your arrival airport</Text>
        <View style={styles.row}>
          <Text style={styles.asterisk}>* </Text>
          <Text style={styles.indicatesRequired}>
            indicates a required field
          </Text>
        </View>
        <View style={styles.blueBox}>
          <View style={styles.blueBoxTextAndIcon}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconI}>i</Text>
            </View>
            <Text style={styles.blueBoxText}>
              <Text style={styles.bold}>Please note: </Text>
              <Text>
                Advance CBSA Declaration is only available for air entry at
                select airports.
              </Text>
            </Text>
          </View>
        </View>
        <Text style={styles.paragraph}>
          Enter the details of your planned arrival to Canada within the next 72
          hours (3 days). If your trip is not within the next 72 hours, come
          back and complete your submission later.
        </Text>
        <Text style={styles.boldPrompt}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Arrival airport</Text>
        </Text>
        <TouchableHighlight
          style={styles.box}
          onPress={() => {
            navigation.navigate('SelectAirport');
          }}>
          <Text>Montreal - Trudeau International Airport (YUL)</Text>
        </TouchableHighlight>
        <Text style={styles.boldPrompt}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Date of Arrival</Text>
        </Text>
        <TouchableHighlight
          style={styles.box}
          onPress={() => {
            navigation.navigate('DateOfArrival');
          }}>
          <Text>2022-10-09 21:52</Text>
        </TouchableHighlight>
        <Text onPress={() => navigation.navigate('SelectAddTravellers')}>
          Next
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AirportArrivalInfo;
