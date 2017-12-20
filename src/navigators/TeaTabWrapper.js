/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import TeaInfoScreen from '../screens/TeaInfoScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import PhotosScreen from '../screens/PhotosScreen';
import ViewTeaHeader from '../components/ViewTeaHeader';

const TeaTabs = TabNavigator({
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
  tabBarPosition: 'top',
  initialRouteName: 'info',
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true,
  backBehavior: 'none'
});

class TeaTabWrapper extends Component {
  render() {
    console.log(this.props.navigation, '<-----------!!!');
    return (
      <View style={styles.container}>
        <ViewTeaHeader navigation={this.props.navigation} />
        <TeaTabs navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TeaTabWrapper;
