import React from 'react';
import { StatusBar, LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import ApiProvider from './src/contexts/api';
import Routes from './src/routes';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <ApiProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#2C2C2C' barStyle='light-content'/>
        <Routes/>
      </NavigationContainer>
    </ApiProvider>
  );
}
