import * as React from 'react';
import MultipleChoice from '../../../../components/MultipleChoiceButtons';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Disclaimer from '../../../../components/Disclaimer';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

const CountryOfResidence = () => {
  const blueBoxText = 'Coming to Canada to work or study?';
  const description = null;
  const navigation = useNavigation();
  const multChoiceOptions = ['Canada', 'United States of America', 'Other'];
  return (
    <SafeAreaView style={styles.container}>
      <FormLayout
        title="Where do you live?"
        nextRoute={'DurationOfAbsence'}
        progress={0.3}
        requiredInput
        onBack={navigation.goBack}>
        {description && <Text style={styles.description}>{description}</Text>}
        {blueBoxText && <Disclaimer>{blueBoxText}</Disclaimer>}
        <MultipleChoice multipleChoiceItems={multChoiceOptions} />
      </FormLayout>
    </SafeAreaView>
  );
};

export default CountryOfResidence;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: colors.DARK_RED,
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
  description: {
    marginTop: 15,
  },
});
