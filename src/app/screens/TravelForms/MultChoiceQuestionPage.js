import * as React from 'react';
import Header from '../../components/Header';
import BlueBoxRedirect from '../../components/BlueInfoBox/BlueBoxRedirect';
import MultipleChoice from '../../components/MultipleChoiceButtons';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MultChoiceQuestionPage = ({
  pageTitle,
  question,
  multChoiceOptions,
  description = null,
  blueBoxText = null,
  blueBoxPage = null,
  nextPage,
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header title={pageTitle} />
      <View style={{margin: 20}}>
        <Text style={{fontSize: 25}}>
          <Text style={styles.asterisk}>* </Text>
          <Text>{question}</Text>
        </Text>
        {description && <Text style={{marginTop: 15}}>{description}</Text>}
        {blueBoxText && (
          <TouchableHighlight onPress={() => navigation.navigate(blueBoxPage)}>
            <BlueBoxRedirect text={blueBoxText} />
          </TouchableHighlight>
        )}

        <MultipleChoice multipleChoiceItems={multChoiceOptions} />
      </View>
      <Text onPress={() => navigation.navigate(nextPage)}>Next</Text>
    </SafeAreaView>
  );
};

export default MultChoiceQuestionPage;

const styles = StyleSheet.create({
  asterisk: {
    fontWeight: 'bold',
    color: '#890c0c',
  },
});
