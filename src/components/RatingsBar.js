import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import CircleAvatar from './CircleAvatar';

class RatingsBar extends Component {
  renderReviewButton() {
    const { reviews } = this.props.tea;
    console.log(reviews);
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
      const renderHeads = lastThree.length > 0 ? lastThree.map((review) => <CircleAvatar key={review._id} uri={review.author.avatar} width={30} addStyle={styles.circleStyle} />) : <View />;
      return (
        <View style={styles.reviewsStyle} >
          {renderHeads}
          <Text>{reviews.length} reviews</Text>
        </View>
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
    justifyContent: 'center'
  },
  circleStyle: {
    marginRight: -8
  }
});

const mapStateToProps = ({ teas }) => {
  return { tea: teas.currentTea };
};

export default connect(mapStateToProps, null)(RatingsBar);
