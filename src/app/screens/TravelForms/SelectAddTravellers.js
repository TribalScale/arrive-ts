import * as React from 'react';
import Header from '../../components/Header';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SelectAddTravellers = ({travellers}) => {
  console.log(travellers);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView>
      <Header title={'Select/Add travellers'} />
      <View style={styles.formContainer}>
        {
          (travellers = true ? (
            <View>
              <Text style={styles.header}>Select travellers for this trip</Text>
              <Text style={{marginBottom: 20}}>
                Use the checkbox beside the traveller entries below to select
                travellers for this trip. You may also update the information or
                add new traveller entries to your list.
              </Text>
              <View style={styles.box}>
                <View style={{justifyContent: 'center'}}>
                  <Checkbox
                    color={'#0D374D'}
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
                <Icon name="plus" size={30} color="#0D374D" />
                <Text style={styles.addBtnText}>Add another traveller</Text>
              </View>
            </View>
          ) : (
            <Text>no</Text>
          ))
        }
      </View>
      <Text onPress={() => navigation.navigate('ContactInfo')}>Next</Text>
    </SafeAreaView>
  );
};

export default SelectAddTravellers;
