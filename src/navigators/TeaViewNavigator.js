import React from 'react';
import { TabNavigator } from 'react-navigation';

import TeaInfoScreen from '../screens/TeaInfoScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import PhotosScreen from '../screens/PhotosScreen';

export const TeaTabs = TabNavigator({
  info: {
    screen: TeaInfoScreen
  },
  reviews: {
    screen: ReviewsScreen
  },
  photos: {
    screen: PhotosScreen
  }
}, {
  tabBarOptions: {
    style: {
      backgroundColor: 'white',
      height: 40
    },
    labelStyle: {
      fontSize: 14,
      fontWeight: '600'
    }
  },
  tabBarPosition: 'top',
  initialRouteName: 'info',
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true
});
