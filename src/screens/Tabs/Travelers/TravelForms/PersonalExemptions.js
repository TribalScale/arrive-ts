import * as React from 'react';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Disclaimer from '../../../../components/Disclaimer';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

const PersonalExemptions = () => {
  const navigation = useNavigation();
  const travellers = ['David Biagio Picarazzi'];
  const renderTravellers = travellers.map(item => (
    <View style={styles.confirmationBox}>
      <Text style={styles.name}>{item.toUpperCase()}</Text>
      <YesNoButtons width={50} height={30} />
    </View>
  ));
  return (
    <SafeAreaView style={styles.container}>
      <FormLayout
        title="Do you exceed your personal emptions including the total value of goods or the allowable quantity of alcohol / tobacco?"
        nextRoute={'CommercialGoods'}
        progress={0.425}
        onBack={navigation.goBack}
        requiredInput>
        <Disclaimer>Absence of 48 hours to less than 7 days</Disclaimer>
        <Disclaimer>
          Refer to alcoholic beverage and tobacco products exemption limits
        </Disclaimer>
        {renderTravellers}
      </FormLayout>
    </SafeAreaView>
  );
};

export default PersonalExemptions;

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
