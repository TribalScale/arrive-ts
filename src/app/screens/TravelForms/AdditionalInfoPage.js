import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AdditionalInfoPage = ({text}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.cancel} onPress={() => navigation.goBack()}>
        Cancel
      </Text>
      <Text>
        <Text>Additional info about</Text>
        <Text>{text}</Text>
      </Text>
    </View>
  );
};

export default AdditionalInfoPage;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  cancel: {
    color: '#0D374D',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 20,
  },
});
