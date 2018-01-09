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
import CircleAvatar from './CircleAvatar';

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
    if (author && user) {
      if (author._id !== user._id) {
        return <Text>{upvotes} upvotes</Text>;
      }
    }
    return (
      <VoteButton
        onPress={this.handleUpvote.bind(this)}
      >
        <Text>Upvote this post ({upvotes})</Text>
      </VoteButton>
    );
  }

  renderPost() {
    const { post, user } = this.props;
    if (post) {
      const { author, content, createdAt } = post;
      const { upvotes } = this.state;
      const date = moment(createdAt).fromNow();
      return (
        <View style={styles.container}>
          <View>
            <CircleAvatar uri={author.avatar} width={50} />
          </View>
          <View style={styles.inside}>
            <View>
              <View style={styles.top}>
                <Text style={styles.name}>{author.name}</Text>
                <Text style={styles.date}>{date}</Text>
              </View>
              <Text style={styles.content}>{content}</Text>
            </View>
            <View>
              {this.renderUpvoteButton(author, upvotes, user)}
            </View>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.renderPost()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#f5f5f5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  inside: {
    paddingLeft: 10,
    flex: 1
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5

  },
  name: {
    fontWeight: '800'
  },
  date: {
    color: '#212121',
    fontSize: 11,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 15,
    paddingVertical: 3
  },
  content: {
    marginTop: 5,
    marginBottom: 5
  }
});

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
};

export default connect(mapStateToProps)(UserPost);
