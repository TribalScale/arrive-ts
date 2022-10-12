import * as React from 'react';
import MultipleChoice from '../../../../components/MultipleChoiceButtons';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../../../components/Footer';

const ContactInfo = () => {
  const [number, onChangeNumber] = React.useState(null);
  const multipleChoiceItems = ['English', 'French'];

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Enter your contact information</Text>
        <Text style={styles.subheader}>
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
        <Text style={styles.text}>
          Which official language should we use to communicate with you?
        </Text>
        <MultipleChoice multipleChoiceItems={multipleChoiceItems} />
      </View>
      <Footer nextRoute={'ArrivalInfo'} progress={0.2} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default ContactInfo;
