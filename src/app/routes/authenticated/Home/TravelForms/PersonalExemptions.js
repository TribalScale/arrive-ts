/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
// import Header from '../../components/Header';
import YesNoButtons from '../../../../components/Button/YesNoButtons';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Disclaimer from '../../../../components/Disclaimer';
import AdditionalInfoPage from './AdditionalInfoPage';
import Footer from '../../../../components/Footer';

const PersonalExemptions = () => {
  const [addInfoModalVisible, setAddInfoModalVisible] = React.useState(false);
  const [modalText, setModalText] = React.useState('');
  const navigation = useNavigation();
  const travellers = ['David Biagio Picarazzi'];
  const renderTravellers = travellers.map(item => (
    <View style={styles.confirmationBox}>
      <Text style={styles.name}>{item.toUpperCase()}</Text>
      <YesNoButtons width={50} height={30} />
    </View>
  ));
  return (
    <SafeAreaView style={styles.container}>
      <AdditionalInfoPage
        isVisible={addInfoModalVisible}
        onClose={() => setAddInfoModalVisible(false)}
        text={modalText}
      />
      <View style={styles.header}>
        <Text style={{fontSize: 25}}>
          <Text style={styles.asterisk}>* </Text>
          <Text>
            Do you exceed your personal emptions including the total value of
            goods or the allowable quantity of alcohol / tobacco?
          </Text>
        </Text>
        <TouchableOpacity
          style={{marginVertical: 20}}
          onPress={() => {
            setAddInfoModalVisible(true);
            setModalText('Absence of 48 hours to less than 7 days');
          }}>
          <Disclaimer>Absence of 48 hours to less than 7 days</Disclaimer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAddInfoModalVisible(true);
            setModalText('Alcohol and tobacco exemption limits');
          }}>
          <Disclaimer>
            Refer to alcoholic beverage and tobacco products exemption limits
          </Disclaimer>
        </TouchableOpacity>
        {renderTravellers}
      </View>
      <Footer nextRoute={'CommercialGoods'} progress={0.425} enable>
        <Text onPress={navigation.goBack}>Save and Close</Text>
      </Footer>
    </SafeAreaView>
  );
};

export default PersonalExemptions;

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
