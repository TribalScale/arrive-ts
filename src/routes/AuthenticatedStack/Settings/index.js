import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingsScreen from '../../../screens/Tabs/Settings';

import {RoutesType} from '../../../utils/constants';
import {defaultHeader} from '../..';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name={RoutesType.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
