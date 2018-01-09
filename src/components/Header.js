import React, { Component } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor(props) {
    super(props);
    const { width } = Dimensions.get('window');
    this.state = {
      searchOpen: false,
      animation: new Animated.Value(),
      width
    };
  }

  handleToggle() {
    const { searchOpen, width } = this.state;
    let initialValue = searchOpen ? width : 50;
    let finalValue = searchOpen ? 50 : width;
    this.setState({ searchOpen: !searchOpen });
    this.state.animation.setValue(initialValue);
    Animated.spring(
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();
  }

  render() {
    const opacity = this.props.results ? 0.9 : 0.3;
    return (
      <Animated.View
        style={[
            styles.headerStyle,
            { width: this.state.animation },
            { backgroundColor: `rgba(255,255,255,${opacity})` }
          ]}
      >
        <SearchBar handleToggle={this.handleToggle.bind(this)} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    flex: 1,
    zIndex: 999,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOpacity: 0.5,
    shadowOffset: { height: 3 }
  }
});

const mapStateToProps = ({ search }) => {
  return { results: search.results.length > 0 };
};

export default connect(mapStateToProps)(Header);
