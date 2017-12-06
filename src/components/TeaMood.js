/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ProgressBarClassic from 'react-native-progress-bar-classic';

const TeaMood = ({ mood, score }) => {
  return (
    <View style={styles.container}>
      <Text>{mood.title}</Text>
      <Text>{mood.description}</Text>
      <ProgressBarClassic progress={score} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TeaMood;
