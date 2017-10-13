import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BottomNavigation extends Component {
  render() {
    return (
      <View style={styles.bottomNavStyle} >
        <Text>Profile</Text>
        <Text>Discover</Text>
        <Text>Bla</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderColor: '#cccccc',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10
  }
});

export default BottomNavigation;
