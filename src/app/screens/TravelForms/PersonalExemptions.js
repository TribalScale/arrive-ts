/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Header from '../../components/Header';
import BlueBoxRedirect from '../../components/BlueInfoBox/BlueBoxRedirect';
import YesNoButtons from '../../components/Button/YesNoButtons';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PersonalExemptions = ({people}) => {
  const navigation = useNavigation();
  const renderOptions = people.map(item => (
    <View style={styles.confirmationBox}>
      <Text style={styles.name}>{item.toUpperCase()}</Text>
      <YesNoButtons width={50} height={30} />
    </View>
  ));
  return (
    <SafeAreaView>
      <Header title={'PersonalExemptions'} />
      <View style={{margin: 20}}>
        <Text style={{fontSize: 25}}>
          <Text style={styles.asterisk}>* </Text>
          <Text>
            Do you exceed your personal emptions including the total value of
            goods or the allowable quantity of alcohol / tobacco?
          </Text>
        </Text>
        <TouchableHighlight
          onPress={() => navigation.navigate('PersonalExemptionsBox1')}>
          <BlueBoxRedirect text={'Absence of 48 hours to less than 7 days'} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('PersonalExemptionsBox2')}>
          <BlueBoxRedirect
            text={
              'Refer to alcoholic beverage and tobacco products exemption limits'
            }
          />
        </TouchableHighlight>
        {renderOptions}
      </View>
      <Text onPress={() => navigation.navigate('CommercialGoods')}>Next</Text>
    </SafeAreaView>
  );
};

export default PersonalExemptions;

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
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 200,
  },
});
