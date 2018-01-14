/* @flow */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import TeaInfoScreen from '../screens/TeaInfoScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import PhotosScreen from '../screens/PhotosScreen';
import ViewTeaHeader from '../components/ViewTeaHeader';

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
  tabBarPosition: 'top',
  initialRouteName: 'info',
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true,
  backBehavior: 'none',
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    }
  },
  header: false
});

const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export class TeaTabWrapper extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });

    const headerOpaciy = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0.8, 0.2],
      extrapolate: 'clamp'
    });

    // const headerOpaciy = 0.2;

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.heading, { height: headerHeight }]}
        >
          <ViewTeaHeader
            headerHeight={headerHeight}
            headerOpactiy={headerOpaciy}
          />
        </Animated.View>
        <ScrollView
          style={styles.body}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >
          <View style={styles.scrollViewContent}>
            <TeaTabs />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    width: '100%',
    position: 'absolute',
    zIndex: 2
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  body: {
    flex: 1
  }
});
