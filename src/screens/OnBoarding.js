import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { SEARCH_OFFSET } from '../components/styleHelpers';
import { FloatingButton } from '../components/common';
import ChooseCategories from '../components/onBoarding/ChooseCategories';
import ChooseMoods from '../components/onBoarding/ChooseMoods';

class OnBoarding extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#212121',
        paddingTop: SEARCH_OFFSET
      }}>
        <ScrollView style={{ paddingBottom: 200 }}>
          <ChooseCategories />
          <ChooseMoods />
        </ScrollView>
        <FloatingButton
          style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}
          onPress={() => { console.log('Hello'); }}
        >
          Save choices
        </FloatingButton>
      </View>
    );
  }
}

export default OnBoarding;
