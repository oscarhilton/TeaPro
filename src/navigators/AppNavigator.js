import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { icon } from 'react-native-elements';

import DiscoverScene from '../components/DiscoverScene';
import ProfileScene from '../components/ProfileScene';
import ViewTeaScene from '../components/ViewTeaScene';

export const Tabs = TabNavigator({
  Discover: {
    screen: DiscoverScene
  },
  Profile: {
    screen: ProfileScene
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
    cardStyle: {
      backgroundColor: 'white'
    }
  },
  ViewTea: {
    screen: ViewTeaScene
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'transparent',
    opacity: 0.99
  }
});
