/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../../../../components/Footer';
import {MainTextPage} from '../../../../../components/Text';
import Disclaimer from '../../../../../components/Disclaimer';
import SelectAirportModal from './SelectAirportModal';
import DateOfArrivalModal from './DateOfArrivalModal';

const AirportArrivalInfo = () => {
  const navigation = useNavigation();
  const [showAirportsModal, setShowAirportsModal] = React.useState(false);
  const [showDateModal, setShowDateModal] = React.useState(false);
  const [date, setDate] = React.useState();
  const [airport, setAirport] = React.useState();
  return (
    <SafeAreaView style={styles.container}>
      <SelectAirportModal
        isVisible={showAirportsModal}
        onClose={() => setShowAirportsModal(false)}
        setAirport={setAirport}
      />
      <DateOfArrivalModal
        setDate={setDate}
        isVisible={showDateModal}
        onClose={() => setShowDateModal(false)}
      />
      <View style={styles.formContainer}>
        <MainTextPage style={styles.header}>
          Select your arrival airport
        </MainTextPage>
        <View style={styles.row}>
          <Text style={styles.asterisk}>* </Text>
          <Text style={styles.indicatesRequired}>
            indicates a required field
          </Text>
        </View>
        <Disclaimer>
          <>
            <Text style={styles.bold}>Please note: </Text>
            <Text>
              Advance CBSA Declaration is only available for air entry at select
              airports.
            </Text>
          </>
        </Disclaimer>
        <Text style={styles.paragraph}>
          Enter the details of your planned arrival to Canada within the next 72
          hours (3 days). If your trip is not within the next 72 hours, come
          back and complete your submission later.
        </Text>
        <Text style={styles.boldPrompt}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Arrival airport</Text>
        </Text>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            setShowAirportsModal(true);
          }}>
          <Text>{airport}</Text>
        </TouchableOpacity>
        <Text style={styles.boldPrompt}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Date of Arrival</Text>
        </Text>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            setShowDateModal(true);
          }}>
          <Text>{date}</Text>
        </TouchableOpacity>
      </View>
      <Footer nextRoute={'SelectAddTravellers'} progress={0.1} enable>
        <Text onPress={navigation.goBack}>Exit</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default AirportArrivalInfo;
