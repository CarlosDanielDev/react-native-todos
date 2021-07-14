import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import AppProvider from './src/hooks';

export default function App() {
  return (
    <AppProvider>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home />
    </AppProvider>
  );
}
