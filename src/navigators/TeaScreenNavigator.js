import React from 'react';
import { StackNavigator } from 'react-navigation';

import WriteReviewScreen from '../screens/WriteReviewScreen';
import { TeaTabWrapper } from './TeaTabWrapper';

export const TeaScreenNavigator = StackNavigator({
  ViewTea: {
    screen: TeaTabWrapper,
    navigationOptions: ({navigation}) => ({
      header: false
    })
  },
  WriteReviewScreen: {
    screen: WriteReviewScreen
  }
});
