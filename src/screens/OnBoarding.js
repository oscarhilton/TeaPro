import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { SEARCH_OFFSET } from '../components/styleHelpers';
import ChooseCategories from '../components/onBoarding/ChooseCategories';
import ChooseMoods from '../components/onBoarding/ChooseMoods';

class OnBoarding extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#212121', paddingTop: SEARCH_OFFSET }}>
        <ChooseCategories />
        <ChooseMoods />
      </ScrollView>
    );
  }
}

export default OnBoarding;
