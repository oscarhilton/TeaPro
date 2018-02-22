/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Progress from 'react-native-animated-progress-bar';

const TeaMood = ({ mood, score }) => {
  return (
    <View style={styles.container}>
      <Text>{mood.title}</Text>
      <Text>{mood.description}</Text>
      <Progress
          progress={score}
          backgroundStyle={styles.backgroundStyle}
          progressStyle={styles.progressStyle}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginBottom: 10
  },
  progressStyle: {
    backgroundColor: '#EFCA2B'
  },
  backgroundStyle: {
    padding: 0,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    height: 10,
    overflow: 'hidden'
  }
});

export default TeaMood;
