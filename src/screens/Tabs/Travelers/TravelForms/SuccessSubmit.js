import {StackActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../../../../components/Button';
import {MainTextPage} from '../../../../components/Text';
import {colors} from '../../../../utils/design';

const SuccessSubmit = () => {
  const {dispatch} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <MainTextPage>
          You have successfully submitted your CBSA Declaration form
        </MainTextPage>
        <Text style={styles.text}>
          Your advance declaration has been sent to CBSA and your should be
          recieving a confirmation email soon. The code below should match the
          one sown onscreen at a designated Primary Inspection Device upon
          arriving at your port of entry.
        </Text>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerText}>XXXXX</Text>
          <Text>2022-10-10 18:42:30</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Button
          onPress={() => dispatch(StackActions.popToTop())}
          style={styles.button}>
          Close
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  disclaimerBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.DISCLAIMER_BACKGROUND,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    marginTop: 20,
  },
  disclaimerText: {fontSize: 28, fontWeight: 'bold'},
  footerContainer: {padding: 15},
  button: {
    backgroundColor: colors.BLUE,
  },
  text: {marginTop: 15},
  container: {flex: 1},
  section: {flex: 1, padding: 15},
});

export default SuccessSubmit;
