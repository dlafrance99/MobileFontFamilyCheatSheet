import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';

const navigator = createSwitchNavigator({
  Home: HomeScreen
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(navigator)