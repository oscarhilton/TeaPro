import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    const opacity = this.props.results ? 0.9 : 0.3;
    return (
      <View style={[styles.headerStyle, { backgroundColor: `rgba(255,255,255,${opacity})` }]}>
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
    zIndex: 9,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOpacity: 0.5,
    shadowOffset: { height: 3 },
    paddingTop: 20
  }
});

const mapStateToProps = ({ search }) => {
  return { results: search.results.length > 0 };
};

export default connect(mapStateToProps)(Header);
