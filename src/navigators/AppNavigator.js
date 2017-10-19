import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { icon } from 'react-native-elements';

import Discover from '../screens/Discover';
import Profile from '../screens/Profile';
import ViewTea from '../screens/ViewTea';

export const Tabs = TabNavigator({
  Discover: {
    screen: Discover
  },
  Profile: {
    screen: Profile
  }
});

export const Navigator = StackNavigator({
  Tabs: {
    screen: Tabs,
    cardStyle: {
      backgroundColor: 'white'
    }
  },
  ViewTea: {
    screen: ViewTea
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
