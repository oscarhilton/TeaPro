/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { Button } from '../components/common';
import ImageBackground from '../components/ImageBackground';

import { goToScene } from '../actions/navActions';

class OnBoardingIntro extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  handleProceed() {
    this.props.goToScene('preferences');
  }
  render() {
    return (
      <ImageBackground
        image={"https://i.pinimg.com/736x/48/27/18/4827182e2a8959eb596f7061119de608--floral-designs-floral-patterns.jpg"}
      >
        <View style={styles.bottomButtons}>
          <Button
            onPress={this.handleProceed.bind(this)}
          >
            CONTINUE
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 40,
    left: '15%',
    width: '70%',
    zIndex: 3
  }
});

export default connect(null, { goToScene })(OnBoardingIntro);
