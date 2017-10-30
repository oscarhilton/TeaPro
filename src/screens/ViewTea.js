import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../components/common';
import Accordion from '../components/Accordion';
import ViewTeaHeader from '../components/ViewTeaHeader';
import RatingsBar from '../components/RatingsBar';
import {
  addTeaToCupboard,
  addTeaToWishlist,
  returnCupboardTeas,
  goToScene
} from '../actions';

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
    console.log(tea, '<-- Tea to review');
    this.props.goToScene('WriteReview', tea);
  }

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <ScrollView
        style={styles.backgroundStyle}
      >
        <ViewTeaHeader tea={params} />
        <RatingsBar />
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
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1
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
