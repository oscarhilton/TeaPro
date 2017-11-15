import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
} from '../actions';
import { goToScene } from '../actions/navActions';
import { Button } from '../components/common';
import Accordion from '../components/Accordion';
import ViewTeaHeader from '../components/ViewTeaHeader';
import RatingsBar from '../components/RatingsBar';
import UploadImage from '../components/upload/UploadImage';

class ViewTea extends Component {
  renderUserControls = (tea) => {
    if (this.props.auth.loggedIn) {
      const {firstName, lastName} = this.props.auth.user;
      return (
        <View>
          <Button
            onPress={this.handleAddTeaCupboard.bind(this, tea)}
          >
            Add tea to cupboard
          </Button>
          <Button
            onPress={this.handleAddTeaWishlist.bind(this, tea)}
          >
            Add tea to wishlist
          </Button>
          <Button
            onPress={this.handleWriteReview.bind(this, tea)}
          >
            Write a review
          </Button>
          <UploadImage />
        </View>
      );
    }
    return (
      <Accordion
        heading={'NOT LOGGED IN'}
      />
    );
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

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const average = params.score / params.reviews.length;
    const roundedScore = isNaN(average) ? 0 : Math.round(average * 10) / 10;
    console.log(params);
    return (
      <ScrollView
        style={styles.backgroundStyle}
      >
        <ViewTeaHeader tea={params} />
        <RatingsBar rating={roundedScore} />
        {this.renderUserControls(params)}
        <Accordion
          heading={'Steep Time'}
          text={params.steeptime}
        />
        <Accordion
          heading={'Description'}
          text={params.description}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'black'
  }
});

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
  goToScene
})(ViewTea);
