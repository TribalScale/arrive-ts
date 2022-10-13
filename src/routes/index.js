import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HeaderTitle from '../components/HeaderTitle';
import BackButton from '../components/Button/BackButton';
import {AuthContext} from '../context/AuthContext';

import UnauthenticatedStack from './UnauthenticatedStack';
import AuthenticatedStack from './AuthenticatedStack';

export const defaultHeader = {
  headerShown: true,
  headerStyle: {backgroundColor: 'rgba(32, 52, 73, 1)'},
  headerTransparent: false,
  headerTitle: props => <HeaderTitle {...props} />,
  headerLeft: ({canGoBack}) => canGoBack && <BackButton />,
};

const Router = () => {
  const [state] = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state?.isLogin ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
};

export default Router;
