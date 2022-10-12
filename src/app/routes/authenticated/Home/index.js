import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../../../screens/tabs/Home';
import AirportArrivalInfo from './TravelForms/AirportArrivalInfo';
import SelectAddTravellers from './TravelForms/SelectAddTravellers';
import ContactInfo from './TravelForms/ContactInfo';
import ArrivalInfo from './TravelForms/ArrivalInfo';
import CountryOfResidence from './TravelForms/CountryOfResidence';
import AbsenceDuration from './TravelForms/AbsenceDuration';
import PersonalExemptions from './TravelForms/PersonalExemptions';
import CommercialGoods from './TravelForms/CommercialGoods';
import AgriculturalProducts from './TravelForms/AgriculturalProducts';
import Currency from './TravelForms/Currency';
import VisitedFarm from './TravelForms/VisitedFarm';
import Cannabis from './TravelForms/Cannabis';
import UnaccompaniedGoods from './TravelForms/UnaccompaniedGoods';
import SendCBSADeclaration from './TravelForms/SendCBSADeclaration';
import {defaultHeader} from '../..';
import SuccessSubmit from './TravelForms/SuccessSubmit';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{...defaultHeader}}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AirportArrivalInfo"
        component={AirportArrivalInfo}
        options={{title: 'Airport arrival'}}
      />
      <Stack.Screen
        name="SelectAddTravellers"
        component={SelectAddTravellers}
        options={{title: 'Select/Add travellers'}}
      />

      <Stack.Screen
        name="ContactInfo"
        component={ContactInfo}
        options={{title: 'Contact Info'}}
      />
      <Stack.Screen
        name="ArrivalInfo"
        options={{title: 'Arrival information'}}
        component={ArrivalInfo}
      />
      <Stack.Screen
        name="CountryOfResidence"
        options={{title: 'Country/territory of residence'}}
        component={CountryOfResidence}
      />
      <Stack.Screen
        name="DurationOfAbsence"
        options={{title: 'Duration of absence from Canada'}}
        component={AbsenceDuration}
      />
      <Stack.Screen
        name="PersonalExemptions"
        options={{title: 'Personal Exemptions'}}
        component={PersonalExemptions}
      />
      <Stack.Screen
        name="CommercialGoods"
        options={{title: 'Commercial Goods'}}
        component={CommercialGoods}
      />
      <Stack.Screen
        name="AgriculturalProducts"
        options={{title: 'Agricultural Products'}}
        component={AgriculturalProducts}
      />
      <Stack.Screen
        name="Currency"
        options={{title: 'Currency'}}
        component={Currency}
      />
      <Stack.Screen
        name="UnaccompaniedGoods"
        options={{title: 'Unaccompanied Goods'}}
        component={UnaccompaniedGoods}
      />
      <Stack.Screen
        name="VisitedFarm"
        options={{title: 'Visited a Farm'}}
        component={VisitedFarm}
      />
      <Stack.Screen
        name="Cannabis"
        options={{title: 'Cannabis'}}
        component={Cannabis}
      />
      <Stack.Screen
        options={{title: 'Send your declaration to CBSA'}}
        name="SendCBSADeclaration"
        component={SendCBSADeclaration}
      />
      <Stack.Screen
        options={{title: 'Advance CBSA Declaration'}}
        name="SuccessSubmit"
        component={SuccessSubmit}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
