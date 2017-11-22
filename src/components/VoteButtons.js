/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { VoteButton } from './common';

export default class VoteButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvoted: false,
      downvoted: false,
      upvotes: this.props.upvotes,
      downvotes: this.props.downvotes
    };
  }

  handleUpvote() {
    this.props.handleUpvote(this.props.target);
    this.setState({
      upvoted: true,
      downvoted: false,
      upvotes: this.state.upvotes + 1
    });
  }

  handleDownvote() {
    this.props.handleDownvote(this.props.target);
    this.setState({
      upvoted: false,
      downvoted: true,
      downvotes: this.state.downvotes + 1
    });
  }

  renderVoteButton(type, votes, text, func) {
    const style = type
                  ? { backgroundColor: '#E63B43' }
                  : { backgroundColor: '#f2f2f2' };
    return (
      <VoteButton
        onPress={func}
        style={style}
      >
        <Text>{votes} {text}</Text>
      </VoteButton>
    );
  }

  renderVoteButtons() {
    const {
      user,
      author
    } = this.props;
    const {
      upvotes,
      downvotes,
      upvoted,
      downvoted
    } = this.state;
    if (user !== author._id) {
      return (
        <View style={styles.votesContainer}>
          <Text>{upvotes} UP</Text>
          <Text>{downvotes} DOWN</Text>
        </View>
      );
    }
    return (
      <View style={styles.votesContainer}>
        <View style={{ height: 50, width: 100 }}>
          {this.renderVoteButton(upvoted, upvotes, 'helpful', this.handleUpvote.bind(this))}
        </View>
        <View style={{ height: 50, width: 100 }}>
          {this.renderVoteButton(downvoted, downvotes, 'unhelpful', this.handleDownvote.bind(this))}
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderVoteButtons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
