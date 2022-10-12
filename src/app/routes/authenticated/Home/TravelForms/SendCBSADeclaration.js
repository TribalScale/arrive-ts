/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../../../components/Button';
import {BLUE} from '../../../../utils/constants/Colors';

const SendCBSADeclaration = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, padding: 15}}>
        <Text>
          Your CBSA Declaration(s) will be sent to the CBSA. You must arrive in
          Canada and certify your declaration within 72 hours or it will expire.
          If you intend to travel to Canada after 72 hours, you will need to
          submit a new CBSA Declaration(s), Ab sckowledgement of e-receipt of
          your CBSA Declaration will be sent to you by email.
        </Text>
        <Text style={{marginTop: 15}}>
          Each traveller is responsible for their own CBSA Declaration. If your
          declaration(s) change between now and your arrival in Canada you must
          submit a new CBSA Declaration or submit a new declaration at a Primary
          Inspection Device upon your arrival in Canada. Under the law, failure
          to properly declare goods, currency and/or monetary instruments
          brought into Canada may result in an enforcement action including
          seizure, monetary penalties and/or criminal prosecution.
        </Text>
        <Text style={{marginTop: 15, fontWeight: 'bold'}}>
          I hereby acknowledge the following statements:
        </Text>
        <Text style={{marginTop: 15}}>
          Use of the CBSA Declaration Service is optional and there are no
          penalties if I choose not to provide this information until | enter
          Canada.
        </Text>
        <Text style={{marginTop: 15}}>
          I must certify my declaration upon entry to Canada by using a Primary
          Inspection Device.
        </Text>
        <Text style={{marginTop: 15}}>
          l agree to submit my CBSA Declaration to the Canda Border Services
          Agency and acknowledge that each traveller is responsible to submit a
          new declaration should it change.
        </Text>
      </View>
      <View style={{padding: 15}}>
        <Button
          onPress={() => navigate('SuccessSubmit')}
          style={{
            backgroundColor: BLUE,
          }}>
          Submit
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SendCBSADeclaration;
