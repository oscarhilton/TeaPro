/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import {
  fetchHotPosts,
  returnHotPosts
} from '../actions/postActions';

import UserPostList from './UserPostList';
import { SectionHeader } from './common';

class HotPosts extends Component {
  componentWillMount() {
    this.props.fetchHotPosts();
    this.props.returnHotPosts();
  }

  renderPosts() {
    const { posts } = this.props;
    const { loading } = posts;
    switch (loading){
      case true:
        return <Text>Loading</Text>;
      case false:
        console.log(this.props.posts, '<---- HOT');
        const { hot } = this.props.posts;
        return <UserPostList posts={hot} />;
      case null:
        return <Text>ready</Text>;
      default:
        return <Text>ready</Text>;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionHeader heading={'Hot posts'} />
        {this.renderPosts()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps, { fetchHotPosts, returnHotPosts })(HotPosts);
