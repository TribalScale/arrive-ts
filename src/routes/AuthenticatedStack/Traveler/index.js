import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TravallerScreen from '../../../screens/Tabs/Travelers';
import TravelDocument from '../../../screens/Tabs/Travelers/TravelDocument';
import DocumentDetails from '../../../screens/Tabs/Travelers/DocumentDetails';

import {RoutesType} from '../../../utils/constants';
import {defaultHeader} from '../..';

const Stack = createNativeStackNavigator();

const TravelerStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name={RoutesType.TRAVELERS_SCREEN}
        component={TravallerScreen}
        options={{title: 'Saved Travelers'}}
      />
      <Stack.Screen
        name={RoutesType.TRAVEL_DOCUMENT_SCREEN}
        component={TravelDocument}
        options={{title: 'Travel Document'}}
      />
      <Stack.Screen
        name={RoutesType.TRAVEL_DOCUMENT_DETAILS_SCREEN}
        component={DocumentDetails}
        options={{title: 'Document Details'}}
      />
    </Stack.Navigator>
  );
};

export default TravelerStack;
