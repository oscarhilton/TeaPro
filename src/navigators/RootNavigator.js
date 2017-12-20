import React from 'react';
import { StackNavigator } from 'react-navigation';
// import { icon } from 'react-native-elements';

import { OnBoardingNavigator } from './OnBoardingNavigator';
import { TeaScreenNavigator } from './TeaScreenNavigator';
import { MainNavigator } from './MainNavigator';

import UserProfileScreen from '../screens/UserProfileScreen';
import UserListScreen from '../screens/UserListScreen';

export const RootNavigator = StackNavigator({
  Tabs: {
    screen: MainNavigator,
  },
  ViewTea: {
    screen: TeaScreenNavigator
  },
  OnBoarding: {
    screen: OnBoardingNavigator
  },
  UserProfile: {
    screen: UserProfileScreen
  },
  UserList: {
    screen: UserListScreen
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
