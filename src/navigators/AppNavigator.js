import React from 'react';
import { TabNavigator, StackNavigator, Platform } from 'react-navigation';
// import { icon } from 'react-native-elements';

import Discover from '../screens/Discover';
import Profile from '../screens/Profile';
import ViewTea from '../screens/ViewTea';
import OnBoarding from '../screens/OnBoarding';
import WriteReview from '../screens/WriteReview';

export const TeaScreen = StackNavigator({
  ViewTea: {
    screen: ViewTea
  },
  WriteReview: {
    screen: WriteReview
  }
}, {
  headerMode: 'none'
});

export const Tabs = TabNavigator({
  Profile: {
    screen: Profile
  },
  Discover: {
    screen: Discover
  }
}, {
  headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    initialRouteName: 'Discover',
    lazy: true,
    swipeEnabled: true,
    animationEnabled: true,
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
    screen: TeaScreen
  },
  OnBoarding: {
    screen: OnBoarding
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
