import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthContextProvider} from './app/context/AuthContext';
import Router from './app/routes';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import {LogBox} from 'react-native';

Amplify.configure(awsconfig);

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <AuthContextProvider>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </AuthContextProvider>
  );
};

export default App;
