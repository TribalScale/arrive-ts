import * as React from 'react';
import Header from '../../components/Header';
import BlueBoxTextInput from '../../components/BlueInfoBox/BlueBoxTextInput';
import YesNoButtons from '../../components/Button/YesNoButtons';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const YesNoQuestionPage = ({title, statement, additionalDetails, nextPage}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header title={title} />
      <View style={{margin: 20}}>
        <Text style={styles.title}>
          <Text style={styles.asterisk}>* </Text>
          <Text>{statement}</Text>
        </Text>
        {additionalDetails && <BlueBoxTextInput />}
        <YesNoButtons height={40} width={80} />
      </View>
      <Text onPress={() => navigation.navigate(nextPage)}>Next</Text>
    </SafeAreaView>
  );
};

export default YesNoQuestionPage;

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
