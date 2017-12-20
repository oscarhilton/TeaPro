/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import moment from 'moment';

export default class NotificationItem extends Component {
  render() {
    const date = moment(this.props.timestamp).fromNow();
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{this.props.message}</Text>
        <Text>{date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderColor: '#f5f5f5',
    borderBottomWidth: 1
  },
  titleStyle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#212121'
  }
});
