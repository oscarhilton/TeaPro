/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { VoteButton } from './common';
import ViewUserAvatar from './ViewUserAvatar';
import IconText from './IconText';

class UserPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: this.props.post.upvotes,
      downvotes: this.props.post.downvotes || null
    };
  }

  handleUpvote() {
    this.setState({ upvotes: this.state.upvotes + 1 });
    alert('upvote!');
  }

  handleDownvote() {
    this.setState({ upvotes: this.state.downvotes + 1 });
    alert('downvote!');
  }

  renderVoteButton(author, votes, user, text, func) {
    if (votes !== null) {
      if (author && user) {
        if (author._id !== user._id) {
          return <IconText uri='https://image.flaticon.com/icons/png/512/149/149219.png' text={votes} />;
        }
      }
      return (
        <VoteButton
          onPress={func}
          votes={votes}
          image={'https://image.flaticon.com/icons/png/512/149/149219.png'}
        />
      );
    }
  }

  renderImage() {
    const { image } = this.props.post;
    if (image) {
      return (
        <Image
          style={styles.postImage}
          source={{ uri: image.path }}
        />
      );
    }
  }

  renderPost() {
    const { post, user } = this.props;
    if (post) {
      const { author, title, content, createdAt, image } = post;
      const { upvotes, downvotes } = this.state;
      const date = moment(createdAt).fromNow();
      return (
        <View style={styles.container}>
          <View>
            <ViewUserAvatar id={author._id} avatar={author.avatar} width={35} />
          </View>
          <View style={styles.inside}>
            <View>
              <View style={styles.top}>
                <Text style={styles.name}>{author.name}</Text>
                <Text style={styles.date}>{date}</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {this.props.rating}
              </View>
              <View>
                <Text style={styles.content}>{content}</Text>
              </View>
              <View style={styles.postImageContainer}>
                {this.renderImage()}
              </View>
            </View>
            <View style={styles.iconSet}>
              {this.renderVoteButton(author, upvotes, user, 'upvote', this.handleUpvote.bind(this))}
              {this.renderVoteButton(author, downvotes, user, 'downvote', this.handleDownvote.bind(this))}
              <IconText uri='https://image.flaticon.com/icons/png/512/149/149307.png' />
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
    paddingBottom: 5,
    alignItems: 'center',
    marginBottom: 5
  },
  name: {
    fontWeight: '800',
    fontSize: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  title: {
    fontWeight: '600'
  },
  date: {
    color: '#212121',
    fontSize: 9,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 15,
    paddingVertical: 3,
    marginRight: -10
  },
  content: {
    marginTop: 5,
    marginBottom: 5
  },
  iconSet: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },
  postImageContainer: {
    marginTop: 10
  }
});

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
};

export default connect(mapStateToProps)(UserPost);
