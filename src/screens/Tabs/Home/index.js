import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {colors} from '../../../utils/design';

import Disclaimer from '../../../components/Disclaimer';

const HomePage = () => {
  const {navigate} = useNavigation();
  const onNavigateArrivalAirport = () => navigate('AirportArrivalInfo');
  return (
    <>
      <SafeAreaView style={styles.topContainer} />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Canada</Text>
          <Text style={styles.subtitleText}>Advance CBSA Declaration</Text>
          <Disclaimer>
            Help save time at the kiosk/eGate by submitting your declaration in
            advance
          </Disclaimer>
        </View>
        <View style={styles.cbsaBoxContainer}>
          <Icon name={'shield-outline'} size={40} color={colors.LIGHT_BLUE} />
          <Text style={styles.cbsaTitle}>
            Start your Advance CBSA Declaration
            <Text style={styles.cbsaSubtitle}> (optional)</Text>
          </Text>
          <TouchableOpacity
            onPress={onNavigateArrivalAirport}
            style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {backgroundColor: colors.BLUE},
  button: {
    backgroundColor: colors.BLUE,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 45,
  },
  buttonText: {color: colors.WHITE, fontSize: 20, fontWeight: '500'},
  cbsaBoxContainer: {
    backgroundColor: colors.WHITE,
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    top: 290,
    zIndex: 2,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    padding: 30,
  },
  cbsaTitle: {
    color: colors.BLUE,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 26,
    textAlign: 'center',
    marginTop: 15,
  },
  cbsaSubtitle: {fontWeight: '400'},
  container: {flex: 1, width: '100%'},
  titleContainer: {
    // flex: 4,
    height: '45%',
    backgroundColor: colors.BLUE,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    paddingHorizontal: 20,
  },
  titleText: {
    color: colors.WHITE,
    fontSize: 34,
    width: '100%',
    textAlign: 'center',
  },
  subtitleText: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 40,
  },
});

export default HomePage;
