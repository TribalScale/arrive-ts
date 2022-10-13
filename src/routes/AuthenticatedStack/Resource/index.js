import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ResourcesScreen from '../../../screens/Tabs/Resources';

import {RoutesType} from '../../../utils/constants';
import {defaultHeader} from '../..';

const Stack = createNativeStackNavigator();

const ResourcesStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name={RoutesType.RESOURCES_SCREEN}
        component={ResourcesScreen}
      />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
