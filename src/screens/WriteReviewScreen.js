import React, { Component } from 'react';
import { Text, Picker, ScrollView, View, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import UploadImage from '../components/upload/UploadImage';
import { fetchTeaDetails } from '../actions/teaActions';
import { createReview } from '../actions/reviewsActions';
import { requestCategories, returnAllCategories } from '../actions/categoryActions';
import { goBack } from '../actions/navActions';
import { Input, TextArea, Button } from '../components/common';

class WriteReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Review ${navigation.state.params.title}`
  });

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

  handleImageChoice(res, user) {
    this.setState({ image: res, user });
    console.log(this.state);
  }

  async sendReview() {
    const { titleText, bodyText, starCount } = this.state;
    const { currentTea } = this.props.teas;
    const { user } = this.props.auth;
    if (titleText.length > 0 && bodyText.length > 0 && starCount > 0) {
      // this.props.fetchTeaDetails();
      this.props.createReview(user._id, currentTea._id, this.state);
      // await this.props.createReview(_id, currentTea._id, this.state);
      // alert('New review submitted');
      // this.props.goBack();
    } else {
      alert('Fill all fields!');
    }
  }

  render() {
    const tea = this.props.teas.currentTea;
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
          <Picker>
            <Picker.Item label="Brand 1" value="1" />
            <Picker.Item label="Brand 2" value="1" />
          </Picker>
          <UploadImage sendToForm={this.handleImageChoice.bind(this)} teaId={tea} />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputFieldStyle: {
    backgroundColor: '#f1f1f1',
    height: 300
  }
});

const mapStateToProps = ({ auth, teas }) => {
  return { auth, teas };
};

export default connect(mapStateToProps, {
   createReview,
   requestCategories,
   returnAllCategories,
   fetchTeaDetails,
   goBack
 })(WriteReviewScreen);
