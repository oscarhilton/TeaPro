import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import Interactable from 'react-native-interactable';
import { connect } from 'react-redux';

import { Button, Spinner, ButtonRow } from '../components/common';
import Accordion from '../components/Accordion';
import HealthMoodsTabs from '../components/HealthMoodsTabs';

import { goToScene } from '../actions/navActions';
import { scrollTrigger } from '../actions/teaActions';
import {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
} from '../actions/cupboardActions';

class TeaInfoScreen extends Component {
  static navigationOptions = {
  };
  handleAddTeaCupboard(tea) {
    this.props.addTeaToCupboard(tea, this.props.auth.user._id);
    this.props.returnCupboardTeas(this.props.auth.user._id);
  }

  handleAddTeaWishlist(tea) {
    this.props.addTeaToWishlist(tea, this.props.auth.user._id);
  }

  handleWriteReview(tea) {
    this.props.goToScene('WriteReview', tea);
  }

  renderUserControls() {
    console.log(this.props, 'PROPS!');
    const { loggedIn, user } = this.props.auth;
    const { cupboard } = user;
    const { loaded, currentTea } = this.props.teas;
    const cupboardButtonText = cupboard.indexOf(currentTea._id) > - 1;
    if (loggedIn) {
      if (loaded) {
        const { currentTea } = this.props.teas;
        console.log(currentTea);

        return (
          <ButtonRow>
            <Button
              onPress={this.handleAddTeaCupboard.bind(this, currentTea)}
            >
              {cupboardButtonText ? 'Remove tea from cupboard' : 'Add tea to cupboard'}
            </Button>
            <Button
              onPress={this.handleAddTeaWishlist.bind(this, currentTea)}
            >
              Add tea to wishlist
            </Button>
            <Button
              onPress={this.handleWriteReview.bind(this, currentTea)}
            >
              Write a review
            </Button>
          </ButtonRow>
        );
      }
    }
    return (
      <Accordion
        heading={'NOT LOGGED IN'}
      />
    );
  }

  renderTeaScreen() {
    if (this.props.teas.loaded) {
      const { currentTea } = this.props.teas;
      return (
        <View style={{ flex: 1 }}>
          <View
            style={styles.backgroundStyle}
          >
            <Accordion
              heading={'Steep Time'}
              text={currentTea.steeptime}
            />
            <Accordion
              heading={'Description'}
              text={currentTea.description}
              textStyle={styles.descriptionStyle}
            />
            {this.renderUserControls()}
            <HealthMoodsTabs
              navigation={this.props.navigation}
              moods={currentTea.moods}
            />
          </View>
        </View>
      );
    }
    return (
      <Spinner />
    );
  }

  render() {
    // const { currentTea } = this.props.teas;
    return (
      <View style={{ flex: 1 }}>
        {this.renderTeaScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#212121',
    left: 0,
    right: 0
  },
  descriptionStyle: {
    color: '#212121',
    fontSize: 20,
    fontFamily: 'Georgia'
  }
});

const mapStateToProps = ({ auth, teas }) => {
  return { auth, teas };
};

export default connect(mapStateToProps, {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
  goToScene,
  scrollTrigger
})(TeaInfoScreen);
