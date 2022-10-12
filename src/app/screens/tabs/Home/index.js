/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {BLUE, LIGHT_BLUE, WHITE} from '../../../utils/constants/Colors';
import Disclaimer from '../../../components/Disclaimer';
import Icon from 'react-native-vector-icons/Ionicons';
const HomePage = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <SafeAreaView style={{backgroundColor: BLUE}} />
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <View
          style={{
            flex: 4,
            backgroundColor: BLUE,
            borderBottomEndRadius: 40,
            borderBottomStartRadius: 40,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: WHITE,
              fontSize: 34,
              width: '100%',
              textAlign: 'center',
            }}>
            Canada
          </Text>
          <Text
            style={{
              color: WHITE,
              fontSize: 20,
              fontWeight: '500',
              marginVertical: 20,
            }}>
            Advance CBSA Declaration
          </Text>
          <Disclaimer>
            Help save time at the kiosk/eGate by submitting your declaration in
            advance
          </Disclaimer>
        </View>
        <View style={{flex: 6, backgroundColor: WHITE}}>
          <View
            style={{
              backgroundColor: WHITE,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              position: 'absolute',
              alignSelf: 'center',
              top: -50,
              zIndex: 2,
              shadowRadius: 10,
              shadowOpacity: 0.3,
              padding: 20,
            }}>
            <Icon name={'shield-outline'} size={40} color={LIGHT_BLUE} />
            <Text
              style={{
                color: BLUE,
                fontSize: 24,
                fontWeight: 'bold',
                lineHeight: 26,
                textAlign: 'center',
                marginTop: 15,
              }}>
              Start your Advance CBSA Declaration
              <Text style={{fontWeight: '400'}}> (optional)</Text>
            </Text>
            <TouchableOpacity
              onPress={() => navigate('AirportArrivalInfo')}
              style={{
                backgroundColor: BLUE,
                marginTop: 20,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                height: 45,
              }}>
              <Text
                style={{
                  color: WHITE,
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomePage;
