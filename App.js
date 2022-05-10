import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './src/router';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
