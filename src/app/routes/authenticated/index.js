import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//Utils
import {ROUTES} from '../../utils/constants/RoutesIdentifier';
//Stacks
import HomeStack from './Home';
import TravelersStack from './Traveler';
import ResourcesStack from './Resource';
import SettingsStack from './Settings';
import {tabIconNames} from '../../utils/constants/TabIconNames';

const Tab = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const {active, inactive} = tabIconNames[route.name];
          const iconName = focused ? active : inactive;
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgba(32, 52, 73, 1)',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name={ROUTES.Stacks.HOME_STACK}
        component={HomeStack}
        options={() => ({
          tabBarLabel: 'Home',
        })}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Travelers',
        }}
        name={ROUTES.Stacks.TRAVELERS_STACK}
        component={TravelersStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Resources',
        }}
        name={ROUTES.Stacks.RESOURCES_STACK}
        component={ResourcesStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
        }}
        name={ROUTES.Stacks.SETTINGS_STACK}
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
};
export default AuthenticatedStack;
