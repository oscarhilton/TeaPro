/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { VoteButton } from './common';

class UserPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: this.props.post.upvotes
    };
  }

  handleUpvote() {
    this.setState({ upvotes: this.state.upvotes + 1 });
    alert('upvote!');
  }

  renderUpvoteButton(author, upvotes, user) {
    if (author._id !== user._id) {
      return <Text>{upvotes} upvotes</Text>;
    }
    return (
      <VoteButton
        onPress={this.handleUpvote.bind(this)}
      >
        <Text>Upvote this post ({upvotes})</Text>
      </VoteButton>
    );
  }

  render() {
    const { post, user } = this.props;
    const { author, content, createdAt } = post;
    const { upvotes } = this.state;
    const date = moment(createdAt).fromNow();
    return (
      <View style={styles.container}>
        <View style={styles.inside}>
          <View style={styles.top}>
            <Text>{author.name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text>{content}</Text>
        </View>
        {this.renderUpvoteButton(author, upvotes, user)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderColor: '#f5f5f5',
    borderBottomWidth: 1
  },
  inside: {
    padding: 10,
    backgroundColor: 'rgb(232,251,213)',
    borderRadius: 8
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5

  },
  date: {
    color: '#212121',
    fontSize: 11,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 15,
    paddingVertical: 3
  }
});

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
};

export default connect(mapStateToProps)(UserPost);
