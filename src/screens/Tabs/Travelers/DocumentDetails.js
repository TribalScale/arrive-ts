import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import ProgressBar from '../../../components/ProgressBar';
import {Title} from '../../../components/Text';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../../utils/design';

const Footer = ({option}) => {
  return (
    <>
      <ProgressBar progress={1} />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.nextButton} option={option}>
          <Icon name={'arrow-forward-outline'} size={30} color={colors.WHITE} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const RequiredField = () => <Text style={styles.required}>* </Text>;

const Input = ({label, required = true, placeholder = ''}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {required && <RequiredField />}
        {label}
      </Text>
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};
const InputDate = ({label, required = true}) => {
  const yearStyle = {width: '45%'};
  const monthStyle = {width: '18%'};
  const dayStyle = {width: '27%'};
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {required && <RequiredField />}
        {label}
      </Text>
      <View style={styles.dateInput}>
        <TextInput
          placeholder={'YYYY'}
          style={[styles.dateInputText, yearStyle]}
        />
        <TextInput
          placeholder={'MM'}
          style={[styles.dateInputText, monthStyle]}
        />
        <TextInput
          placeholder={'DD'}
          style={[styles.dateInputText, dayStyle]}
        />
      </View>
    </View>
  );
};

const DocumentDetails = () => {
  const [selectedDocument] = useState('');

  return (
    <>
      <View style={styles.travellerContainer}>
        <Title style={styles.title}>Add traveler profile</Title>
        <Text style={styles.subtitle}>Add your details here.</Text>
        <Text style={styles.note}>
          <RequiredField />
          Indicates required field
        </Text>
        <ScrollView style={styles.scroll}>
          <Input
            label={'Document Type'}
            value={'Canadian Permanent Resident Card'}
          />
          <Input label={'Document Number'} value={''} />
          <Input label={'Surname'} value={''} />
          <Input label={'Given Names'} value={''} required={false} />
          <InputDate label={'Date of Birth'} value={''} />
        </ScrollView>
      </View>
      <Footer option={selectedDocument} />
    </>
  );
};

export default DocumentDetails;

const styles = StyleSheet.create({
  footerContainer: {
    height: 80,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  required: {color: colors.RED},
  inputContainer: {marginTop: 20},
  dateInput: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {
    color: colors.BLUE,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  subtitle: {
    color: colors.BLUE,
    fontSize: 18,
    lineHeight: 20,
    marginVertical: 20,
  },
  title: {
    color: colors.BLUE,
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 36,
  },
  note: {
    color: colors.BLUE,
    fontSize: 18,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  scroll: {height: '100%'},
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    borderColor: colors.GRAY,
    fontSize: 18,
    lineHeight: 20,
  },
  dateInputText: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    borderColor: colors.GRAY,
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
  },
  travellerContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 20,
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DISABLE_BUTTON,
  },
});
