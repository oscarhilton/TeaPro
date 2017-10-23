import React from 'react';
import { TabNavigator, StackNavigator, Platform } from 'react-navigation';
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
}, {
  headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
      activeTintColor: 'red',  // Color of tab when pressed
      inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
        height: 50
      }
} });

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
