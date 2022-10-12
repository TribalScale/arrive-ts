import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screen
import TravallerScreen from '../../../screens/tabs/Travelers';
import TravelDocument from '../../../screens/tabs/Travelers/TravelDocument';
import DocumentDetails from '../../../screens/tabs/Travelers/DocumentDetails';
//Utils
import {ROUTES} from '../../../utils/constants/RoutesIdentifier';
import {defaultHeader} from '../..';

const Stack = createNativeStackNavigator();

const TravelerStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name={ROUTES.TRAVELERS_SCREEN}
        component={TravallerScreen}
        options={{title: 'Saved Travelers'}}
      />
      <Stack.Screen
        name={ROUTES.TRAVEL_DOCUMENT_SCREEN}
        component={TravelDocument}
        options={{title: 'Travel Document'}}
      />
      <Stack.Screen
        name={ROUTES.TRAVEL_DOCUMENT_DETAILS_SCREEN}
        component={DocumentDetails}
        options={{title: 'Document Details'}}
      />
    </Stack.Navigator>
  );
};

export default TravelerStack;
