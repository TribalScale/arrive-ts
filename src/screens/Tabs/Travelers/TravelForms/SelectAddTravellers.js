/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {FormLayout} from './AirportArrivalInfo';
import {colors} from '../../../../utils/design';

const SelectAddTravellers = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <FormLayout
        title="Select travelers for this trip"
        onBack={navigation.goBack}
        progress={0.15}
        nextRoute={'ContactInfo'}>
        <View>
          <Text style={{marginVertical: 20, fontSize: 17}}>
            Use the checkbox beside the traveler entries below to select
            travelers for this trip. You may also update the information or add
            new traveler entries to your list.
          </Text>
          <View style={styles.box}>
            <View style={{justifyContent: 'center'}}>
              <Checkbox
                color={colors.BLUE}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>

            <View style={{marginLeft: 10}}>
              <Text style={styles.bold}>DAVID BIAGO PICARAAZI</Text>
              <Text>Passport registered</Text>
              <Text>1997-12-01</Text>
            </View>
            <Icon
              style={styles.editBtn}
              name="pencil"
              size={30}
              color="#0D374D"
            />
          </View>
          <View style={styles.editBtnContainer}>
            <Icon name="add-circle-outline" size={30} color="#0D374D" />
            <Text style={styles.addBtnText}> Add another traveller</Text>
          </View>
        </View>
      </FormLayout>
    </SafeAreaView>
  );
};

export default SelectAddTravellers;
