import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import Interactable from 'react-native-interactable';
import { connect } from 'react-redux';

import ViewTeaHeader from './ViewTeaHeader';
import { Button, Spinner } from '../components/common';
import Accordion from '../components/Accordion';
import UploadImage from '../components/upload/UploadImage';

import { goToScene } from '../actions/navActions';
import { scrollTrigger } from '../actions/teaActions';
import {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
} from '../actions/cupboardActions';

class InfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 400
    };
  }

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

  handleScroll(event: Object) {
    const reduce = 400 - event.nativeEvent.contentOffset.y;
    this.setState({ scroll: reduce });
  }

  renderUserControls() {
    if (this.props.auth.loggedIn) {
      if (this.props.teas.loaded) {
        const { currentTea } = this.props.teas;
        console.log(currentTea);
        return (
          <View>
            <Button
              onPress={this.handleAddTeaCupboard.bind(this, currentTea)}
            >
              Add tea to cupboard
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
            <UploadImage teaId={currentTea._id} />
          </View>
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
          <ScrollView
            style={styles.backgroundStyle}
            onScroll={this.handleScroll.bind(this)}
          >
            <ViewTeaHeader reduce={this.state.scroll} />
            {this.renderUserControls()}
            <Text style={{ backgroundColor: 'white' }}>{this.state.scroll}</Text>
            <Accordion
              heading={'Steep Time'}
              text={currentTea.steeptime}
            />
            <Accordion
              heading={'Description'}
              text={currentTea.description}
            />
          </ScrollView>
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
})(InfoScreen);
