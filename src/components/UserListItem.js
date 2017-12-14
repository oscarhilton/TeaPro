/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CircleAvatar from './CircleAvatar';

const UserListItem = ({ user }) => {
  return (
    <View style={styles.container}>
      <CircleAvatar width={50} uri={user.avatar} />
      <View style={styles.name}>
        <Text>{user.name}</Text>
      </View>
    </View>
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
