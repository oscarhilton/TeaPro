import React, { Component } from 'react';
import { View, ScrollView, Text} from 'react-native';
import { connect } from 'react-redux';
import { SEARCH_OFFSET } from '../components/styleHelpers';
import { FloatingButton } from '../components/common';
import ChooseCategories from '../components/onBoarding/ChooseCategories';
import ChooseMoods from '../components/onBoarding/ChooseMoods';
import { SectionHeader } from '../components/common';

import { goBack } from '../actions/navActions';
import { submitOnboarding } from '../actions/authActions';
import {
  fetchCupboardTeas,
  returnCupboardTeas,
} from '../actions/cupboardActions';

class OnBoardingScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };

  handleCancel() {
    this.props.goBack();
  }

  handleChoices() {
    const { currentUser, chosenCategories, chosenMoods } = this.props;
    this.props.submitOnboarding(currentUser, chosenMoods, chosenCategories);
    this.props.fetchCupboardTeas();
    this.props.returnCupboardTeas(currentUser);
    this.props.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#212121' }}>
        <ScrollView style={{ paddingBottom: 200 }}>
          <SectionHeader heading={"Choose your favourite teas"} />
          <ChooseCategories />
          <SectionHeader heading={"Choose your interests"} />
          <ChooseMoods />
        </ScrollView>
        <FloatingButton
          style={{ position: 'absolute', bottom: 20, width: 150, right: 20 }}
          onPress={this.handleChoices.bind(this)}
        >
          Save choices
        </FloatingButton>
        <FloatingButton
          style={{ position: 'absolute', bottom: 20, width: 150, left: 20 }}
          onPress={this.handleCancel.bind(this)}
        >
          Cancel
        </FloatingButton>
      </View>
    );
  }
}

const mapStateToProps = ({ auth, categories, moods }) => {
  const currentUser = auth.user._id;
  const chosenCategories = categories.chosenCategories;
  const chosenMoods = moods.chosenMoods;
  return { currentUser, chosenCategories, chosenMoods };
};

export default connect(mapStateToProps, {
  goBack,
  submitOnboarding,
  fetchCupboardTeas,
  returnCupboardTeas
})(OnBoardingScreen);
