import * as React from 'react';
import BlueBoxRedirect from '../../../../components/BlueInfoBox/BlueBoxRedirect';
import MultipleChoice from '../../../../components/MultipleChoiceButtons';
import {SafeAreaView, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

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
      <FormLayout
        nextRoute={'CountryOfResidence'}
        progress={0.25}
        onBack={navigation.goBack}
        title="Where are you arriving from?"
        requiredInput>
        {description && <Text style={styles.description}>{description}</Text>}
        {blueBoxText && (
          <TouchableHighlight onPress={() => navigation.navigate(blueBoxPage)}>
            <BlueBoxRedirect text={blueBoxText} />
          </TouchableHighlight>
        )}

        <MultipleChoice multipleChoiceItems={multChoiceOptions} />
      </FormLayout>
    </SafeAreaView>
  );
};

export default ArrivalInfo;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: colors.DARK_RED,
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
