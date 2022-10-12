import * as React from 'react';
import Header from '../../components/Header';
import MultipleChoice from '../../components/MultipleChoiceButtons';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ContactInfo = () => {
  const [number, onChangeNumber] = React.useState(null);
  const multipleChoiceItems = ['English', 'French'];

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header title={'Contact Info'} />
      <View style={styles.formContainer}>
        <Text style={styles.header}>Enter your contact information</Text>
        <Text style={{paddingTop: 20}}>
          Please provide your telephone number where you can be reach while in
          Canada.
        </Text>
        <Text style={styles.boldPrompt}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Phone number</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          maxLength={10}
        />
        <Text style={{fontSize: 20, marginTop: 20}}>
          Which official language should we use to communicate with you?
        </Text>
        <MultipleChoice multipleChoiceItems={multipleChoiceItems} />
      </View>
      <Text onPress={() => navigation.navigate('ArrivalInfo')}>Next</Text>
    </SafeAreaView>
  );
};

export default ContactInfo;
