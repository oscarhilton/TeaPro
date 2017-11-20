import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import { Button } from './common';
import CircleAvatar from './CircleAvatar';
import CommentForm from './CommentForm';

class Review extends Component {
  renderVoteButtons() {
    const { user } = this.props.auth;
    const { author, upvotes, downvotes } = this.props.review;
    if (user._id !== author._id) {
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
          <Button>{upvotes} Helpful</Button>
        </View>
        <View style={{ height: 50, width: 100 }}>
          <Button>{downvotes} Unhelpful</Button>
        </View>
      </View>
    );
  }

  render() {
    const {
      _id,
      author,
      title,
      content,
      rating,
      upvotes,
      downvotes,
      comments
    } = this.props.review;
    return (
      <View style={styles.componentStyle}>
        <View style={styles.topStyle}>
          <View style={styles.authorStyle}>
            <CircleAvatar uri={author.avatar} width={40} />
            <Text style={styles.authorNameStyle}>{author.name}</Text>
          </View>
          <View>
            <StarRating
              disabled
              starSize={12}
              rating={rating}
            />
          </View>
        </View>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.contentStyle}>{content}</Text>
        </View>
        <View style={styles.votesContainer}>
          {this.renderVoteButtons()}
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
    padding: 10,
    marginBottom: 2,
    backgroundColor: 'white'
  },
  topStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    alignItems: 'center'
  },
  authorStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  authorNameStyle: {
    fontWeight: '600',
    marginLeft: 15
  },
  titleStyle: {
    fontWeight: '600',
    marginTop: 15,
    paddingBottom: 5,
    marginBottom: 5
  },
  contentStyle: {
    fontWeight: '100'
  },
  votesContainer: {
    marginTop: 5,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#f5f5f5',
    flexDirection: 'row',
    width: '100%'
  }
});

const mapStateToProps = ({ auth, teas }) => {
  return { auth, teas }
};

export default connect(mapStateToProps)(Review);
