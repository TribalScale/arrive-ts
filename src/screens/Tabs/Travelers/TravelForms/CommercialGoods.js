import * as React from 'react';
import BlueBoxTextInput from '../../../../components/BlueInfoBox/BlueBoxTextInput';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

const YesNoQuestionPage = () => {
  const statement =
    'I am/we are bringing into Canada: Commercial goods, \
  whether or not for resale (e.g. samples, tools equipment)';
  const additionalDetails = null;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FormLayout
        title={statement}
        nextRoute={'AgriculturalProducts'}
        progress={0.525}
        onBack={navigation.goBack}
        requiredInput>
        {additionalDetails && <BlueBoxTextInput />}
        <YesNoButtons height={40} width={80} />
      </FormLayout>
    </SafeAreaView>
  );
};

export default YesNoQuestionPage;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: colors.DARK_RED,
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
