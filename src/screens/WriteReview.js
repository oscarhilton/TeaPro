import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { createReview } from '../actions/reviewsActions';
import { requestCategories, returnAllCategories } from '../actions/categoryActions';
import { goBack } from '../actions/navActions';
import { Input, TextArea, Button } from '../components/common';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      titleText: '',
      bodyText: ''
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  handleTitleChange(text) {
    this.setState({
      titleText: text
    });
  }

  handleBodyChange(text) {
    this.setState({
      bodyText: text
    });
  }

  async sendReview() {
    const newReview = this.state;
    const teaId = this.props.navigation.state.params._id;
    const { user } = this.props;
    await this.props.createReview(user, teaId, newReview);
    this.props.requestCategories();
    this.props.returnAllCategories();
    this.props.goBack();
    console.log('sent');
  }

  render() {
    const tea = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.containerStyle}>
        <Text>Review {tea.title}</Text>
        <View style={styles.inputFieldStyle}>
          <View style={{ height: 45 }}>
            <Button
              onPress={this.sendReview.bind(this)}
            >
              Publish review
            </Button>
          </View>
          <StarRating
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
          />
          <View style={{ height: 45 }}>
            <Input
              placeholder={'Review title'}
              label="Title"
              onChangeText={this.handleTitleChange.bind(this)}
            />
          </View>
          <TextArea
            placeholder={'Hello'}
            numberOfLines={6}
            label="Review content"
            onChangeText={this.handleBodyChange.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100
  },
  inputFieldStyle: {
    backgroundColor: '#f1f1f1',
    height: 300
  }
});

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user._id
  };
};

export default connect(mapStateToProps, {
   createReview,
   requestCategories,
   returnAllCategories,
   goBack
 })(WriteReview);
