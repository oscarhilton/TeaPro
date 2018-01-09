import React from 'react';
import { TabNavigator } from 'react-navigation';

import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

export const MainNavigator = TabNavigator({
  Profile: {
    screen: ProfileScreen
  },
  Discover: {
    screen: DiscoverScreen
  },
  Notifications: {
    screen: NotificationsScreen
  }
}, {
  tabBarPosition: 'bottom',  // So your Android tabs go bottom
  initialRouteName: 'Discover',
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true,
  showIcon: true,
  tabBarOptions: {
    activeTintColor: 'red',  // Color of tab when pressed
    inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
    showLabel: true,
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
      height: 40,
      paddingTop: 5
    }
} });
