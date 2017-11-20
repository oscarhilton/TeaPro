import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator, Platform } from 'react-navigation';
// import { icon } from 'react-native-elements';

import Discover from '../screens/Discover';
import Profile from '../screens/Profile';
import OnBoarding from '../screens/OnBoarding';
import WriteReview from '../screens/WriteReview';
import InfoScreen from '../screens/InfoScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import ViewTeaHeader from '../screens/ViewTeaHeader';

export const TeaTabs = TabNavigator({
  info: {
    screen: InfoScreen
  },
  reviews: {
    screen: ReviewsScreen
  }
}, {
  tabBarComponent: () => <ViewTeaHeader />,
  tabBarPosition: 'top',
  initialRouteName: 'info',
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true
});

// TeaTabs.navigationOptions = {
//   header: (
//     <View style={{
//             height: 80,
//             marginTop: 20// only for IOS to give StatusBar Space
//     }}>
//       <Text>HELLO THERE</Text>
//     </View>)
// }; // TODO: WORK THIS THING OUT?

export const TeaScreen = StackNavigator({
  ViewTea: {
    screen: TeaTabs
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
  },
  ViewTea: {
    screen: TeaScreen
  },
  OnBoarding: {
    screen: OnBoarding
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    header: <View><Text>HELLO THERE</Text></View>
  },
});
