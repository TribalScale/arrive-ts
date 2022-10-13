import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EmailScreen from '../../screens/Register/Email';
import InfoCarouselScreen from '../../screens/Register/IntroCarousel';
import PasswordScreen from '../../screens/Register/Password';
import LoginScreen from '../../screens/Login';

import {RoutesType} from '../../utils/constants';

const Stack = createNativeStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RoutesType.EMAIL_SCREEN} component={EmailScreen} />
      <Stack.Screen
        name={RoutesType.PASSWORD_SCREEN}
        component={PasswordScreen}
      />
      <Stack.Screen name={RoutesType.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={RoutesType.INFO_CAROUSEL}
        component={InfoCarouselScreen}
      />
    </Stack.Navigator>
  );
};
export default UnauthenticatedStack;
