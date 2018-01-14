/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class IconText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={{ uri: this.props.uri }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 50
  },
  icon: {
    width: 18,
    height: 18
  },
  textContainer: {
    marginLeft: 5
  },
  text: {
    fontSize: 12
  }
});
