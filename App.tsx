import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigators/MainNavigator';
 const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Container: {

  },
});

export default App; 

