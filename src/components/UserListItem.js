/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import CircleAvatar from './CircleAvatar';

const UserListItem = ({ user, handleClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleClick.bind(this, user._id)}
    >
      <CircleAvatar width={50} uri={user.avatar} />
      <View style={styles.name}>
        <Text>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  name: {
    justifyContent: 'center',
    marginLeft: 15
  }
});

export default UserListItem;
