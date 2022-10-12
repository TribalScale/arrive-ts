import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screen
import ResourcesScreen from '../../../screens/tabs/Resources';
//Utils
import {ROUTES} from '../../../utils/constants/RoutesIdentifier';
import {defaultHeader} from '../..';

const Stack = createNativeStackNavigator();

const ResourcesStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name={ROUTES.RESOURCES_SCREEN}
        component={ResourcesScreen}
      />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
