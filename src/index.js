import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthContextProvider} from './context/AuthContext';
import Router from './routes';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

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
