import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator, Platform } from 'react-navigation';
// import { icon } from 'react-native-elements';

import Discover from '../screens/Discover';
import Profile from '../screens/Profile';
import OnBoarding from '../screens/OnBoarding';
import WriteReview from '../screens/WriteReview';
import UserProfile from '../screens/UserProfile';
import InfoScreen from '../screens/InfoScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import PhotosScreen from '../screens/PhotosScreen';
import UserList from '../screens/UserList';
import ViewTeaHeader from '../components/ViewTeaHeader';

export const TeaTabs = TabNavigator({
  info: {
    screen: InfoScreen
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
  animationEnabled: true,
  navigationOptions: {
    header: <ViewTeaHeader />
  }
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
  },
  UserProfile: {
    screen: UserProfile
  },
  UserList: {
    screen: UserList
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
