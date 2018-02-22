import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Review from '../components/Review';

class ReviewsScreen extends Component {
  render() {
    const { reviews } = this.props.teas.currentTea;
    const showReviews = reviews.map((review) => <Review key={review._id} review={review} />);
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(38,37,42)' }}>
        {showReviews}
      </View>
    );
  }
}

const mapStateToProps = ({ teas }) => {
  return { teas };
};

export default connect(mapStateToProps)(ReviewsScreen);
