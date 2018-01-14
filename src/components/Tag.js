/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Tag extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgb(63,65,83)',
    borderWidth: 1,
    margin: 2
  },
  text: {
    color: '#212121',
    padding: 8
  }
});
