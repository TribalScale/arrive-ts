import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
//Stacks
import UnauthenticatedStack from './unauthenticated';
import AuthenticatedStack from './authenticated';
import HeaderTitle from '../components/HeaderTitle';
import BackButton from '../components/Button/BackButton';

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
