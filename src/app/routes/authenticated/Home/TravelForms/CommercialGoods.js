import * as React from 'react';
import BlueBoxTextInput from '../../../../components/BlueInfoBox/BlueBoxTextInput';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../../../components/Footer';

const YesNoQuestionPage = () => {
  const statement =
    'I am/we are bringing into Canada: Commercial goods, \
  whether or not for resale (e.g. samples, tools equipment)';
  const additionalDetails = null;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.asterisk}>* </Text>
          <Text>{statement}</Text>
        </Text>
        {additionalDetails && <BlueBoxTextInput />}
        <YesNoButtons height={40} width={80} />
      </View>
      <Footer nextRoute={'AgriculturalProducts'} progress={0.525} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default YesNoQuestionPage;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: '#890c0c',
  },
  confirmationBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    margin: 20,
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 200,
  },
});
