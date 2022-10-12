import * as React from 'react';
import Header from '../../components/Header';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SendCBSADeclaration = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header title={'Send your declaration to the CSBA'} />
    </SafeAreaView>
  );
};

export default SendCBSADeclaration;
