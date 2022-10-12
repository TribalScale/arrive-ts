/* eslint-disable react-native/no-inline-styles */
import {StackActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../../../components/Button';
import {MainTextPage} from '../../../../components/Text';
import {BLUE, DISCLAIMER_BACKGROUND} from '../../../../utils/constants/Colors';

const SuccessSubmit = () => {
  const {dispatch} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, padding: 15}}>
        <MainTextPage>
          You have successfully submitted your CBSA Declaration form
        </MainTextPage>
        <Text style={{marginTop: 15}}>
          Your advance declaration has been sent to CBSA and your should be
          recieving a confirmation email soon. The code below should match the
          one sown onscreen at a designated Primary Inspection Device upon
          arriving at your port of entry.
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
            backgroundColor: DISCLAIMER_BACKGROUND,
            shadowRadius: 10,
            shadowOpacity: 0.3,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>XXXXX</Text>
          <Text>2022-10-10 18:42:30</Text>
        </View>
      </View>
      <View style={{padding: 15}}>
        <Button
          onPress={() => dispatch(StackActions.popToTop())}
          style={{
            backgroundColor: BLUE,
          }}>
          Close
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SuccessSubmit;
