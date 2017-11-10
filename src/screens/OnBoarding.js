import React, { Component } from 'react';
import { View } from 'react-native';
import ChooseMoods from '../components/onBoarding/ChooseMoods';

class OnBoarding extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#212121' }}>
        <ChooseMoods />
      </View>
    );
  }
}

export default OnBoarding;
