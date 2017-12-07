import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, TextArea } from './common';
import { submitComment } from '../actions/reviewsActions';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      comment: ''
    };
  }

  handleOpenForm() {
    this.setState({ show: true });
  }

  handleCommentChange(text) {
    this.setState({ comment: text });
  }

  handleSendForm() {
    const { reviewId } = this.props;
    const { user } = this.props.auth;
    this.props.submitComment(reviewId, this.state.comment, user._id);
  }

  handleCancelForm() {
    this.setState({
      show: false,
      comment: ''
    });
  }

  renderCommentForm() {
    if (this.state.show) {
      return (
        <View>
          <TextArea
            value={this.state.comment}
            onChangeText={this.handleCommentChange.bind(this)}
          />
          <Button
            onPress={this.handleSendForm.bind(this)}
          >
            Send
          </Button>
          <Button
            onPress={this.handleCancelForm.bind(this)}
          >
            Cancel
          </Button>
        </View>
      );
    }
    return (
      <Button
        onPress={this.handleOpenForm.bind(this)}
      >
        Leave a comment
      </Button>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderCommentForm()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { submitComment })(CommentForm);
