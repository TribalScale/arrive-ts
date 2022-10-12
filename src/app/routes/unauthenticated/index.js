import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import EmailScreen from '../../screens/signup/Email';
//Utils
import {ROUTES} from '../../utils/constants/RoutesIdentifier';
import PasswordScreen from '../../screens/signup/Password';
import InfoCarouselScreen from '../../screens/signup/IntroCarousel';
import SignInScreen from '../../screens/signin/SignIn';

const Stack = createNativeStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.EMAIL_SCREEN} component={EmailScreen} />
      <Stack.Screen name={ROUTES.PASSWORD_SCREEN} component={PasswordScreen} />
      <Stack.Screen name={ROUTES.SIGNIN_SCREEN} component={SignInScreen} />
      <Stack.Screen
        name={ROUTES.INFO_CAROUSEL}
        component={InfoCarouselScreen}
      />
    </Stack.Navigator>
  );
};
export default UnauthenticatedStack;
