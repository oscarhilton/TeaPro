import React from 'react';
import { TabNavigator } from 'react-navigation';

import { PostsNavigator } from './PostsNavigator';

import DiscoverScreen from '../screens/DiscoverScreen';
import { ProfileNavigator } from './ProfileNavigator';

export const MainNavigator = TabNavigator({
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: ({navigation}) => ({
      header: false
    })
  },
  Discover: {
    screen: DiscoverScreen,
    navigationOptions: ({navigation}) => ({
      header: false
    })
  },
  Feed: {
    screen: PostsNavigator,
    navigationOptions: ({navigation}) => ({
      header: false
    })
  },
  Notifications: {
    screen: PostsNavigator,
    navigationOptions: ({navigation}) => ({
      header: false
    })
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
