import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, Platform } from 'react-navigation';

import OnBoardingIntro from '../screens/OnBoardingIntro';
import OnBoardingScreen from '../screens/OnBoardingScreen';

export const OnBoardingNavigator = TabNavigator({
  intro: {
    screen: OnBoardingIntro
  },
  preferences: {
    screen: OnBoardingScreen
  }
}, {
  swipeEnabled: false,
  animationEnabled: true,
  backBehavior: 'none'
});
