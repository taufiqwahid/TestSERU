import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/config/Redux/store';
import Router from './src/router';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
