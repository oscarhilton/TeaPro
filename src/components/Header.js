import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <SearchBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    zIndex: 9,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOpacity: 0.5,
    shadowOffset: { height: 3 },
    paddingTop: 20
  }
});

export default Header;
