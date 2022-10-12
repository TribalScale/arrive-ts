import * as React from 'react';
import BlueBoxTextInput from '../../../../components/BlueInfoBox/BlueBoxTextInput';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../../../components/Footer';

const AgriculturalProducts = () => {
  const statement =
    'I am/we are bringing into Canada: Raw or cooked meat, fish, seafood, eggs, dairy products, fruits, vegetables, seeds, nuts, flowers, insects, bulbs, plants, wood, live animals or any other animal or plant parts of their derivatives.';
  const additionalDetails = null;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          <Text style={styles.asterisk}>* </Text>
          <Text>{statement}</Text>
        </Text>
        {additionalDetails && <BlueBoxTextInput />}
        <YesNoButtons height={40} width={80} />
      </View>
      <Footer nextRoute={'Currency'} progress={0.6} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default AgriculturalProducts;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: '#890c0c',
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
