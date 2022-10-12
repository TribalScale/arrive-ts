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
import Disclaimer from '../../../../components/Disclaimer';
import AdditionalInfoPage from './AdditionalInfoPage';

const CountryOfResidence = () => {
  const [addInfoModalVisible, setAddInfoModalVisible] = React.useState(false);
  const blueBoxText = 'Coming to Canada to work or study?';
  const description = null;
  const navigation = useNavigation();
  const multChoiceOptions = ['Canada', 'United States of America', 'Other'];
  return (
    <SafeAreaView style={styles.container}>
      <AdditionalInfoPage
        isVisible={addInfoModalVisible}
        onClose={() => setAddInfoModalVisible(false)}
        text={'Duration Of Absence'}
      />
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.asterisk}>* </Text>
          <Text>Where do you live</Text>
        </Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {blueBoxText && (
          <TouchableOpacity onPress={() => setAddInfoModalVisible(true)}>
            <Disclaimer>{blueBoxText}</Disclaimer>
          </TouchableOpacity>
        )}

        <MultipleChoice multipleChoiceItems={multChoiceOptions} />
      </View>
      <Footer nextRoute={'DurationOfAbsence'} progress={0.3} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default CountryOfResidence;

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
  description: {
    marginTop: 15,
  },
});
