import React from 'react';
import { StackNavigator } from 'react-navigation';
// import { icon } from 'react-native-elements';

import { OnBoardingNavigator } from './OnBoardingNavigator';
import { TeaScreenNavigator } from './TeaScreenNavigator';
import { MainNavigator } from './MainNavigator';
import { ProfileNavigator } from './ProfileNavigator';

import UserProfileScreen from '../screens/UserProfileScreen';
import UserListScreen from '../screens/UserListScreen';

export const RootNavigator = StackNavigator({
  Tabs: {
    screen: MainNavigator,
  },
  ViewTea: {
    screen: TeaScreenNavigator,
    navigationOptions: ({navigation}) => ({
      header: false
    })
  }
}, {
  mode: 'modal',
  headerMode: 'screen'
});
