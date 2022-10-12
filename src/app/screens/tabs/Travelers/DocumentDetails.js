/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import ProgressBar from '../../../components/ProgressBar';
import {Title} from '../../../components/Text';
import {Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import {
  BLUE,
  DISABLE_BUTTON,
  GRAY,
  RED,
  WHITE,
} from '../../../utils/constants/Colors';

const TravelersContainer = styled.View`
  flex: 1;
  background-color: white;
  flex-direction: column;
  padding: 20px;
`;

const FooterContainer = styled.View({
  height: 80,
  backgroundColor: 'white',
  paddingHorizontal: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
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
      <ProgressBar progress={1} />
      <FooterContainer>
        <NextButton option={option}>
          <Icon name={'arrow-forward-outline'} size={30} color={WHITE} />
        </NextButton>
      </FooterContainer>
    </>
  );
};

const RequiredField = () => <Text style={{color: RED}}>* </Text>;

const Input = ({
  label,
  required = true,
  placeholder = '',
  value = '',
  // onChange = () => false,
}) => {
  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          color: BLUE,
          fontSize: 22,
          fontWeight: 'bold',
          lineHeight: 22,
        }}>
        {required && <RequiredField />}
        {label}
      </Text>
      <TextInput
        // value={value}asd
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
};
const InputDate = ({label, required = true}) => {
  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          color: BLUE,
          fontSize: 22,
          fontWeight: 'bold',
          lineHeight: 22,
        }}>
        {required && <RequiredField />}
        {label}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          placeholder={'YYYY'}
          style={{...styles.textInputDate, width: '45%'}}
        />
        <TextInput
          placeholder={'MM'}
          style={{...styles.textInputDate, width: '18%'}}
        />
        <TextInput
          placeholder={'DD'}
          style={{...styles.textInputDate, width: '27%'}}
        />
      </View>
    </View>
  );
};

const DocumentDetails = () => {
  const [selectedDocument] = useState('');

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
          Add your details here.
        </Text>
        <Text
          style={{
            color: BLUE,
            fontSize: 18,
            lineHeight: 20,
            fontStyle: 'italic',
          }}>
          <RequiredField />
          Indicates required field
        </Text>
        <ScrollView style={{height: '100%'}}>
          <Input
            label={'Document Type'}
            value={'Canadian Permanent Resident Card'}
          />
          <Input label={'Document Number'} value={''} />
          <Input label={'Surname'} value={''} />
          <Input label={'Given Names'} value={''} required={false} />
          <InputDate label={'Date of Birth'} value={''} />
        </ScrollView>
      </TravelersContainer>
      <Footer option={selectedDocument} />
    </>
  );
};

export default DocumentDetails;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    borderColor: GRAY,
    fontSize: 18,
    lineHeight: 20,
  },
  textInputDate: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    borderColor: GRAY,
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
  },
});
