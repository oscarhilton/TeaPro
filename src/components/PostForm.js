/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { submitPost } from '../actions/postActions';

import { TextArea, Button } from './common';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    };
  }

  handleChange(text) {
    this.setState({ post: text });
  }

  handleSubmit() {
    const { user, submitPost } = this.props;
    const { post } = this.state;
    if (user && post.length > 1) {
      submitPost(user, post);
      alert('hi');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextArea
          label={'Make a new post'}
          onChangeText={this.handleChange.bind(this)}
          value={this.state.post}
        />
        <Button
          onPress={this.handleSubmit.bind(this)}
        >
          Make new post
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white'
  },
});

const mapStateToProps = ({ auth }) => {
  return { user: auth.user._id };
};

export default connect(mapStateToProps, { submitPost })(PostForm);
