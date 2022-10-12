/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useState} from 'react';
import {Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, Link, Title} from '../../../components/Text';
import {
  BLUE,
  DISCLAIMER_BACKGROUND,
  LIGHT_BLUE,
} from '../../../utils/constants/Colors';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../utils/constants/RoutesIdentifier';

const TravelersContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  flex-direction: column;
`;

const SavedTravelersDisclaimer = styled.View({
  backgroundColor: DISCLAIMER_BACKGROUND,
  padding: 20,
  width: '90%',
  borderWidth: 1,
  borderColor: LIGHT_BLUE,
  borderRadius: 15,
  marginTop: 20,
  flexDirection: 'row',
});

const DisclaimerTextContainer = styled.View({
  flexDirection: 'column',
  marginLeft: 10,
  width: '90%',
});

const SaveDocumentView = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: 10,
});

const EmptyTravelersContainer = styled.View({
  width: '100%',
  padding: 20,
  alignItems: 'center',
});

const EmptyTravelers = () => {
  const {navigate} = useNavigation();
  const addTravelerScreen = () => navigate(ROUTES.TRAVEL_DOCUMENT_SCREEN);
  return (
    <EmptyTravelersContainer>
      <Title
        style={{
          color: BLUE,
          textAlign: 'center',
          fontSize: 32,
          fontWeight: '500',
          lineHeight: 36,
        }}>
        You have no saved travelers on this account
      </Title>
      <Text
        style={{
          color: BLUE,
          fontSize: 16,
          width: '80%',
          textAlign: 'center',
          lineHeight: 18,
          marginVertical: 20,
        }}>
        Add your travel documents for faster checkout in future trips. you can
        edit, delete and add additional travelers at any time.
      </Text>
      <Button
        onPress={addTravelerScreen}
        style={{
          backgroundColor: BLUE,
          marginBottom: 20,
        }}>
        Add Traveler
      </Button>
      {/* <EmptyTravelerImage source={{uri: faker.image.business()}} /> */}
    </EmptyTravelersContainer>
  );
};

const TravelersScreen = () => {
  const [saveDocument, setSaveDocument] = useState(false);

  const toggleSaveDocument = () => {
    setSaveDocument(prev => !prev);
  };

  return (
    <TravelersContainer>
      <SavedTravelersDisclaimer>
        <Icon name={'information-circle'} size={25} color={LIGHT_BLUE} />
        <DisclaimerTextContainer>
          <SaveDocumentView>
            <Text
              style={{
                color: BLUE,
                fontSize: 18,
                lineHeight: 20,
                width: '80%',
              }}>
              Save my travel document for future trips (Optional)
            </Text>
            <Switch
              value={saveDocument}
              onChange={toggleSaveDocument}
              trackColor={{true: BLUE}}
            />
          </SaveDocumentView>
          <Link title={'Privacy Notice - Saved Traveler'} />
        </DisclaimerTextContainer>
      </SavedTravelersDisclaimer>
      <EmptyTravelers />
    </TravelersContainer>
  );
};

export default TravelersScreen;
