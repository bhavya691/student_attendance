import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Homescreen from './screens/Homescreen'
import Summaryscreen from './screens/Summaryscreen'
import {createAppContainer , createSwitchNavigator} from 'react-navigation';

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  Homescreen:Homescreen,
  Summaryscreen:Summaryscreen
})

var AppContainer = createAppContainer(AppNavigator)
