/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class ImageBackground extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
        <Image
          style={styles.background}
          source={{ uri: this.props.image }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    width: 400
  },
  background: {
    width: '100%',
    height: '100%'
  }
});
