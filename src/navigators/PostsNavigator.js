import React from 'react';
import { StackNavigator } from 'react-navigation';

import PostsScreen from '../screens/PostsScreen';
import WritePostScreen from '../screens/WritePostScreen';

export const PostsNavigator = StackNavigator({
  Posts: {
    screen: PostsScreen
  },
  WritePostScreen: {
    screen: WritePostScreen
  }
});
