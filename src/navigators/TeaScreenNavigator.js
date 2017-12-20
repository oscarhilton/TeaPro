import { StackNavigator } from 'react-navigation';

import WriteReviewScreen from '../screens/WriteReviewScreen';
import { TeaTabs } from './TeaViewNavigator';

export const TeaScreenNavigator = StackNavigator({
  ViewTea: {
    screen: TeaTabs
  },
  WriteReviewScreen: {
    screen: WriteReviewScreen
  }
});
