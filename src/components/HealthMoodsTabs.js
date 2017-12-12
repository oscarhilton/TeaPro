/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import TeaMoodsList from './TeaMoodsList';

const TeaTabs = TabNavigator({
  Moods: {
    screen: TeaMoodsList
  },
  Health: {
    screen: TeaMoodsList
  }
}, {
  tabBarPosition: 'top',
  lazy: true,
  swipeEnabled: true,
  animationEnabled: true
});

export default class HealthMoodsTabs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TeaTabs
          screenProps={{
            moods: this.props.moods
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
