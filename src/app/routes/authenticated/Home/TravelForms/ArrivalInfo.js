import * as React from 'react';
import BlueBoxRedirect from '../../../../components/BlueInfoBox/BlueBoxRedirect';
import MultipleChoice from '../../../../components/MultipleChoiceButtons';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../../../components/Footer';

const ArrivalInfo = () => {
  const blueBoxPage = null;
  const blueBoxText = null;
  const description = null;
  const navigation = useNavigation();
  const multChoiceOptions = [
    'United States only',
    'Other country direct',
    'Other country via United States',
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Where are you arriving from?'</Text>
        </Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {blueBoxText && (
          <TouchableHighlight onPress={() => navigation.navigate(blueBoxPage)}>
            <BlueBoxRedirect text={blueBoxText} />
          </TouchableHighlight>
        )}

        <MultipleChoice multipleChoiceItems={multChoiceOptions} />
      </View>
      <Footer nextRoute={'CountryOfResidence'} progress={0.25} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default ArrivalInfo;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: '#890c0c',
  },
  container: {
    flex: 1,
  },
  description: {
    marginTop: 15,
  },
  headerContainer: {
    margin: 20,
    flex: 1,
  },
  title: {
    fontSize: 25,
  },
});
