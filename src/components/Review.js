import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import StarRating from 'react-native-star-rating';
import UserPost from './UserPost';
import CircleAvatar from './CircleAvatar';
import ViewUserAvatar from './ViewUserAvatar';
import CommentForm from './CommentForm';
import VoteButtons from './VoteButtons';

class Review extends Component {
  handleViewUser() {
    this.props.loadUser();
    this.props.displayUser(this.props.review.author._id);
    this.props.goToScene('UserProfile');
  }

  handleUpvote(target) {
    console.log('UPVOTE!', target);
  }

  handleDownvote(target) {
    console.log('DOWNVOTE', target);
  }

  renderReview() {
    const { auth, review } = this.props;
    const { user } = auth;
    const {
      author,
      title,
      content,
      createdAt,
      rating,
      comments,
      upvotes,
      downvotes
    } = review;
    const date = moment(createdAt).fromNow();
    const showComments = comments.map(comment => <View>{comment.name}</View>);
    if (user && review) {
      return (
        <View style={styles.componentStyle}>
          <UserPost post={review} rating={<StarRating
            disabled
            starSize={10}
            rating={rating}
          />} />
          {/* <View style={styles.topStyle}>
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
            <View style={styles.commentStyle}>
              <Text style={styles.titleStyle}>{author.name} - {date}</Text>
              <Text style={styles.contentStyle}>{content}</Text>
            </View>
            <View>
              <ViewUserAvatar id={author._id} avatar={author.avatar} width={40} />
            </View>
          </View>
          <View style={styles.votesContainer}>
            <VoteButtons
              user={user._id}
              author={author}
              target={review._id}
              upvotes={upvotes}
              downvotes={downvotes}
              handleUpvote={this.handleUpvote.bind(this)}
              handleDownvote={this.handleDownvote.bind(this)}
            />
          </View>
          <View>
            <Text>{comments.length} Comments</Text>
            {showComments}
            <CommentForm reviewId={review._id} />
          </View> */}
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        {this.renderReview()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    padding: 5,
    backgroundColor: 'white',
  },
  topStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    alignItems: 'center',
    padding: 10,
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
    padding: 10,
    paddingTop: 0
  },
  titleStyle: {
    fontWeight: '600',
    paddingBottom: 5,
    marginBottom: 5,
    color: 'red'
  },
  contentStyle: {
    fontWeight: '100'
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

export default connect(mapStateToProps)(Review);
