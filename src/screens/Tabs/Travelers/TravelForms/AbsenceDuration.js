import * as React from 'react';
import MultipleChoice from '../../../../components/MultipleChoiceButtons';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Disclaimer from '../../../../components/Disclaimer';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

const AbsenceDuration = () => {
  const blueBoxText = 'How to calculate your duration of absence from Canada';
  const description =
    'Your duration of absence from Canada determines what personal exemptions you are entitled to.';
  const navigation = useNavigation();
  const multChoiceOptions = [
    'Less than 24 hours',
    '24 hours to less than 48 hours',
    '48 hours to less than 7 days',
    '7 days or more',
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FormLayout
        title="How long have you been away from Canada?"
        nextRoute={'PersonalExemptions'}
        progress={0.35}
        onPress={navigation.goBack}
        requiredInput>
        {description && <Text style={styles.description}>{description}</Text>}
        {blueBoxText && <Disclaimer>{blueBoxText}</Disclaimer>}
        <MultipleChoice multipleChoiceItems={multChoiceOptions} />
      </FormLayout>
    </SafeAreaView>
  );
};

export default AbsenceDuration;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: colors.DARK_RED,
  },
  container: {
    flex: 1,
  },
  description: {marginVertical: 15},
  header: {margin: 20, flex: 1},
  title: {fontSize: 25},
});
