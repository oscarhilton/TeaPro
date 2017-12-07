import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import CircleAvatar from './CircleAvatar';
import { goToScene } from '../actions/navActions';

class RatingsBar extends Component {
  handleReviewButtonPress() {
    const { index, routes } = this.props.nav;
    const base = routes[index];
    const screen = base.routes[base.index];
    const current = screen.routes[screen.index].routeName;
    if (current !== 'reviews') {
      this.props.goToScene('reviews');
    }
  }

  renderReviewButton() {
    const { reviews } = this.props.tea;
    if (reviews.length > 0) {
      const lastThree = [];
      let max = 0;
      if (reviews.length >= 3) {
        max = 3
      } else {
        max = reviews.length;
      }
      for (let i = 0; i < max; i++) {
        lastThree.push(reviews[i]);
      }
      const renderHeads =
            lastThree.length > 0 ?
            lastThree.map((review) =>
            <CircleAvatar
              key={review._id}
              uri={review.author.avatar}
              width={30}
              addStyle={styles.circleStyle}
            />) : <View />;
      return (
        <TouchableOpacity
          style={styles.reviewsStyle}
          onPress={this.handleReviewButtonPress.bind(this)}
        >
          <View style={styles.avatarStyle}>
            {renderHeads}
          </View>
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>{reviews.length} reviews</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle} >
        {this.renderReviewButton()}
        <View style={{ justifyContent: 'center' }}>
          <StarRating
            disabled={true}
            starSize={15}
            starColor={'#212121'}
            maxStars={5}
            rating={this.props.rating}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#eeeeee',
    borderBottomWidth: 1
  },
  reviewsStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarStyle: {
    flexDirection: 'row',
    zIndex: 2
  },
  textContainerStyle: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#f5f5f5',
    backgroundColor: 'white',
    marginLeft: -20,
    zIndex: 1
  },
  textStyle: {
    marginLeft: 30,
    color: '#212121'
  },
  circleStyle: {
    marginRight: -8
  }
});

const mapStateToProps = ({ teas, nav }) => {
  return { tea: teas.currentTea, nav };
};

export default connect(mapStateToProps, { goToScene })(RatingsBar);
