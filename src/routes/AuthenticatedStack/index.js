import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {RoutesType} from '../../utils/constants';

import HomeStack from './Home';
import TravelersStack from './Traveler';
import ResourcesStack from './Resource';
import SettingsStack from './Settings';
import {TabIconList} from '../../utils/constants';

const Tab = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const {active, inactive} = TabIconList[route.name];
          const iconName = focused ? active : inactive;
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgba(32, 52, 73, 1)',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name={RoutesType.STACKS.HOME}
        component={HomeStack}
        options={() => ({
          tabBarLabel: 'Home',
        })}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Travelers',
        }}
        name={RoutesType.STACKS.TRAVELERS}
        component={TravelersStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Resources',
        }}
        name={RoutesType.STACKS.RESOURCES}
        component={ResourcesStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
        }}
        name={RoutesType.STACKS.SETTINGS}
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
};
export default AuthenticatedStack;
