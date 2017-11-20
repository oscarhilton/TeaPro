import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Review from '../components/Review';

class ReviewsScreen extends Component {
  render() {
    const { reviews } = this.props.teas.currentTea;
    console.log(reviews);
    const showReviews = reviews.map((review) => <Review key={review._id} review={review} />);
    return (
      <ScrollView style={{ flex: 1 }}>
        {showReviews}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ teas }) => {
  return { teas };
};

export default connect(mapStateToProps)(ReviewsScreen);
