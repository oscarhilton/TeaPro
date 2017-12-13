/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class UserFollowScoreButton extends Component {
  handleShowUsers() {
    alert('hello!');
  }

  render() {
    const { followScore, followText } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleShowUsers.bind(this)}
        >
          <Text>{followScore} {followText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(212,249,196)',
    padding: 10
  },
});
