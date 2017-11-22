import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import CircleAvatar from './CircleAvatar';
import CommentForm from './CommentForm';
import VoteButtons from './VoteButtons';

import { goToScene } from '../actions/navActions';
import { loadUser, displayUser } from '../actions/userActions';

class Review extends Component {
  handleViewUser() {
    this.props.goToScene('UserProfile');
    this.props.loadUser();
    this.props.displayUser(this.props.review.author._id);
  }

  handleUpvote(target) {
    console.log('UPVOTE!', target);
  }

  handleDownvote(target) {
    console.log('DOWNVOTE', target);
  }

  render() {
    const { auth, review } = this.props;
    const { user } = auth;
    const {
      _id,
      author,
      title,
      content,
      rating,
      comments,
      upvotes,
      downvotes
    } = review;
    return (
      <View style={styles.componentStyle}>
        <View style={styles.topStyle}>
          <Text style={styles.authorNameStyle}>{title}</Text>
          <View>
            <StarRating
              disabled
              starSize={12}
              rating={rating}
            />
          </View>
        </View>
        <View style={styles.commentWrapStyle}>
          <View>
              <TouchableOpacity
              onPress={this.handleViewUser.bind(this)}
              style={styles.authorStyle}
              >
              <CircleAvatar uri={author.avatar} width={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.commentStyle}>
            <Text style={styles.titleStyle}>{author.name}</Text>
            <Text style={styles.contentStyle}>{content}</Text>
          </View>
        </View>
        <View style={styles.votesContainer}>
          <VoteButtons
            user={user._id}
            author={author}
            target={_id}
            upvotes={upvotes}
            downvotes={downvotes}
            handleUpvote={this.handleUpvote.bind(this)}
            handleDownvote={this.handleDownvote.bind(this)}
          />
        </View>
        <View>
          <Text>{comments.length} Comments</Text>
          <CommentForm reviewId={_id} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    margin: 8,
    marginBottom: 2,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  topStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    alignItems: 'center',
    backgroundColor: 'rgb(236,236,236)',
    padding: 15,
    borderRadius: 20,
  },
  authorStyle: {
    marginRight: 10
  },
  commentWrapStyle: {
    flexDirection: 'row'
  },
  authorNameStyle: {
    fontWeight: '600',
  },
  commentStyle: {
    backgroundColor: 'rgb(249,86,86)',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 15,
    width: '85%'
  },
  titleStyle: {
    fontWeight: '600',
    paddingBottom: 5,
    marginBottom: 5,
    color: 'white'
  },
  contentStyle: {
    fontWeight: '100',
    color: 'white'
  },
  votesContainer: {
    marginTop: 10,
    marginLeft: 5,
    flexDirection: 'row'
  }
});

const mapStateToProps = ({ auth, teas }) => {
  return { auth, teas }
};

export default connect(mapStateToProps, { goToScene, loadUser, displayUser })(Review);
