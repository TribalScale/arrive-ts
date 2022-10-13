import * as React from 'react';
import BlueBoxTextInput from '../../../../components/BlueInfoBox/BlueBoxTextInput';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

const UnaccompaniedGoods = () => {
  const statement =
    'I/we have: Unaccompanied goods (excluding your checked baggage';
  const additionalDetails = true;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FormLayout
        title={statement}
        nextRoute={'VisitedFarm'}
        progress={0.8}
        requiredInput
        onBack={navigation.goBack}>
        {additionalDetails && <BlueBoxTextInput />}
        <YesNoButtons height={40} width={80} />
      </FormLayout>
    </SafeAreaView>
  );
};

export default UnaccompaniedGoods;

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
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 200,
  },
});
