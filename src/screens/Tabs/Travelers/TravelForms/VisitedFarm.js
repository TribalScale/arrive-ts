import * as React from 'react';
import BlueBoxTextInput from '../../../../components/BlueInfoBox/BlueBoxTextInput';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

const VisitedFarm = () => {
  const statement =
    'I/we have: Visited a farm and will be going to a farm in Canada';
  const additionalDetails = true;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FormLayout
        title={statement}
        nextRoute={'Cannabis'}
        progress={0.85}
        requiredInput
        onBack={navigation.goBack}>
        {additionalDetails && <BlueBoxTextInput />}
        <YesNoButtons height={40} width={80} />
      </FormLayout>
    </SafeAreaView>
  );
};

export default VisitedFarm;

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
