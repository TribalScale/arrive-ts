import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import ProgressBar from '../../../components/ProgressBar';
import {Link, Title} from '../../../components/Text';
import {colors} from '../../../utils/design';
import {RoutesType} from '../../../utils/constants';

const Footer = ({option}) => {
  return (
    <>
      <ProgressBar progress={0.3} />
      <View style={styles.footerContainer}>
        <Link
          title="Enter manually"
          href={RoutesType.TRAVEL_DOCUMENT_DETAILS_SCREEN}
        />
        <TouchableOpacity style={styles.nextButton} option={option}>
          <Icon name={'arrow-forward-outline'} size={30} color={colors.WHITE} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const TravelersScreen = () => {
  const [selectedDocument, setSelectedDocument] = useState('');

  const CHECK = 'checkmark-circle-outline';
  const UNCHECK = 'ellipse-outline';

  return (
    <>
      <View style={styles.container}>
        <Title style={styles.title}>Add traveler profile</Title>
        <Text style={styles.subtitle}>
          Select the travel document being used to enter Canada.
        </Text>
        <View style={styles.savedTravelersContainer}>
          <View style={styles.scanDocumentContainer}>
            <Icon
              name={'information-circle'}
              size={25}
              color={colors.LIGHT_BLUE}
            />
            <Text style={styles.toastText}>Scanning travel documents</Text>
          </View>
          <Icon name={'chevron-down'} size={25} color={colors.LIGHT_BLUE} />
        </View>
        <View style={styles.savedTravelersContainer}>
          <View style={styles.scanDocumentContainer}>
            <Icon
              name={'information-circle'}
              size={25}
              color={colors.LIGHT_BLUE}
            />
            <Text style={styles.toastText}>
              Advanced declaration can only be used with a passport or Canadian
              PR card
            </Text>
          </View>
        </View>
        <RadioButton />
        <TouchableOpacity
          style={styles.selectionButton}
          onPress={() => setSelectedDocument('passport')}>
          <Icon
            name={selectedDocument === 'passport' ? CHECK : UNCHECK}
            size={28}
            color={colors.LIGHT_BLUE}
          />
          <Text style={styles.optionText}>Passport</Text>
          <Icon name={'camera'} size={25} color={colors.LIGHT_BLUE} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectionButton}
          onPress={() => setSelectedDocument('pr')}>
          <Icon
            name={selectedDocument === 'pr' ? CHECK : UNCHECK}
            size={28}
            color={colors.LIGHT_BLUE}
          />
          <Text style={styles.optionText}>
            Canadian Permanent Resident Card
          </Text>
        </TouchableOpacity>
      </View>
      <Footer option={selectedDocument} />
    </>
  );
};

export default TravelersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 20,
  },
  savedTravelersContainer: {
    backgroundColor: colors.DISCLAIMER_BACKGROUND,
    padding: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.LIGHT_BLUE,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scanDocumentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  selectionButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerContainer: {
    height: 80,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DISABLE_BUTTON,
  },
  title: {
    color: colors.BLUE,
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 36,
  },
  optionText: {
    color: colors.BLUE,
    marginHorizontal: 10,
    fontSize: 22,
  },
  toastText: {
    color: colors.BLUE,
    marginHorizontal: 10,
    fontSize: 18,
    lineHeight: 20,
  },
  subtitle: {
    color: colors.BLUE,
    fontSize: 18,
    lineHeight: 20,
    marginVertical: 20,
  },
});
