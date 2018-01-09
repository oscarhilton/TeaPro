/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ImageBackground from './ImageBackground';

export default class ConnectionRetry extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          image={'https://assets.rbl.ms/14905866/980x.jpg'}
        >
          {this.props.children}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
