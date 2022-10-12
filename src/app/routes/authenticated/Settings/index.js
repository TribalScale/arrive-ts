import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screen
import SettingsScreen from '../../../screens/tabs/Settings';
//Utils
import {ROUTES} from '../../../utils/constants/RoutesIdentifier';
import {defaultHeader} from '../..';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
