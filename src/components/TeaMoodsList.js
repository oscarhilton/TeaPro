import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import TeaMood from './TeaMood';

const TeaMoodsList = ({ screenProps }) => {
  const { moods } = screenProps;
  const mapMoods = moods.map(mood => <TeaMood key={mood._id} mood={mood.mood} score={mood.score} />);
  return (
    <View style={styles.container}>
      {mapMoods}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default TeaMoodsList;
