/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import moment from 'moment';

export default class UserPost extends Component {
  render() {
    const { post } = this.props;
    console.log(post, '<---- POST');
    const { author, content, createdAt, upvotes } = post;
    const date = moment(createdAt).fromNow();
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>{author.name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text>{content}</Text>
        <Text>{upvotes} upvotes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderColor: '#f5f5f5',
    borderBottomWidth: 1
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5

  },
  date: {
    color: '#212121',
    fontSize: 11,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 15,
    paddingVertical: 3
  }
});
