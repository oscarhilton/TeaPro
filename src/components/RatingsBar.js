import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Stars from './Stars';

class RatingsBar extends Component {
  render() {
    return (
      <View style={styles.containerStyle} >
        <View style={styles.reviewsStyle} >
          <Text>Reviews</Text>
        </View>
        <Stars score={0.2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#eeeeee',
    borderBottomWidth: 1
  },
  reviewsStyle: {

  }
});

export default RatingsBar;
