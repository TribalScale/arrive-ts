import * as React from 'react';
import MultipleChoice from '../../../../components/MultipleChoiceButtons';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../../../components/Footer';
import AdditionalInfoPage from './AdditionalInfoPage';
import Disclaimer from '../../../../components/Disclaimer';

const AbsenceDuration = () => {
  const [addInfoModalVisible, setAddInfoModalVisible] = React.useState(false);
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
      <AdditionalInfoPage
        isVisible={addInfoModalVisible}
        onClose={() => setAddInfoModalVisible(false)}
        text={'Country of Residence'}
      />
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.asterisk}>* </Text>
          <Text>How long have you been away from Canada?</Text>
        </Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {blueBoxText && (
          <TouchableOpacity onPress={() => setAddInfoModalVisible(true)}>
            <Disclaimer>{blueBoxText}</Disclaimer>
          </TouchableOpacity>
        )}

        <MultipleChoice multipleChoiceItems={multChoiceOptions} />
      </View>
      <Footer nextRoute={'PersonalExemptions'} progress={0.35} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default AbsenceDuration;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: '#890c0c',
  },
  container: {
    flex: 1,
  },
  description: {marginVertical: 15},
  header: {margin: 20, flex: 1},
  title: {fontSize: 25},
});
