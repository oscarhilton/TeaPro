import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
} from '../actions';
import { goToScene } from '../actions/navActions';
import { Button, Spinner } from '../components/common';
import Accordion from '../components/Accordion';
import ViewTeaHeader from '../components/ViewTeaHeader';
import RatingsBar from '../components/RatingsBar';
import UploadImage from '../components/upload/UploadImage';

class ViewTea extends Component {
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
    if (this.props.auth.loggedIn) {
      // const {firstName, lastName } = this.props.auth.user;
      const { currentTea } = this.props.teas;
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
    return (
      <Accordion
        heading={'NOT LOGGED IN'}
      />
    );
  }

  renderTeaScreen() {
    if (this.props.teas.loaded) {
      const { currentTea } = this.props.teas;
      console.log(currentTea, 'CURRENT TEA');
      const average = currentTea.score / currentTea.reviews.length;
      const roundedScore = isNaN(average) ? 0 : Math.round(average * 10) / 10;
      return (
        <ScrollView
          style={styles.backgroundStyle}
        >
          <ViewTeaHeader tea={currentTea} />
          <RatingsBar rating={roundedScore} />
          {this.renderUserControls()}
          <Accordion
            heading={'Steep Time'}
            text={currentTea.steeptime}
          />
          <Accordion
            heading={'Description'}
            text={currentTea.description}
          />
        </ScrollView>
      );
    }
    return (
      <Spinner />
    );
  }

  render() {
    // const { navigation } = this.props;
    const { currentTea } = this.props.teas;
    console.log(currentTea);
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
    backgroundColor: 'black'
  }
});

const mapStateToProps = ({ auth, teas }) => {
  return { auth, teas };
};

export default connect(mapStateToProps, {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
  goToScene
})(ViewTea);
