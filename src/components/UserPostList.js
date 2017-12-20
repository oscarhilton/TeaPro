/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import UserPost from './UserPost';

const UserPostList = ({ posts }) => {
  console.log(posts);
  const showPosts = posts.map(post => <UserPost key={post._id} post={post} />);
  return (
    <View style={styles.container}>
      {showPosts}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserPostList;
