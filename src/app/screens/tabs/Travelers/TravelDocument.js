/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';

import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import ProgressBar from '../../../components/ProgressBar';
import {Link, Text, Title} from '../../../components/Text';
import {
  BLUE,
  DISCLAIMER_BACKGROUND,
  LIGHT_BLUE,
  DISABLE_BUTTON,
  WHITE,
} from '../../../utils/constants/Colors';
import {ROUTES} from '../../../utils/constants/RoutesIdentifier';

const TravelersContainer = styled.View`
  flex: 1;
  background-color: white;
  flex-direction: column;
  padding: 20px;
`;

const SavedTravelersDisclaimer = styled.View({
  backgroundColor: DISCLAIMER_BACKGROUND,
  padding: 20,
  width: '100%',
  borderWidth: 1,
  borderColor: LIGHT_BLUE,
  borderRadius: 15,
  marginBottom: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ScanDocumentView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const SelectionView = styled.TouchableOpacity({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
});

const FooterContainer = styled.View({
  height: 80,
  backgroundColor: 'white',
  paddingHorizontal: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const NextButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({option}) => (option ? BLUE : DISABLE_BUTTON)};
`;

const Footer = ({option}) => {
  return (
    <>
      <ProgressBar progress={0.3} />
      <FooterContainer>
        <Link
          title="Enter manually"
          href={ROUTES.TRAVEL_DOCUMENT_DETAILS_SCREEN}
        />
        <NextButton option={option}>
          <Icon name={'arrow-forward-outline'} size={30} color={WHITE} />
        </NextButton>
      </FooterContainer>
    </>
  );
};

const TravelersScreen = () => {
  const [selectedDocument, setSelectedDocument] = useState('');

  const CHECK = 'checkmark-circle-outline';
  const UNCHECK = 'ellipse-outline';

  return (
    <>
      <TravelersContainer>
        <Title
          style={{
            color: BLUE,

            fontSize: 32,
            fontWeight: '500',
            lineHeight: 36,
          }}>
          Add traveler profile
        </Title>
        <Text
          style={{
            color: BLUE,
            fontSize: 18,
            lineHeight: 20,
            marginVertical: 20,
          }}>
          Select the travel document being used to enter Canada.
        </Text>
        <SavedTravelersDisclaimer>
          <ScanDocumentView>
            <Icon name={'information-circle'} size={25} color={LIGHT_BLUE} />
            <Text
              style={{
                color: BLUE,
                marginLeft: 10,
                fontSize: 18,
                lineHeight: 20,
              }}>
              Scanning travel documents
            </Text>
          </ScanDocumentView>
          <Icon name={'chevron-down'} size={25} color={LIGHT_BLUE} />
        </SavedTravelersDisclaimer>
        <SavedTravelersDisclaimer>
          <ScanDocumentView>
            <Icon name={'information-circle'} size={25} color={LIGHT_BLUE} />
            <Text
              style={{
                color: BLUE,
                marginLeft: 10,
                fontSize: 18,
                lineHeight: 20,
                width: '90%',
              }}>
              Advanced declaration can only be used with a passport or Canadian
              PR card
            </Text>
          </ScanDocumentView>
        </SavedTravelersDisclaimer>
        <RadioButton />
        <SelectionView onPress={() => setSelectedDocument('passport')}>
          <Icon
            name={selectedDocument === 'passport' ? CHECK : UNCHECK}
            size={28}
            color={LIGHT_BLUE}
          />
          <Text
            style={{
              color: BLUE,
              marginHorizontal: 10,
              fontSize: 22,
            }}>
            Passport
          </Text>
          <Icon name={'camera'} size={25} color={LIGHT_BLUE} />
        </SelectionView>
        <SelectionView onPress={() => setSelectedDocument('pr')}>
          <Icon
            name={selectedDocument === 'pr' ? CHECK : UNCHECK}
            size={28}
            color={LIGHT_BLUE}
          />
          <Text
            style={{
              color: BLUE,
              marginLeft: 10,
              fontSize: 22,
              width: '90%',
            }}>
            Canadian Permanent Resident Card
          </Text>
        </SelectionView>
      </TravelersContainer>
      <Footer option={selectedDocument} />
    </>
  );
};

export default TravelersScreen;
