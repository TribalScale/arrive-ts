/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import BlueBoxTextInput from '../../../../components/BlueInfoBox/BlueBoxTextInput';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../../../components/Footer';

const UnaccompaniedGoods = () => {
  const statement =
    'I/we have: Unaccompanied goods (excluding your checked baggage';
  const additionalDetails = true;
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
      <Footer nextRoute={'VisitedFarm'} progress={0.8} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default UnaccompaniedGoods;

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
