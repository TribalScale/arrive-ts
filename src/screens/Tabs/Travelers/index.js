import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Switch, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Link, Title} from '../../../components/Text';
import Button from '../../../components/Button';

import {RoutesType} from '../../../utils/constants';
import {colors} from '../../../utils/design';

const EmptyTravelers = () => {
  const {navigate} = useNavigation();
  const addTravelerScreen = () => navigate(RoutesType.TRAVEL_DOCUMENT_SCREEN);
  return (
    <View style={styles.emptyTraveller}>
      <Title style={styles.emptyTravellerTitle}>
        You have no saved travelers on this account
      </Title>
      <Text style={styles.emptyTravellerSubtitle}>
        Add your travel documents for faster checkout in future trips. you can
        edit, delete and add additional travelers at any time.
      </Text>
      <Button onPress={addTravelerScreen} style={styles.addTravellerButton}>
        Add Traveler
      </Button>
    </View>
  );
};

const TravelersScreen = () => {
  const [saveDocument, setSaveDocument] = useState(false);

  const toggleSaveDocument = () => {
    setSaveDocument(prev => !prev);
  };

  return (
    <View style={styles.travellerContainer}>
      <View style={styles.savedDisclaimer}>
        <Icon name={'information-circle'} size={25} color={colors.LIGHT_BLUE} />
        <View style={styles.disclaimerContainer}>
          <View style={styles.saveDocContainer}>
            <Text style={styles.saveDocText}>
              Save my travel document for future trips (Optional)
            </Text>
            <Switch
              value={saveDocument}
              onChange={toggleSaveDocument}
              trackColor={{true: colors.BLUE}}
            />
          </View>
          <Link title={'Privacy Notice - Saved Traveler'} />
        </View>
      </View>
      <EmptyTravelers />
    </View>
  );
};

const styles = StyleSheet.create({
  travellerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
  },
  savedDisclaimer: {
    backgroundColor: colors.DISCLAIMER_BACKGROUND,
    padding: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: colors.LIGHT_BLUE,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  disclaimerContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    width: '90%',
  },
  saveDocContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  saveDocText: {
    color: colors.BLUE,
    fontSize: 18,
    lineHeight: 20,
    width: '80%',
  },
  emptyTraveller: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  emptyTravellerTitle: {
    color: colors.BLUE,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 36,
  },
  emptyTravellerSubtitle: {
    color: colors.BLUE,
    fontSize: 16,
    width: '80%',
    textAlign: 'center',
    lineHeight: 18,
    marginVertical: 20,
  },
  addTravellerButton: {
    backgroundColor: colors.BLUE,
    marginBottom: 20,
  },
});

export default TravelersScreen;
