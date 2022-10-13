import * as React from 'react';
import MultipleChoice from '../../../../components/MultipleChoiceButtons';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {FormLayout} from './AirportArrivalInfo';
import Input from '../../../../components/Input';

const ContactInfo = () => {
  const [number, onChangeNumber] = React.useState(null);
  const multipleChoiceItems = ['English', 'French'];

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FormLayout
        nextRoute={'ArrivalInfo'}
        progress={0.2}
        onBack={navigation.goBack}
        title="Enter your contact information">
        <Text style={styles.subheader}>
          Please provide your telephone number where you can be reach while in
          Canada.
        </Text>
        <Text style={styles.boldPrompt}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Phone number</Text>
        </Text>
        <Input
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          maxLength={10}
        />
        <Text style={styles.text}>
          Which official language should we use to communicate with you?
        </Text>
        <MultipleChoice multipleChoiceItems={multipleChoiceItems} />
      </FormLayout>
    </SafeAreaView>
  );
};

export default ContactInfo;
