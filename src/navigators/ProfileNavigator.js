import React from 'react';
import { StackNavigator } from 'react-navigation';
// import { icon } from 'react-native-elements';

import { OnBoardingNavigator } from './OnBoardingNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import UserListScreen from '../screens/UserListScreen';

export const ProfileNavigator = StackNavigator({
  Profile: {
    screen: ProfileScreen
  },
  UserProfile: {
    screen: UserProfileScreen
  },
  OnBoarding: {
    screen: OnBoardingNavigator
  },
  UserList: {
    screen: UserListScreen
  }
}, {
  mode: 'modal',
  headerMode: 'screen'
});
